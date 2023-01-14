// store(state), action(trigger the process of updating states in stores), reducer(state)
// any component can access the state equally 

// make an Amazon music playlist：歌曲的名字，时长，封面，并且能够点击播放歌曲。
// 链接：course-data.mark2win.com/solo   这个项目用到的一个接口。之前构建好的数据库，发送http请求，返回的就是这个。
// 当id是1的时候：course-data.mark2win.com/solo/1
// 类似做unsplash cityview的感觉

import { MessageBar } from "./components/MessageBar";
import { PlayerConsole } from "./components/PlayerConsole";

function App() {
  return (
    <div>

      <MessageBar/>
      {/* 将这个PlayerConsole的component用在App里 */}
      <PlayerConsole/>
    </div>
  )
}

export default App;
