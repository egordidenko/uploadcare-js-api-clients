/* @flow */
import request, {prepareOptions} from './request'
import type {Settings, FileInfo} from '../types'
import type {RequestOptions} from './request'

export type InfoResponse = FileInfo

/**
 * Returns a JSON dictionary holding file info
 *
 * @param {string} uuid – UUID of a target file to request its info.
 * @param {Settings} settings
 * @return {Promise<InfoResponse>}
 */
export default function info(uuid: string, settings: Settings = {}): Promise<InfoResponse> {
  const options: RequestOptions = prepareOptions({
    path: '/info/',
    query: {
      pub_key: settings.publicKey || '',
      file_id: uuid,
    },
  }, settings)

  /* TODO Need to handle errors */
  return request(options)
    .then(response => response.data)
}