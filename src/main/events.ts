/* eslint global-require: off, no-console: off, promise/always-return: off, import/no-cycle: off */
/**
 * Add event listeners...
 */

import { App, BrowserWindow, globalShortcut } from 'electron'
import { isDevelopment } from './config'
import createWindow from './window'

const registerEvents = (app: App, win: BrowserWindow | null) => {
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
        if (win === null) createWindow()
      })
      if (!isDevelopment) {
        globalShortcut.register('CommandOrControl+R', () => {
          console.log('CommandOrControl+R is pressed: Shortcut Disabled')
        })
      }
    })
    .catch(console.log)
}

export default registerEvents
