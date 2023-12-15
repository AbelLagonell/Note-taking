import { BrowserWindow, app, ipcMain } from "electron"

require('electron-reloader')(module);

const createWindow = () => {   
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        titleBarStyle: "hiddenInset",
        frame: false,
    });

    mainWindow.webContents.openDevTools();
    mainWindow.loadFile("src/index.html");
};

ipcMain.on('close-me', (evt, arg) => {
  app.quit()
})

//Loads in the main window when electron is ready to start
app.whenReady().then(createWindow);