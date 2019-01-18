const {app, shell, BrowserWindow} = require('electron').remote
const { remote } = require('electron');

document.getElementById('app-control--exit').addEventListener('click', () => {
	// Change this to close only the child window instance
	var window = remote.getCurrentWindow()
	window.close()
})

document.addEventListener('click', function (event) {
	if (event.target.tagName === 'A' && event.target.href.startsWith('http')) {
		event.preventDefault()
		console.log(event.target.href)
		shell.openExternal(event.target.href)
	}
})
