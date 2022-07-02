import { Lockfile } from '@pnpm/lockfile-file'
import { check } from './check'
import { parseOptions } from './parse-option'
import { findProjectRoot } from './find-project-root'
import { pnpmLogger } from './util/pnpm-logger'
import { logInstallationInterruptedMessage } from './error-message'
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
