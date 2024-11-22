var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	console.log("Auto play is set to false");
	video.setAttribute("autoplay", "false");
	console.log("Loop is set to false");
	video.setAttribute("loop", "false");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play video");
	video.play();
	document.querySelector("#volume").innerHTML = (video.volume * 100).toString() + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log("Speed is ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate *= (10/9);
	console.log("Speed is ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip video ahead");
	if (video.currentTime <= video.duration - 10) {
		video.currentTime += 10;
	}
	else {
		video.currentTime = 0;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted != true) {
		console.log("Mute");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	} else {
		console.log("Unmute");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML = (video.volume * 100).toString() + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});