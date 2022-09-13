import request from '../request/request.node'
import buildFormData from '../tools/buildFormData'
import getUrl from '../tools/getUrl'
import { defaultSettings, defaultFilename } from '../defaultSettings'
import { getUserAgent } from '../tools/getUserAgent'
import { camelizeKeys, CustomUserAgent } from '@uploadcare/api-client-utils'
import { UploadClientError } from '../tools/errors'
import { retryIfFailed } from '../tools/retryIfFailed'

/* Types */
import { Uuid, ProgressCallback, Metadata } from './types'
import { FailedResponse, NodeFile, BrowserFile } from '../request/types'
import { getStoreValue } from '../tools/getStoreValue'

export type BaseResponse = {
  file: Uuid
}

type Response = BaseResponse | FailedResponse

export type BaseOptions = {
  publicKey: string

  fileName?: string
  baseURL?: string
  secureSignature?: string
  secureExpire?: string
  store?: boolean
  contentType?: string

  signal?: AbortSignal
  onProgress?: ProgressCallback

  source?: string
  integration?: string
  userAgent?: CustomUserAgent

  retryThrottledRequestMaxTimes?: number
  retryNetworkErrorMaxTimes?: number
  metadata?: Metadata
}

/**
 * Performs file uploading request to Uploadcare Upload API.
 * Can be canceled and has progress.
 */
export default function base(
  file: NodeFile | BrowserFile,
  {
    publicKey,
    fileName,
    contentType,
    baseURL = defaultSettings.baseURL,
    secureSignature,
    secureExpire,
    store,
    signal,
    onProgress,
    source = 'local',
    integration,
    userAgent,
    retryThrottledRequestMaxTimes = defaultSettings.retryThrottledRequestMaxTimes,
    retryNetworkErrorMaxTimes = defaultSettings.retryNetworkErrorMaxTimes,
    metadata
  }: BaseOptions
): Promise<BaseResponse> {
  return retryIfFailed(
    () =>
      request({
        method: 'POST',
        url: getUrl(baseURL, '/base/', {
          jsonerrors: 1
        }),
        headers: {
          'X-UC-User-Agent': getUserAgent({ publicKey, integration, userAgent })
        },
        data: buildFormData({
          file: {
            data: file,
            name: fileName ?? (file as File).name ?? defaultFilename,
            contentType
          },
          UPLOADCARE_PUB_KEY: publicKey,
          UPLOADCARE_STORE: getStoreValue(store),
          signature: secureSignature,
          expire: secureExpire,
          source: source,
          metadata
        }),
        signal,
        onProgress
      }).then(({ data, headers, request }) => {
        const response = camelizeKeys(JSON.parse(data)) as Response
        if ('error' in response) {
          throw new UploadClientError(
            response.error.content,
            response.error.errorCode,
            request,
            response,
            headers
          )
        } else {
          return response
        }
      }),
    { retryNetworkErrorMaxTimes, retryThrottledRequestMaxTimes }
  )
}
