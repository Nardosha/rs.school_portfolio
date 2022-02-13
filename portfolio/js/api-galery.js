const url = 'https://api.unsplash.com/photos?random&page=6&client_id=_emQs17Y5hPeK1aBApi0Z_8u19qQfOcGlw30s0-nKOE'

async function getData() {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    showImg(data)
}
getData()


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
    })
}

function getInput() {
    const input = document.querySelector('.search__input')
    console.log(input.value);
}

console.log(getInput())