function srolled1() {
	// get the frame
	let tframe = document.getElementById("imgframe");

	// get the dot elements
	let tpicdots = document.getElementsByClassName("picdot");
	for (let i = 0; i < tpicdots.length; i++)
		tpicdots[i].classList.remove("dothigh");

	let selected = (tframe.scrollLeft / tframe.clientWidth).toFixed(0);
	tpicdots[selected].classList.add("dothigh");
}
