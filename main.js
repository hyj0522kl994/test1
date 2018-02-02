const path = require("path");

const { app, BrowserWindow } = require("electron");

const WebSocket = require("ws")

const wss = new WebSocket.Server( { port: 1040 } );

let win;
function createWindow() {
  win = new BrowserWindow({ width: 1250, height: 700 });
  win.loadURL(`file://${__dirname}/mainWindow.html`);
  win.on("closed", () => { win = null; });

  wss.on('connection', function (w) {
      w.on( 'message' , function (data)  {
           console.log(data);

           w.send(data);
      });
      w.on('close', function() {
           console.log("Closed");
      });

  });

}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
