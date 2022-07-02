import { hook } from './hook'
import type { Lockfile } from '@pnpm/lockfile-utils'

export const checkSingleVersion = (lockfile: Lockfile) => hook(lockfile)
