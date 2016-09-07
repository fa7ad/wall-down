'use strict';
const {
  app,
  BrowserWindow
} = require('electron');
// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// prevent window being garbage collected
let mainWindow;

function onClosed() {
  mainWindow = null;
}

function createMainWindow() {
  const win = new BrowserWindow({
    width: 480,
    height: 480,
    frame: false,
    resizable: false,
    maximizable: false,
    icon: __dirname + '/resources/icon.png',
  });

  win.loadURL(`file://${__dirname}/index.html`);
  win.on('closed', onClosed);

  return win;
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (!mainWindow) {
    mainWindow = createMainWindow();
  }
});

app.on('ready', () => {
  mainWindow = createMainWindow();
});
