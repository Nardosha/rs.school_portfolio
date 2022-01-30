import i18Obj from"./translate.js"
const langBtns = document.querySelectorAll('.language__label')

langBtns.forEach((langBtn) => {

	langBtn.onclick = function() {
		if (langBtn.classList.contains('_active')) {
			return
		}
		removeClassActive()
		addClassActive(langBtn)
		getTranslate(langBtn.dataset.i18n)
	}
})


function addClassActive(e) {
	e.classList.add('_active')

}


function removeClassActive() {
	langBtns.forEach((btn) => {
		btn.classList.remove('_active')
	})
}

function getTranslate(lang) {
	const i18n = document.querySelectorAll('[data-i18n]')

	i18n.forEach(e => {

		if (Object.keys(i18Obj[lang]).includes(e.dataset.i18n)) {
			e.textContent = i18Obj[lang][e.dataset.i18n]

			if (e.placeholder) {
				e.placeholder = i18Obj[lang][e.dataset.i18n]
				e.textContent = ''
			}
		}
	})
}

// getTranslate("en")

// export default getTranslate 