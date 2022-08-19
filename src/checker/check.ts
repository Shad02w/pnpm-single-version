import { nameVerFromPkgSnapshot, PackageSnapshots } from '@pnpm/lockfile-utils'
import { pipe } from '../util/pipe'
import { ArrayValueMapHelper } from '../util/array-value-map-Helper'
import { LockfilePackagesMissingError } from '../error'
import { globUtil } from '../util/glob-util'
import { createErrorMessage, logErrorMessage } from './error-message'
import type { CheckerOptions, LoggerType, PackageInfo } from '../type'
import type { Lockfile } from '@pnpm/lockfile-utils'
import logger from '@pnpm/logger'
import { pnpmLogger } from '../util/pnpm-logger'
import { Logger } from '../util/logger'

export const filterNonSingleVersionDependencies = (
    packageInfoMap: Map<string, PackageInfo[]>
): Map<string, PackageInfo[]> => {
    const nonSingleVersionPackageInfo = new Map<string, PackageInfo[]>()

    for (const [path, snapshots] of packageInfoMap.entries()) {
        if (snapshots.length > 1) {
            nonSingleVersionPackageInfo.set(path, snapshots)
        }
    }

    return nonSingleVersionPackageInfo
}

const filterSnapshotNeededForChecking =
    (snapshots: PackageSnapshots) =>
    (depsPattern: string[]): Map<string, PackageInfo[]> => {
        const matcher = globUtil.toRegex(depsPattern)
        const packageInfos = ArrayValueMapHelper.create<PackageInfo>()

        for (const [path, snapshot] of Object.entries(snapshots)) {
            const nameVersionInfo: PackageInfo = nameVerFromPkgSnapshot(path, snapshot)
            if (matcher.test(nameVersionInfo.name)) {
                ArrayValueMapHelper.add(packageInfos, nameVersionInfo.name, nameVersionInfo)
            }
        }

        return packageInfos
    }

export const check = (lockfile: Lockfile, options: CheckerOptions, logger: LoggerType) => {
    if (!lockfile.packages) {
        throw new LockfilePackagesMissingError()
    }

    logger.message('Verify single version dependencies...')

    return pipe(
        filterSnapshotNeededForChecking(lockfile.packages),
        filterNonSingleVersionDependencies,
        createErrorMessage,
        logErrorMessage(logger)
    )(options.include)
}
