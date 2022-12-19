const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('myApp', {
  printServer: () => {
    console.log('Server');
  }
})