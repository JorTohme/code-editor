const { app, BrowserWindow } = require('electron')
const { setMainMenu } = require('./menu.js')

const path = require('path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    fullscreenable: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // mainWindow.loadFile('index.html')
  mainWindow.loadURL('https://codeshow.vercel.app/')

  setMainMenu(mainWindow)
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
  createWindow()
})
