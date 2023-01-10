// loading img component

// 将assets里的内容存到 loadingImg 的这个变量里面
import loadingImg from './assets/spinning-loading.gif'

// 放在 SearchBarCityView 这个 component 里面
export const Loading = () => {
    return <div>
        <img 
         style = {{width: '100 vw', height: '100vh', position: 'fixed', top: '0', left: '0'}}
         src={loadingImg} alt="loading..."/>
    </div>
}