const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const fs = require("node:fs");
const { pathToFileURL } = require('url');

function createWindow() {
  const win = new BrowserWindow({
    width: 1300,
    height: 800,
    resizable: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:5173").then(null);
    win.webContents.openDevTools();
  } else {
    win.loadFile("index.html").then(null);
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// 💡 IPC Listener für Folder-Auswahl
ipcMain.handle('select-folder', async () => {
  const result = await dialog.showOpenDialog({
    properties: ['openDirectory']
  });

  if (result.canceled || result.filePaths.length === 0) return null;

  const folderPath = result.filePaths[0];

  const files = fs.readdirSync(folderPath).filter(file =>
      /\.(jpeg|png|jpg)$/i.test(file)
  );

  const imagePaths = files.map(file =>
      pathToFileURL(path.join(folderPath, file)).href
  );

  return {
    folderPath,
    imageFiles: imagePaths
  };
});
