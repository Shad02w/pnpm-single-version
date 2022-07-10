import { build } from 'esbuild'
import path from 'path'

const hookEntry = path.join(__dirname, '../src/hook/hook.ts')
const outputPath = path.join(__dirname, '../dist/pnpm-file', 'template.js')

export const bundlePnpmFile = async () => {
    await build({
        bundle: true,
        platform: 'node',
        entryPoints: [hookEntry],
        outfile: outputPath,
        minify: true,
        minifySyntax: false
    })
}
