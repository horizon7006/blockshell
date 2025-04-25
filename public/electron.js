const { app, BrowserWindow } = require('electron');

let mainWindow; // 🧠 define it here!

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL('http://localhost:5173'); // or .loadFile('dist/index.html')

  // open devtools for debugging (optional)
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);
