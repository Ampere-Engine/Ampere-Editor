import { ipcRenderer as ipc } from 'electron'

export const close = () => {
  if (ipc) ipc.send('closeApp')
}

export const max = () => {
  if (ipc) ipc.send('maxApp')
}

export const min = () => {
  if (ipc) ipc.send('minApp')
}
