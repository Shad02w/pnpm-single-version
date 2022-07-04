import { Config } from '@jest/types'
import * as path from 'path'

const config: Config.InitialOptionsWithRootDir = {
    preset: 'ts-jest',
    rootDir: '../test',
    globals: {
        'ts-jest': {
            tsconfig: path.join(__dirname, './tsconfig.test.json')
        }
    },
    transform: {
        [String.raw`\.(ts|tsx)$`]: 'ts-jest'
    }
}

export default config
