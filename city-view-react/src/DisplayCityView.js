// function of display, descturction 写法
export const DisplayCityView = ({imgList, updateIndex}) => {
    return (
        <div>
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

                // Pass the index of the clicked image to parent, 然后在parent里面，修改相应的代码
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

        </div>
    )
}