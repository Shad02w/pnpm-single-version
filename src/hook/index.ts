import { hook } from './hook'
import type { Lockfile } from '@pnpm/lockfile-utils'

export const afterAllResolve = (lockfile: Lockfile) => hook(lockfile)
