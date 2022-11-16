// todo: change access_key into unsplash's project access_key
const access_key = 'cVWfiLOQxMydkNinizISK4yfjCh_3xmO7QvoIoLB8ZA' 
const container = document.querySelector('.container')
const elemP = document.querySelector('.des') 
const elemInput = document.querySelector('#cityInput')
let searchCity = 'Toronto'

// 保存多个输入的数据，存入local storage
let input_all = []

// 定义常量. 可以定义一个 const.js 文件，来保存所有的常量
const user_input = 'user_input'
const user_input_all = 'user_input_all'

const searchFunction = (evt) => {
    // console.log(evt.key);
    if (evt.key === 'Enter') {
        // select all text inside of search box
        elemInput.select()

        // user friendly: preprocess of the text (trim the whitespace of input and into upper case)
        searchCity = evt.target.value.trim().toUpperCase()
        console.log(searchCity)

        // save the input value to the browser's local storage里面，保存浏览信息
        // 1. 保存单个用户输入的数据
        window.localStorage.setItem(user_input, JSON.stringify(searchCity))
        
        // 需要考虑的问题：不存入重复的搜索的关键字，或只记录10条搜索信息
        // 保存多个用户输入的信息
        input_all.push(searchCity)
        // 因为存的value，必须是string，所以用JSON.stringify来把input_all这个array变成String
        window.localStorage.setItem(user_input_all, JSON.stringify(input_all)) // key-value pair
        
        // fetch 的数据是保存在local storage里面的历史数据，下次访问网页，不是默认的多伦多的图片
        // 将输入的值，传到searchCity里面
        // 将fetch封装，再调用这个方法
        // console.log(searchCity)
        fetchCity() 
    }
}

const fetchCity = () => {
    // get the previous values from the local storage 
    // 清空Application 里面的数据，再次刷新页面，就会取不到数据，就会出现 null 的图片 
    !!localStorage.getItem(user_input) && (searchCity = JSON.parse(localStorage.getItem(user_input))) 

    // how to write a query, see this link: https://unsplash.com/documentation#search-photos
    window.fetch(`https://api.unsplash.com/search/photos?client_id=${access_key}&query=${searchCity}&orientation=landscape`)
        .then(response => response.json())
        .then(data => {             // 正常 fetch 后，返回的内容都在这个 then 里面
            console.log(data)

            if (data.total === 0) {   // check if input is valid by the value of total 
                elemP.innerHTML = "Please input a valid value!"
            }

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