import multipartUploadPart from '../../../src/api/multipart/multipartUploadPart'
import * as factory from '../../_fixtureFactory'
import {getSettingsForTesting} from '../../_helpers'
import multipartStart from '../../../src/api/multipart/multipartStart'
import defaultSettings from '../../../src/defaultSettings'

fdescribe('API - multipartUploadPart', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000
  const fileToUpload = factory.file(11).data

  it('should be able to upload part', async() => {
    const settings = getSettingsForTesting({
      publicKey: factory.publicKey('demo')
    })
    const multipartStartUpload = multipartStart(fileToUpload, settings)
    const {parts} = await multipartStartUpload
    const [firstPart] = parts
    const fileSliceToUpload = fileToUpload.slice(0, defaultSettings.multipartChunkSize)

    const multipartUploadPromise = multipartUploadPart(firstPart, fileSliceToUpload)
    const {code} = await multipartUploadPromise

    expect(code).toBeTruthy()
  })
})
