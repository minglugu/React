import './App.css';
import React from 'react';
import { Route, Routes, Link, userParams, useNavigate, useLocation, useParams } from "react-router-dom";

// 所有的components都写在这个文件里,所以不需要用export
const MainPage = () => {
  return (
    <div>
      <h1>This is Main Page </h1>
      <Link to='/page2'>go to page 2</Link>
    </div>
  )
}

const Page2 = () => {
  return (
    <div>
      <h1>This is page 2</h1>
      <Link to='/'>go to Main Page</Link>
    </div>
  )
}

// useParams is a hook
// ProductPage一般列产品列表，或者歌单songList
const ProductPage = () => {
  let valuePassed = useParams()
  console.log('valuePassed', valuePassed)
  const navigate = useNavigate()
  
  return (
    <div>
      {/* use `` backtick */}
      <h1>This is Product Page, {`input id is ${valuePassed.id}`}</h1>
      {/* 前面3个button用的是useNavigate()这个hook，用来页面之间的跳转
          -1,表示往前面一个跳转 */}
      <button onClick={() => navigate(-1)}>go back</button>
      <button onClick={() => navigate('/page4')}>Go to page 4</button>
      <button onClick={() => navigate('/')}>Go to Main Page</button>
      {/* Windows自带的function，可以useNavigate也可以用Windows自带的网页跳转的方法。 */}
      <button onClick={() => window.history.go(-1)}>Go -1</button>
      <button onClick={() => window.locatioin.href = '/page2'}>Go to page 2</button>
    </div>
  )
}

const Page4 = () => {
  const names = ['a', 'b', 'c']
  const navigate = useNavigate()
  const location = useLocation()
  const search = location.search
  const item = new URLSearchParams(search).get('item')

  return(
    <div>
      <h2>Page4</h2>
      {names.map((name, index) => {
        return(
          <div>
            <Link to={'/page4/name_details/${name}'} key={index}>View {name}</Link>
          </div>
        )
      })}

      <Routes>
        <Route path='/name_details/:name' element={<NameDetails/>}/>
      </Routes>
    </div>
  ) 
}

const NameDetails = () => {
  const params = useParams()

  return <h2>Details of name {params.name}</h2>
}

const NoMatch = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p><Link to='/'>Go to Main Page</Link></p>
    </div>
  )
}

const NavBar = () => {
  return (
    <nav style={
      {
        backgroundColor: 'lightgreen',
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: '25px'
      }
    }>
      {/* Link 是已经写好的，import进来的 
          link的路径，是写在App()里面的<Route/>里
          <Route/> 也是‘react-router-dom’自带的*/}
      <Link to='/'>Main Page</Link>
      <Link to='/page2'>Page 2</Link>
      <Link to='/Product-Page/100'>Product Page</Link>
    </nav>
  )
}

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        {/* '/' 设为主页。此处Page1是主页 */}
        <Route path='/' element={<MainPage/>}/>
        <Route path='/page2' element={<Page2/>}/>
        {/* 不是仅仅跳转到page3，还要传个值。此处是传个id。
            点开歌曲链接，单独进入一个播放的页面。 */}
        <Route path='/Product-Page/:id' element={<ProductPage/>}/>
        <Route path='/page4/*' element={<Page4/>}/>
        <Route path='*' element={<NoMatch/>}/>
      </Routes>
    </div>
  )
}

export default App;
