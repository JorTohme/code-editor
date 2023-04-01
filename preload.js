const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  onUpdateTheme: (callback) => {
    ipcRenderer.on('update-theme', callback)
  }

})
