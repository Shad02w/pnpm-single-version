import { nameVerFromPkgSnapshot } from '@pnpm/lockfile-utils'

export interface CheckerOptions {
    include: string[]
}

export interface LoggerType {
    error(error: Error): void
    message(value: string): void
}

export type PackageInfo = ReturnType<typeof nameVerFromPkgSnapshot>

export interface BoleLogger {
    // debug(...value: string[]): void
    info(...value: string[]): void
    warn(...value: string[]): void
    error: (err: Error, log?: string | Error) => void
}
