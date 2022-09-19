export function fullscreen_then_lock() {
	document.documentElement.requestFullscreen()
	.then(() => {
		if (document.fullscreenElement != null) {
			screen.orientation.lock('landscape')
		}
	});
}
