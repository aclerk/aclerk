const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
    // 创建浏览器窗口。
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    // 加载index.html文件
    win.loadFile('../html/index.html');

    // 打开开发者工具
    // win.webContents.openDevTools();

    // when app is closed
    win.on('closed', () => {
        win = null;
    });
}

// when app is ready
app.on('ready', createWindow);

// when app all windows is closed 
app.on('window-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
    if (win === null) {
        createWindow();
    }
});
