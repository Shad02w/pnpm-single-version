import chalk from 'chalk'

const log = console.log

export function createCheckerMessage(message: string): string {
    return chalk.magenta('Single Version Checker: ') + message
}

function debug(object: Object) {
    log(object)
}

function message(value: string) {
    log(createCheckerMessage(value))
}

function error(error: Error) {
    log(createCheckerMessage(`${chalk.bgRed(' ERROR ')} ${error.message}`))
}

export const Logger = Object.freeze({
    debug,
    message,
    error
})
