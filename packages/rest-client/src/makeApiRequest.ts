import { fetch, Headers, Request } from './lib/fetch/fetch.node'
import { defaultSettings, UserSettings } from './settings'
import { getUserAgent } from './tools/getUserAgent'
import { RestClientError } from './tools/RestClientError'
import { retryIfThrottled } from './tools/retryIfThrottled'

export type ApiRequestQuery = Record<
  string,
  string | number | boolean | Date | undefined | null
>

export type ApiRequestBody = string | string[] | Record<string, unknown>

export type ApiRequestOptions = {
  method: string
  path: string
  query?: ApiRequestQuery
  body?: ApiRequestBody
}

export type ApiRequestSettings = Pick<
  UserSettings,
  | 'apiBaseURL'
  | 'authSchema'
  | 'retryThrottledRequestMaxTimes'
  | 'integration'
  | 'userAgent'
>

export type ApiRequest = {
  request: Request
  response: Response
}

function normalizeQuery(
  input: Required<ApiRequestOptions>['query']
): Record<string, string> {
  const output: Record<string, string> = {}
  for (const [key, value] of Object.entries(input)) {
    if (value === undefined || value === null) {
      continue
    }
    if (value instanceof Date) {
      output[key] = value.toISOString()
    } else {
      output[key] = value.toString()
    }
  }
  return output
}

function getRequestURL(
  path: ApiRequestOptions['path'],
  query: ApiRequestOptions['query'],
  apiBaseURL: Required<UserSettings>['apiBaseURL']
): string {
  const url = new URL(apiBaseURL)
  const searchParams = new URLSearchParams(query && normalizeQuery(query))
  url.pathname = path
  url.search = searchParams.toString()

  return url.toString()
}

export async function makeApiRequest(
  options: ApiRequestOptions,
  {
    authSchema = defaultSettings.authSchema,
    apiBaseURL = defaultSettings.apiBaseURL,
    retryThrottledRequestMaxTimes = defaultSettings.retryThrottledRequestMaxTimes,
    integration = defaultSettings.integration,
    userAgent = defaultSettings.userAgent
  }: ApiRequestSettings
): Promise<ApiRequest> {
  const { method, path, query, body } = options

  if (!authSchema) {
    throw new RestClientError('authSchema is required')
  }
  const url = getRequestURL(path, query, apiBaseURL)
  const requestBody = body && JSON.stringify(body)
  const unsignedRequest = new Request(url, {
    method: method,
    body: requestBody,
    headers: new Headers({
      'Content-Type': 'application/json',
      'X-UC-User-Agent': getUserAgent({
        publicKey: authSchema.publicKey,
        integration,
        userAgent
      })
    })
  })
  const requestHeaders = await authSchema.getHeaders(unsignedRequest)
  const signedRequest = new Request(unsignedRequest, {
    headers: requestHeaders,
    body: requestBody
  })

  const response = await retryIfThrottled(
    () => fetch(signedRequest),
    retryThrottledRequestMaxTimes
  )

  return {
    request: signedRequest,
    response
  }
}
