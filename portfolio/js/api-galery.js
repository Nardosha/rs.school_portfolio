const seasons = ['winter', 'spring', 'summer', 'autumn']
const url = `https://api.unsplash.com/search/photos?page=1&query=office&client_id=_emQs17Y5hPeK1aBApi0Z_8u19qQfOcGlw30s0-nKOE`
const searchBtn = document.querySelector('.search__submit')
const input = document.querySelector('.search__input')

async function sendRequest(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        console.log('новый запрос', url)
        showImg(data)

    } catch (e) {
        console.error(e)
    }
}

sendRequest(url)

//     .then(r => console.log(r))
//     .catch(err => console.log(err))

function showImg(data) {
    console.log('Начало создания картинок');
    const imgContainer = document.querySelector('.portfolio__body')
    let imgItem = document.createElement('div')
    let img = document.createElement('img')

    if (imgItem.contains(img)) {
        deleteImg(imgItem)
    }

    if (data) {
        data.map((item, index) => {
            console.log('Картинки создаются');

            imgItem = document.createElement('div')
            img = document.createElement('img')
            let imgUrl = item.urls.regular

            imgContainer.appendChild(imgItem)
            imgItem.appendChild(img)

            imgItem.classList.add('portfolio__item')
            img.classList.add('portfolio__image')

            img.alt = `image`
            img.src = `${imgUrl}`
        })
    }
}


searchBtn.addEventListener('click', (event) => {
    event.preventDefault()
    const newValue = input.value.trim()
    let newUrl = `https://api.unsplash.com/photos?query=${newValue}&per_page=6&client_id=_emQs17Y5hPeK1aBApi0Z_8u19qQfOcGlw30s0-nKOE`;
    input.value = '';
    sendRequest(newUrl)

})

function deleteImg(item) {
    while (item) {
        console.log('удаление картинок')
        item.remove()
    }
    // if (imgContainer.contains(imgItem)) {
    //     console.log('удаление картинок')
    //     imgContainer.removeChild(item)
    // }
}


// console.log(getInput())