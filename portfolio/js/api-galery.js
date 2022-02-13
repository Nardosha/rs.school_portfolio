const url = 'https://api.unsplash.com/photos/?client_id=_emQs17Y5hPeK1aBApi0Z_8u19qQfOcGlw30s0-nKOE'

async function getData() {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
}
getData()


function showImg(data) {

}