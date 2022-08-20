import fs from 'fs/promises'
import path from 'path'
import { TextDecoder } from 'util'
import { PACKAGE_JSON_OPTIONS_KEY } from '../constant'
import { OptionNotFoundError, OptionSyntaxError } from '../error'
import type { CheckerOptions } from '../type'

const validateOptions = (options: any): CheckerOptions => {
    if (!options) {
        throw new OptionNotFoundError()
    }

    if (!Array.isArray(options?.includes) && !Array.isArray(options?.include)) {
        throw new OptionSyntaxError()
    }

    if (options.include) {
        options.includes = options.include
    }

    return options as CheckerOptions
}

export const parseOptions = async (projectRoot: string): Promise<CheckerOptions> => {
    const packageJsonfile = await fs.readFile(path.join(projectRoot, 'package.json'))
    // @see https://github.dev/sindresorhus/load-json-file
    const packageJSON = JSON.parse(new TextDecoder().decode(packageJsonfile))
    return validateOptions((packageJSON as any)?.[PACKAGE_JSON_OPTIONS_KEY])
}
