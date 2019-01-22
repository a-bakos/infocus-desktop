// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {dialog, app, BrowserWindow} = require('electron').remote
const { ipcRenderer } = require('electron')

// Listen to click on the tray menu item to turn off all sounds at once
ipcRenderer.on('stopAllSounds', (event, arg) => {
	if ( arg === true ) {
		const activeChannels = document.querySelectorAll( '.sound-selector__sound--active' )
		for (let i = 0; i < activeChannels.length; i++) {
			activeChannels[i].click();
		}
	}
})

document.getElementById('app-control--help').addEventListener('click', () => {
	// Create the browser window.
	helpWindow = new BrowserWindow({
		width: 600,
		height: 800,
		backgroundColor: '#000',
		resizable: false,
		minimizable: true,
		fullscreenable: false,
		frame: false,
		movable: true,
	})

	helpWindow.loadFile(`${__dirname}/help.html`)

	helpWindow.on('closed', () => {
		helpWindow = null
	})

	helpWindow.webContents.openDevTools()
})

document.getElementById('app-control--exit').addEventListener('click', () => {
	// If any sound is playing, show a dialog box to confirm exit
	if ( document.querySelector('.sound-selector__sound--active') ) {
		dialog.showMessageBox({
			message: 'Are you sure you want to quit?',
			buttons: ['Yes', 'No']
		}, (buttonIndex) => {
			if ( buttonIndex == 0 ) app.quit()
		})
	} else {
		app.quit()
	}
})

function inFocusSound(sound) {
	let soundToggle = document.getElementById( 'sound-toggle--' + sound )
	let soundPath = new Audio(__dirname + '/sounds/infocus-' + sound + '.ogg')

	soundToggle.addEventListener('click', () => {
		if ( soundToggle.classList.contains( 'sound-selector__sound--active' ) ) {
			soundToggle.classList.remove( 'sound-selector__sound--active' )
			soundPath.pause()
		} else {
			soundToggle.classList.add( 'sound-selector__sound--active' )
			soundPath.play();
		}
	})
}

inFocusSound('cafe')
inFocusSound('garden')
inFocusSound('night')
inFocusSound('fire')
inFocusSound('city')
inFocusSound('snow')
inFocusSound('water')
inFocusSound('dawn')
inFocusSound('pond')
inFocusSound('wind')
