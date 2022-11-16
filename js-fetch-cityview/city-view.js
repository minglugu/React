const access_key = 'cVWfiLOQxMydkNinizISK4yfjCh_3xmO7QvoIoLB8ZA'
const container = document.querySelector('.container');


// how to write a query, see this link: https://unsplash.com/documentation#search-photos
window.fetch(`https://api.unsplash.com/search/photos?client_id=${access_key}&query=toronto`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.results[0].urls.regular)
            let imgUrl = data.results[0].urls.regular
            container.style.backgroundImage = `url('${imgUrl}')` // either backtick or double quote. https://www.w3schools.com/jsref/prop_style_backgroundimage.asp     
        
        
        })
        .catch(err => console.log(err))
        