const menuBurger = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body')


if (menuBurger) {
	menuBurger.addEventListener('click', function(e) {
		document.body.classList.toggle('_lock')
		menuBurger.classList.toggle('_active')
		menuBody.classList.toggle('_active')
		menuBody.classList.toggle('_shadow')
	})
	menuBody.addEventListener('click', closeMenu)
}


function closeMenu() {
	if (menuBurger.classList.contains('_active')) {
		document.body.classList.remove('_lock')
		menuBurger.classList.remove('_active')
		menuBody.classList.remove('_active')
	}
}