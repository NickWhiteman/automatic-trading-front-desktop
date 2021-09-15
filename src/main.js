const {app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const remoteMain = require('@electron/remote/main');

const createWindow = () => {
    const windowApp = new BrowserWindow({
        width: 800,
        height: 600,
    });

    remoteMain.enable(windowApp.webContents);
    
    windowApp.loadURL(
        isDev 
        ? 'http://localhost:3000'
        : `file://${path.join(__dirname, '../build/index.html')}`
    );
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0)
        createWindow();
});