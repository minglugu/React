// 如果用户忘记传 label 了，那么需要给个默认值，此处的default value为button。就不会报错了。

import { click } from "@testing-library/user-event/dist/click"

// clickFun 是个 点击功能
export const PageButton = ({label = 'button', clickFun, width = 100}) => {
    return (
        <button 
        // key and value pair, rgba 的online tool，flatuicolors.com 来找颜色
            style={{
                background: 'rgba(129,236,236,0.5)',
                height: '50px',
                // 自定义宽度
                width: `${width}px`, 
                margin: '5px',
                color: 'white',
                fontSize: '15px',
                border: 'none'
            }}
            // 如何传clickFun，见 DisplayCityView: line 12, 65
            onClick={clickFun}
        >
            {label}            
        </button>)
} 