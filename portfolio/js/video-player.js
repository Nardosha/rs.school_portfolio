const player = document.querySelector('.video__block')
const video = player.querySelector('.video__viewer')
const customBtn = player.querySelector('.video__button-custom')
const toggleBtn = player.querySelector('.toggle')
const muteBtn = player.querySelector('.mute')
const progress = player.querySelector('.progress')

const videoPoster = player.querySelector('.video__poster')
const volumeBtn = player.querySelector('.volume')
//

videoPoster.onclick = startVideo
video.addEventListener('click', playVideo)
video.addEventListener('click', updatePlayBtn)
video.addEventListener('play', updatePlayBtn)
video.addEventListener('pause', updatePlayBtn)
video.addEventListener('timeupdate', time)

customBtn.addEventListener('click', playVideo)
toggleBtn.addEventListener('click', playVideo)
muteBtn.addEventListener('click', updateMuteBtn)
volumeBtn.addEventListener('input', updateVolume)

let mousedown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)


function startVideo() {
	hidePoster()
	console.log('start')
	playVideo()
}

function hidePoster() {
	videoPoster.style.opacity = '0'
	videoPoster.style.pointerEvents = 'none'
	videoPoster.style.zIndex = '0'
}

function playVideo() {
	hidePoster()
	if (video.paused) {
		video.play()
		changeCustomBtn()
		// time()
		console.log('play')
	} else {
		video.pause()
		changeCustomBtn()
		console.log('pause')
	}
}

function scrub(e) {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
	video.currentTime = scrubTime
	console.log('scrub')
}

function changeCustomBtn() {
	customBtn.classList.toggle('_active')
}
function updatePlayBtn() {
	const img = toggleBtn.querySelector('img')
	if (video.paused) {
		img.src = 'assets/icons/play.svg'
	} else {

		img.src = 'assets/icons/pause.svg'
	}
}
function updateMuteBtn() {
	const img = muteBtn.querySelector('img')
	if (video.muted) {
		video.muted = false
		img.src = 'assets/icons/volume.svg';
	}
	else {
		video.muted = true
		img.src = 'assets/icons/mute.svg';
	}
}

function updateVolume() {
	const value = this.value
	const percent = (value  * 100)
	this.style.background = `linear-gradient(to right, hsl(45, 31%, 63%) 0%, hsl(45, 31%, 63%) ${percent}%, #fff ${percent}%, white 100%)`
	video.volume = value
}
function time() {
	const time = Math.round((video.currentTime / video.duration) * 1000/10)
	progress.value = time
	progress.style.background = `linear-gradient(to right, hsl(45, 31%, 63%) 0%, hsl(45, 31%, 63%) ${progress.value}%, #fff ${progress.value}%, white 100%)`;
	console.log('time', time)
}
