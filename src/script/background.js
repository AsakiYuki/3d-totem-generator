{
	updateBackground = () => {
		const { clientWidth: x, clientHeight: y } = document.body,
			stl = document.body.style
		stl.background = `linear-gradient(to bottom, #0003, #000B), url('${x < y ? "./src/texture/ver-background.png" : "./src/texture/hoz-background.png"}')`
		stl.backgroundPosition = "top"
		stl.backgroundSize = "cover"
		stl.backgroundAttachment = "fixed"
	}

	window.onresize = updateBackground
	updateBackground()
}
