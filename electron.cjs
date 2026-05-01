const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;
let loadingWindow;

function createWindows() {
  // Loading window (shows immediately)
  loadingWindow = new BrowserWindow({
    width: 400,
    height: 300,
    frame: false,
    alwaysOnTop: true,
    resizable: false
  });

  loadingWindow.loadFile(
    path.join(__dirname, "public", "loading.html")
  );

  // Main window (hidden at first)
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false,
    icon: path.join(__dirname, "assets/icon.ico"),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow.loadFile(
    path.join(__dirname, "public", "index.html")
  );

  mainWindow.once("ready-to-show", () => {
    loadingWindow.close();
    mainWindow.show();
  });
}

app.whenReady().then(createWindows);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});