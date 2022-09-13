import info from '../api/info'
import { poll } from './poll'
import {
  ComputableProgressInfo,
  FileInfo,
  ProgressCallback
} from '../api/types'
import { CustomUserAgent } from '@uploadcare/api-client-utils'

type ArgsIsReadyPool = {
  file: string
  publicKey: string
  baseURL?: string
  source?: string
  integration?: string
  userAgent?: CustomUserAgent
  retryThrottledRequestMaxTimes?: number
  retryNetworkErrorMaxTimes?: number
  onProgress?: ProgressCallback<ComputableProgressInfo>
  signal?: AbortSignal
}

function isReadyPoll({
  file,
  publicKey,
  baseURL,
  source,
  integration,
  userAgent,
  retryThrottledRequestMaxTimes,
  retryNetworkErrorMaxTimes,
  signal,
  onProgress
}: ArgsIsReadyPool): FileInfo | PromiseLike<FileInfo> {
  return poll<FileInfo>({
    check: (signal) =>
      info(file, {
        publicKey,
        baseURL,
        signal,
        source,
        integration,
        userAgent,
        retryThrottledRequestMaxTimes,
        retryNetworkErrorMaxTimes
      }).then((response) => {
        if (response.isReady) {
          return response
        }
        onProgress && onProgress({ isComputable: true, value: 1 })
        return false
      }),
    signal
  })
}

export { isReadyPoll }
