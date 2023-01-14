import { useSelector } from 'react-redux'
import './MessageBar.scss'

// 做alert
export const MessageBar = () => {
    // 拿到message的state. ? 来安全访问
    const msg = useSelector(state => state?.songReducer?.message)

    // if(!!msg) { 
    //     return (
    //         <div className='show'>
    //             message is: {msg}
    //         </div>
    //     )
    // } else {
    //     return <></>
    // }

    // 另外写法，显示和隐藏
    return (
        // 空msg hide，有则会show
        <div className = {!!msg? 'show' : 'hide'}>
            message is {msg}
        </div>
    )
}