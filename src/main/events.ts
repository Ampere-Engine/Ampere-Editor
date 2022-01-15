/* eslint global-require: off, no-console: off, promise/always-return: off, import/no-cycle: off */
/**
 * Add event listeners...
 */

import { App, BrowserWindow } from 'electron'
import createWindow from './window'

const registerEvents = (app: App, mainWindow: BrowserWindow | null) => {
  app.on('window-all-closed', () => {
    // Respect the OSX convention of having the application in memory even
    // after all windows have been closed
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app
    .whenReady()
    .then(() => {
      createWindow()
      app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (mainWindow === null) createWindow()
      })
    })
    .catch(console.log)
}

export default registerEvents
