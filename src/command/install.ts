import fs from 'fs-extra'
import path from 'path'
import { findProjectRoot } from '../parser-option/find-project-root'
import { Logger } from '../util/logger'

const isExist = async (filePath: string): Promise<boolean> => {
    try {
        await fs.stat(filePath)
        return true
    } catch {
        return false
    }
}

export const install = async (projectRoot: string) => {
    const root = await findProjectRoot()
    const psvDotFolderPath = path.join(root, '.psv')
    if (await isExist(psvDotFolderPath)) {
        await fs.rm(psvDotFolderPath, { force: true, recursive: true })
    }

    await fs.mkdir(psvDotFolderPath)
    await fs.copyFile(path.join(__dirname, '../hookBundle.js'), path.join(psvDotFolderPath, 'hook.js'))

    console.log(psvDotFolderPath, path.join(psvDotFolderPath, 'hook.js'))

    Logger.message('installed .psv')

    // currently not needed
    // const pnpmfilePath = path.join(root, '.pnpmfile.cjs')
    // if (await isExist(pnpmfilePath)) {
    //     await fs.move(pnpmfilePath, pnpmfilePath + '.bak')
    // }

    // fs.copyFile(path.join(__dirname, './pnpmfile/.pnpmfile.cjs'), pnpmfilePath)
}
