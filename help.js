const {app, shell, BrowserWindow} = require('electron').remote
const { remote } = require('electron');

document.getElementById('app-control--exit').addEventListener('click', () => {
	// Change this to close only the child window instance
	var window = remote.getCurrentWindow()
	window.close()
})

// Listen for every click event that happened on a <a> link and open the request
// in the default browser
document.addEventListener('click', (event) => {
	if (event.target.tagName === 'A' && event.target.href.startsWith('http')) {
		event.preventDefault()
		shell.openExternal(event.target.href)
	}
})
