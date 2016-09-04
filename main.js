const {app, BrowserWindow} = require('electron');

app.on('ready', function () {
  let mainWindow = new BrowserWindow({
    width: 480,
    height: 480,
    frame: false,
    resizable: false,
    maximizable: false,
    icon: __dirname + '/resources/icon.png',
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.show();
});
