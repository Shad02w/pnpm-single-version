import { Config } from '@jest/types'
import * as path from 'path'
import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
    preset: 'ts-jest',
    rootDir: '../',
    testEnvironment: 'node',
    testRegex: [String.raw`\.test\.tsx?$`],
    transform: {
        [String.raw`\.ts$`]: [
            'ts-jest',
            {
                tsconfig: path.join(__dirname, './tsconfig.test.json')
            }
        ]
    }
}

export default config
