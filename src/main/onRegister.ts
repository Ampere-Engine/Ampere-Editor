/* eslint global-require: off, no-console: off, promise/always-return: off, import/no-cycle:off */
import { ipcMain } from 'electron'
import { isDevelopment } from './config'

const onRegister = () => {
  ipcMain.on('ipc-example', async (event, arg) => {
    const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`
    console.log(msgTemplate(arg))
    event.reply('ipc-example', msgTemplate('pong'))
  })

  if (process.env.NODE_ENV === 'production') {
    const sourceMapSupport = require('source-map-support')
    sourceMapSupport.install()
  }

  if (isDevelopment) {
    require('electron-debug')()
  }
}

export default onRegister
