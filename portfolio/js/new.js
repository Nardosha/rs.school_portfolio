const imgContainer = document.querySelector('.portfolio__body')
const searchInput = document.querySelector('.search__input')
const searchBtn = document.querySelector('.search__submit')
const btnsContainer = document.querySelector('.search-pagination__buttons')
const prevBtn = document.querySelector('.prev-button')
const nextBtn = document.querySelector('.next-button')
const apiKey = `_emQs17Y5hPeK1aBApi0Z_8u19qQfOcGlw30s0-nKOE`
let currentPage = 1
let searchRequest = 'girls'
// let totalRes //?

// setTimeout(function(){
//     sendRequest(searchRequest)
//     showResult(firstTime)
// })

let data = await sendRequest("girls")
show(data)


async function sendRequest(searchRequest) {
    const defaultUrl = `https://api.unsplash.com/search/photos?query=${searchRequest}&per_page=6&page=${currentPage}&client_id=${apiKey}`
    try {
        const response = await fetch(defaultUrl)
        const data = await response.json()
        console.log('Данные получены')
        console.log(data)
        // showResult(data)
        return data
    } catch (e) {
        console.error(e)
    }

}

function show(data) {
    data.results.forEach(i => {
        let url = i.urls.small;

        imgContainer.insertAdjacentHTML('beforeend',
            `<div>
                <img src="${url}">
            </div>`
        )
    })
}

function showResult(data) {
    console.log(data.results)
    data.results.map(img => {
        console.log('Картинки создаются');
        const url = img.urls.regular
        const linkUnsplash = img.links.html
        const author = img.user.name
        const linkToAuthor = img.user.links.html
        imgContainer.insertAdjacentHTML('beforeend',
            `<div>
            <a href = "${linkUnsplash}" target = '_blank'>
            <div class = 'result-item' style = 'background-image: url(${url})' >
            </div>
            </a>
            <p class = 'photographer-name' ><a href = '${linkToAuthor}' target = '_blank' style = 'color: white; text-decoration: none;' >
            Photo by ${author}
            </a>
            </p>
            </div>`
        )
    })

}

searchBtn.addEventListener('click', async (event) => {
    event.preventDefault()
    const newValue = searchInput.value.trim()

    imgContainer.innerHTML = "";


    let data = await sendRequest(newValue)
    show(data)
})

// function submit(e) {
//     e.preventDefault()
//     const newValue = searchInput.value
//
//     console.log(newValue)
//
//     // searchRequest = newValue.trim()
//     // newRequest(searchRequest)
// }

//
// async function newRequest(searchRequest) {
//     try {
//         const newData = await sendRequest(searchRequest)
//         showResult(newData)
//
//         const data = await newRequest.json()
//
//     } catch (e) {
//         alert('Filed to search Unsplash')
//         console.error(e)
//     }
// }

function pagination() {

}

nextBtn.addEventListener('click', () => {
    currentPage += 1
    newRequest(searchRequest)
})

prevBtn.addEventListener('click', () => {
    currentPage -= 1
    newRequest(searchRequest)
})

