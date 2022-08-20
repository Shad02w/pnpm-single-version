import { Lockfile } from '@pnpm/lockfile-file'
import { check } from '../checker'
import { parseOptions } from '../parser-option/parse-option'
import { findProjectRoot } from '../parser-option/find-project-root'
import { pnpmLogger } from '../util/pnpm-logger'
import { logInstallationInterruptedMessage } from '../checker/error-message'
import logger from '@pnpm/logger'

export const hook = async (lockfile: Lockfile) => {
    try {
        const logger = pnpmLogger
        const projectRoot = await findProjectRoot()
        const options = await parseOptions(projectRoot)
        if (check(lockfile, options, logger)) {
            logInstallationInterruptedMessage(logger)
            process.exit(1)
        }
        return lockfile
    } catch (error) {
        if (error instanceof Error) {
            logger.error(error)
        }
    }
}
