/* eslint global-require: off, no-console: off, promise/always-return: off, import/no-cycle:off */

import 'core-js/stable'
import 'regenerator-runtime/runtime'
import path from 'path'
import { app, BrowserWindow, shell, ipcMain } from 'electron'
import MenuBuilder from './menu'
import { resolveHtmlPath } from './util'
import installExtensions from './extensions'
import AppUpdater from './main'
import registerEvents from './events'
import { isDevelopment } from './config'
import onRegister from './onRegister'

let win: BrowserWindow | null = null

onRegister()

const createWindow = async () => {
  if (isDevelopment) {
    await installExtensions()
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets')

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths)
  }

  win = new BrowserWindow({
    show: false,
    frame: false,
    width: 1280,
    height: 768,
    minWidth: 960,
    minHeight: 680,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  win.loadURL(resolveHtmlPath('index.html'))

  win.on('ready-to-show', () => {
    if (!win) {
      throw new Error('"win" is not defined')
    }
    if (process.env.START_MINIMIZED) {
      win.minimize()
    } else {
      win.show()
    }
  })

  win.on('closed', () => {
    win = null
  })

  ipcMain.on('closeApp', () => {
    if (win) win.close()
  })
  ipcMain.on('maxApp', () => {
    if (win) {
      if (win.isMaximized()) win.restore()
      else win.maximize()
    }
  })
  ipcMain.on('minApp', () => {
    if (win) win.minimize()
  })

  const menuBuilder = new MenuBuilder(win)
  menuBuilder.buildMenu()

  // Open urls in the user's browser
  win.webContents.on('new-window', (event, url) => {
    event.preventDefault()
    shell.openExternal(url)
  })

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater()
}

registerEvents(app, win)

export default createWindow
