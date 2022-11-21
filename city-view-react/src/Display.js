// function of display, descturction 写法
export const Display = ({newName, conversionCityName}) => {
    return (
        <div style={{border: '2px blue solid', width: '400px', height: '150px'}}>
            <label htmlFor="">Please input a name  </label>
            
            <h3>Display Child</h3>
            <p>{newName}</p>
            <button 
                onClick={conversion}
            >convert to UPPERCASE</button>
        </div>
    )
}