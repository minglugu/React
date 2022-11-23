// function of display, descturction 写法
export const DisplayCityView = ({imgList}) => {
    return (
        <div>
        {/* <div style={{border: '2px blue solid', width: '400px', height: '150px'}}>
            <label htmlFor="">Please input a name  </label>
            <h3>Display Child</h3> */}

            {/* <p>{newName}</p>
            <button 
                onClick={conversion}
            >convert to UPPERCASE</button> */}

            {/* render图片，用JSX写 
            id可以作为key，因为id是unique的。
            index是0-9这个array里面的index*/}
            {imgList.map((item, index) => <img 
                key={index}
                src={item.thumb} 
                alt=""/>)}
        </div>
    )
}