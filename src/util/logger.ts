import chalk from 'chalk'
import { APP_NAME } from '../constant'

export function createCheckerMessage(message: string): string {
    return chalk.magenta(APP_NAME + ': ') + message
}

function debug(object: Object) {
    console.log(object)
}

function message(value: string) {
    console.log(createCheckerMessage(value))
}

function error(error: Error) {
    console.log(createCheckerMessage(`${chalk.bgRed(' ERROR ')} ${error.message}`))
}

export const Logger = Object.freeze({
    debug,
    message,
    error
})
