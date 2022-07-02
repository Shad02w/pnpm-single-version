import findWorkspaceDir from '@pnpm/find-workspace-dir'
import { realpath } from 'fs/promises'
import findUp from 'find-up'
import { ProjectRootError } from './error'

export const findProjectRoot = async (): Promise<string> => {
    const projectRoot =
        (await findWorkspaceDir(process.cwd())) ??
        findUp.sync(['package.json'], {
            cwd: await realpath(process.cwd())
        })

    if (!projectRoot) {
        throw new ProjectRootError()
    }

    return projectRoot
}
