import { spawnSync, SpawnSyncOptionsWithStringEncoding } from 'child_process'
import fs, { outputFile } from 'fs-extra'
import esbuild from 'esbuild'
import path from 'path'

const outputPath = path.join(__dirname, '../dist')
const sourceFilePath = path.join(__dirname, '../src')
const swcConfigFilePath = path.join(__dirname, '../config/.swcrc')
const tsconfigFilePath = path.join(__dirname, '../config/tsconfig.src.json')

const spawnOptions: SpawnSyncOptionsWithStringEncoding = {
    encoding: 'utf-8',
    shell: true,
    stdio: 'inherit'
}

const buildHookBundle = async () => {
    await esbuild.build({
        entryPoints: [path.join(__dirname, '../src/command/pnpmfile/hook.ts')],
        bundle: true,
        outfile: path.join(outputPath, './hookbundle.js'),
        platform: 'node',
        minify: true
    })
}

export const build = async () => {
    await fs.emptyDir(outputPath)
    console.log('> Clean output path')

    await buildHookBundle()
    console.log('> Bundle pnpmfile hook')

    await fs.copy(
        path.join(__dirname, '../src/command/pnpmfile/.pnpmfile.cjs'),
        path.join(__dirname, '../dist/command/pnpmfile/.pnpmfile.cjs')
    )
    console.log('> Copied .pnpmfile.cjs template')

    await spawnSync('swc', [sourceFilePath, '-d', outputPath, '--config-file', swcConfigFilePath], spawnOptions)
    console.log('> Transpiled')

    await spawnSync('tsc', ['-P', tsconfigFilePath, '--emitDeclarationOnly'], spawnOptions)
    console.log('> d.ts generated')
}

build()
