import { describe, it } from '@jest/globals'

import 'jest-extended'
import { DOCUMENT_UUID } from '../../../test/fixtures'
import { testSettings } from '../../../test/helpers'
import { conversionInfo } from './conversionInfo'

describe('conversionInfo', () => {
  it('should work with txt document', async () => {
    const { error, format } = await conversionInfo(
      { uuid: DOCUMENT_UUID },
      testSettings
    )

    expect(error).toBeNull()
    expect(format.name).toEqual('txt')
    expect(format.conversionFormats).toBeArray()
    expect(format.conversionFormats.map<string>(({ name }) => name)).toContain(
      'pdf'
    )
  })
})
