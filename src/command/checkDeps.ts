import { readWantedLockfile } from '@pnpm/lockfile-file'
import { Logger } from '../util/logger'
import isCI from 'is-ci'
import { check } from '../checker'
import { parseOptions } from '../parser-option/parse-option'
import { findProjectRoot } from '../parser-option/find-project-root'
import chalk from 'chalk'

export const checkDeps = async () => {
    try {
        const projectRoot = await findProjectRoot()
        const options = await parseOptions(projectRoot)
        const lockfile = await readWantedLockfile(projectRoot, { ignoreIncompatible: false })
        if (!lockfile) {
            Logger.message(
                `Cannot find ${chalk.blueBright('pnpm-lock.yaml')}, try to run ${chalk.blueBright(
                    '$ pnpm install'
                )} first`
            )
            process.exit(1)
        }
        const haveError = check(lockfile, options, Logger)
        if (haveError && options.failOnCI && isCI) {
            process.exit(1)
        }
    } catch (error) {
        if (error instanceof Error) {
            Logger.error(error)
        }
    }
}
