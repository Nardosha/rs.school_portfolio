const portfolioBtnContainer = document.querySelector('.portfolio__buttons')
const portfolioBtns = document.querySelectorAll('.btn-portfolio')
const portfolioImages = document.querySelectorAll('.portfolio__image')
const seasons = ['winter', 'spring', 'summer', 'autumn']

if (portfolioBtnContainer) {
	portfolioBtnContainer.addEventListener('click', function(e) {
		changeImage(e)
		removeClassActive()
		addClassActive(e)
	})
}

function addClassActive(el) {
	el.target.classList.add('_active')
}

function removeClassActive() {
	portfolioBtns.forEach((btn) => {
			btn.classList.remove('_active')
	})
}

function changeImage(event) {
	if (event.target.dataset.season === 'winter') {
		portfolioImages.forEach((img, index) => {
			img.src = `assets/img/portfolio/winter/${index + 1}.jpg`
		})
	}
	if (event.target.dataset.season === 'spring') {

		portfolioImages.forEach((img, index) => {
			img.src = `assets/img/portfolio/spring/${index + 1}.jpg`
		})
	}
	if (event.target.dataset.season === 'summer') {

		portfolioImages.forEach((img, index) => {
			img.src = `assets/img/portfolio/summer/${index + 1}.jpg`
		})
	}
	if (event.target.dataset.season === 'autumn') {

		portfolioImages.forEach((img, index) => {
			img.src = `assets/img/portfolio/autumn/${index + 1}.jpg`
		})
	}
}

seasons.forEach((season, index) => {
	if (season === 'winter') {
		preloadWinterImages()
	}
	if (season === 'spring') {
		preloadSpringImages()
	}
	if (season === 'summer') {
		preloadSummerImages()
	}
	if (season === 'autumn') {
		preloadAutumnImages()
	}
})

function preloadWinterImages() {
	for (let i =1; i<=6; i++) {
		const img = new Image()
		img.src = `assets/img/portfolio/winter/${i}.jpg`
	}
}
function preloadSpringImages() {
	for (let i =1; i<=6; i++) {
		const img = new Image()
		img.src = `assets/img/portfolio/spring/${i}.jpg`
	}
}
function preloadSummerImages() {
	for (let i =1; i<=6; i++) {
		const img = new Image()
		img.src = `assets/img/portfolio/summer/${i}.jpg`
	}
}
function preloadAutumnImages() {
	for (let i =1; i<=6; i++) {
		const img = new Image()
		img.src = `assets/img/portfolio/autumn/${i}.jpg`
	}
}
