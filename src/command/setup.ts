import { addCompletionSpecCommand } from '@fig/complete-commander'
import { Command } from 'commander'
import { checkDeps } from './checkDeps'
import { install } from './install'
const packageJSON = require('../../package.json')

const program = new Command()

program.name('pnpm-single-version').alias('psv').version(packageJSON.version)

program.command('check', { isDefault: true }).description('Verify single version dependencies').action(checkDeps)
program.command('install').description('Install the checker file into .psv').action(install)

addCompletionSpecCommand(program)

program.parse()
