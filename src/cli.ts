import { readWantedLockfile } from '@pnpm/lockfile-file'
import { Logger } from './util/logger'
import { check } from './check'
import { parseOptions } from './parse-option'
import { findProjectRoot } from './find-project-root'
import { LockFileError } from './error'

const cli = async () => {
    try {
        const projectRoot = await findProjectRoot()
        const options = await parseOptions(projectRoot)

        const lockfile = await readWantedLockfile(projectRoot, { ignoreIncompatible: false })
        if (!lockfile) {
            Logger.error(new LockFileError())
            return
        }
        check(lockfile, options, Logger)
    } catch (error) {
        if (error instanceof Error) {
            Logger.error(error)
        }
    }
}

cli()
