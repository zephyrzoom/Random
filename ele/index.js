const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;

let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({width: 600, height: 400, autoHideMenuBar: true});

  // and load the index.html of the app.
  win.loadURL(`file://${__dirname}/index.html`);
  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
