import { hook } from './hook/hook'
import type { Lockfile } from '@pnpm/lockfile-utils'

export function checkSingleVersion(lockfile: Lockfile) {
    hook(lockfile)
}
