const seasons = ['winter', 'spring', 'summer', 'autumn']
const url = `https://api.unsplash.com/photos?query=${seasons[1]}&per_page=6&client_id=_emQs17Y5hPeK1aBApi0Z_8u19qQfOcGlw30s0-nKOE`

async function getData(url) {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    showImg(data)

}
getData(url)


function showImg(data) {
    const imgContainer = document.querySelector('.portfolio__body')

    data.map((item, index) => {

        let imgItem = document.createElement('div')
        let img = document.createElement('img')
        imgContainer.appendChild(imgItem)
        imgItem.appendChild(img)
        imgItem.classList.add('portfolio__item')
        img.classList.add('portfolio__image')
        img.alt = `image`
        let imgUrl = item.urls.regular
        img.src = `${imgUrl}`

        return function deleteCard(item) {
            // return item.remove()
        }
    })
}

// function deleteCard(item) {
//     item.remove()
// }



function getInput(url, data) {
    const searchBtn = document.querySelector('.search__submit')
    const input = document.querySelector('.search__input')


    searchBtn.addEventListener('click', (event) => {
        event.preventDefault()
        const newValue = input.value
        url = `https://api.unsplash.com/photos?query=${newValue}&per_page=6&client_id=_emQs17Y5hPeK1aBApi0Z_8u19qQfOcGlw30s0-nKOE`;
        input.value = '';
    })

}

console.log(getInput())