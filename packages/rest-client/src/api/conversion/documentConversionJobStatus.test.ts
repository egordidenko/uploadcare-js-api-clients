import { describe, it } from '@jest/globals'
import { documentConversionJobStatus } from './documentConversionJobStatus'

import { DOCUMENT_UUID } from '../../../test/fixtures'
import { testSettings } from '../../../test/helpers'
import { ConversionStatus } from '../../types/ConversionStatus'
import { convertDocument } from './convertDocument'
import { copyFileToLocalStorage } from '../file/copyFileToLocalStorage'
import { delay } from '@uploadcare/api-client-utils'

describe('documentConversionJobStatus', () => {
  it('should work', async () => {
    const copy = await copyFileToLocalStorage(
      { source: DOCUMENT_UUID, store: false },
      testSettings
    )

    const { result } = await convertDocument(
      {
        paths: [`${copy.result.uuid}/document/-/format/docx/`],
        store: 'false'
      },
      testSettings
    )

    const { token } = result[0]
    const response = await documentConversionJobStatus(
      {
        token
      },
      testSettings
    )
    expect(response.status).toBeOneOf([
      ConversionStatus.PENDING,
      ConversionStatus.PROCESSING,
      ConversionStatus.FINISHED,
      ConversionStatus.FAILED
    ])
  })

  it('should throw error if non-200 status received', async () => {
    await expect(
      documentConversionJobStatus(
        {
          token: 1
        },
        testSettings
      )
    ).rejects.toThrowError()
  })
})
