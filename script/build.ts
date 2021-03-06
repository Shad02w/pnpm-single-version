import { spawnSync, SpawnSyncOptionsWithStringEncoding } from 'child_process'
import fs from 'fs-extra'
import path from 'path'

const outputPath = path.join(__dirname, '../dist')
const packageJSONFilePath = path.join(__dirname, '../package.json')
const readMeFilePath = path.join(__dirname, '../README.md')
const licenseFilePath = path.join(__dirname, '../LICENSE')
const sourceFilePath = path.join(__dirname, '../src')
const swcConfigFilePath = path.join(__dirname, '../config/.swcrc')
const tsconfigFilePath = path.join(__dirname, '../config/tsconfig.src.json')

const spawnOptions: SpawnSyncOptionsWithStringEncoding = {
    encoding: 'utf-8',
    shell: true,
    stdio: 'inherit'
}

export const build = async () => {
    await fs.emptyDir(outputPath)
    console.log('> Clean output path')

    await spawnSync('swc', [sourceFilePath, '-d', outputPath, '--config-file', swcConfigFilePath], spawnOptions)
    console.log('> Transpiled')

    await spawnSync('tsc', ['-P', tsconfigFilePath, '--emitDeclarationOnly'], spawnOptions)
    console.log('> d.ts generated')

    await fs.copy(packageJSONFilePath, path.join(outputPath, 'package.json'))
    console.log('> Copied package.json')

    await fs.copy(readMeFilePath, path.join(outputPath, 'README.md'))
    console.log('> Copied README.md')

    await fs.copy(licenseFilePath, path.join(outputPath, 'LICENSE'))
    console.log('> Copied LICENSE')
}

build()
