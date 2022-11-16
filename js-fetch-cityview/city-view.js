// todo: change access_key into unsplash's project access_key
const access_key = 'cVWfiLOQxMydkNinizISK4yfjCh_3xmO7QvoIoLB8ZA' 
const container = document.querySelector('.container')
const elemP = document.querySelector('.des') 
const elemInput = document.querySelector('#cityInput')
let searchCity = 'Toronto'

const searchFunction = (evt) => {
    // console.log(evt.key);
    if (evt.key === 'Enter') {
        searchCity = evt.target.value
        // 将输入的值，传到searchCity里面
        // 将fetch封装，再调用这个方法
        // console.log(searchCity)
        fetchCity() 
    }
}

const fetchCity = () => {
    // how to write a query, see this link: https://unsplash.com/documentation#search-photos
    window.fetch(`https://api.unsplash.com/search/photos?client_id=${access_key}&query=${searchCity}&orientation=landscape`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.results[0].urls.regular)
            let imgUrl = data.results[0].urls.regular
            let des = data.results[0].alt_description
            elemP.innerHTML = des // 里面会实时得到description
            container.style.backgroundImage = `url('${imgUrl}')` // either backtick or double quote. https://www.w3schools.com/jsref/prop_style_backgroundimage.asp     
            
        }) 
        .catch(err => console.log(err))
}

// add an event to elemInput
// when key is down, print out the key value of the event 
elemInput.addEventListener('keydown', searchFunction) 
fetchCity()