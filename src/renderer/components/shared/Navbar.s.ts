import { ipcRenderer as ipc } from 'electron'

export const close = () => {
  ipc.send('closeApp')
}

export const max = () => {
  ipc.send('maxApp')
}

export const min = () => {
  ipc.send('minApp')
}
