import './DisplayCityView.scss'
import './SearchBarCityView.js'
import './PageButton.js'
import { PageButton } from './PageButton.js'

// function of display, descturction 写法
export const DisplayCityView = ({imgList, updateIndex, nextPage, prevPage}) => {
    return (
        <div className='display-city-view-container'>
            {/* 增加两个button，一个是previous，一个是next */}

            <PageButton label={'prev'} clickFun={prevPage}/>

            {/* <button
            onClick={prevPage}
            >previous</button> */}
            {/* <div style={{border: '2px blue solid', width: '400px', height: '150px'}}>
            <label htmlFor="">Please input a name  </label>
            <h3>Display Child</h3> */}

            {/* <p>{newName}</p>
            <button 
                onClick={conversion}
            >convert to UPPERCASE</button> */}

            {/*
            - 这里返回image这个object，所以只用<img/> .
            render图片，用JSX写 
            id可以作为key，因为id是unique的。
            index是0-9这个array里面的index
            - map() 可以返回一个html的element，是JSX的一个特定的写法。
            - key是加在map()里面，产生的element。
            */}
            {imgList.map((item, index) => <img 
                // General idea: 要在每个image上，加一个click事件，onClick(), 可以加在map()返回的img图片上
                // 那么每个图片，就加上了onclick事件。

                // Pass the index of the clicked image to parent(子传父), 然后在parent里面，修改相应的代码
                // Parent component gets the index of child component, so setState of parent component to 
                // update the index. 
                onClick={()=>updateIndex(index)}

                // 需要给图片写上 index，增加网页的performance的功能
                // 需要加上这个key
                key={index}
                // 非常常用的react的方法，用array(imgList)来获取到一组小图标(thumb)以后，
                // render 到网页上面。
                src={item.thumb} 
                alt=""/>)
            }

            {/* 子传子: 通过父组件(parent component)中的nextPage，传给DisplayCityView.js
                从而达到，子(SearchBarCityView.js中的page, setPage这个function来更新page成nextPage）
                传子（DisplayCityView.js中的nextPage）的目的。*/}
            {/* 此时，还有个问题，当点击 next 这个 button 的时候， 大的背景图没有变化，这是为什么？
                因为 dependency 没有变化。如何解决：需要将dependency 设置成 page，才会运行*/}
            {/* <button 
            // 这种写法，是需要传参数的情况下。
            // onClick = {()=>{nextPage()}} 
            onClick={nextPage}
            >next
            </button> */}

            {/* 自定义的PageButton，可以重复使用在很多地方，这样设计出来的网页风格就会比较统一
                button里面，还可以传元素：ionic.io/ionicons 
                */}
            <PageButton label={<ion-icon name="chevron-forward-outline"></ion-icon>} clickFun={nextPage}/>

        </div>
    )
}