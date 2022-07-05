import { Config } from '@jest/types'
import * as path from 'path'

const config: Config.InitialOptionsWithRootDir = {
    preset: 'ts-jest',
    rootDir: '../',
    globals: {
        'ts-jest': {
            tsconfig: path.join(__dirname, './tsconfig.test.json')
        }
    },
    testEnvironment: 'node',
    testRegex: [String.raw`\.test\.tsx?$`],
    transform: {
        [String.raw`\.(ts|tsx)$`]: 'ts-jest'
    }
}

export default config
