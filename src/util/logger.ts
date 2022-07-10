import chalk from 'chalk'
import { APP_NAME } from '../constant'

const log = console.log

export function createCheckerMessage(message: string): string {
    return chalk.magenta(APP_NAME + ': ') + message
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
