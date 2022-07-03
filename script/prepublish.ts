import { buildProcess } from './build-process'
import standardVersion from 'standard-version'

const prepublish = async () => {
    await standardVersion()
    await buildProcess()
}

prepublish()
