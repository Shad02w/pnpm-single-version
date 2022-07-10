import { build } from 'esbuild'
import path from 'path'

const cliEntry = path.join(__dirname, '../src/cli/cli.ts')
const outputPath = path.join(__dirname, '../dist', 'bin.js')

export const bundleCLI = async () => {
    await build({
        bundle: true,
        platform: 'node',
        entryPoints: [cliEntry],
        outfile: outputPath,
        minify: true,
        minifySyntax: false
    })
}
