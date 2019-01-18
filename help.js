const {app, BrowserWindow} = require('electron').remote
const { remote } = require('electron');

document.getElementById('app-control--exit').addEventListener('click', () => {
	// Change this to close only the child window instance
	var window = remote.getCurrentWindow()
	window.close()
})
