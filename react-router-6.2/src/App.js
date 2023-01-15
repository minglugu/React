import './App.css';
import React from 'react';
import { Route, Routes, Link, useNavigate, useLocation, useParams } from "react-router-dom";

// 所有的components都写在这个文件里,所以不需要用export
const MainPage = () => {
  return (
    <div>
      <h1>This is Main Page </h1>
      <Link to='/page2'>go to page 2</Link>
    </div>
  )
}

const Page1 = () => {
  return (
    <div>
      <h1>This is page 1</h1>
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
      {/* 做成按钮，跳转到相关页面. 并且可以传state 这个参数。
          对nagivate()这个function的解释：we call the navigate function when clicking this button
          with the name of the route (here is '/page3') that moves the user to. 
          然后在const page3 里面, 将state 传给 location*/}
      <button onClick={() => navigate('/page3', {state: {id: 7, color: 'green'}})}>Go to page 3</button>
      <button onClick={() => navigate('/')}>Go to Main Page</button>
      {/* Windows自带的function，可以useNavigate也可以用Windows自带的网页跳转的方法。 */}
      <button onClick={() => window.history.go(-1)}>Go -1</button>
      <button onClick={() => window.locatioin.href = '/page2'}>Go to page 2</button>
    </div>
  )
}

// nested links which are a, b, c: Route within Routes
const Page3= () => {
  const products = ['product1', 'product2', 'product3']
  // const navigate = useNavigate()
  // useLocation hook
  const location = useLocation()
  // location is an object, with key-value pairs as following:
  /*
    hash: ""
    key: "3tkj4ef7"
    pathname: "/page3"      useLocation().pathname to find the path of this webpage
    search: ""
    state: null             how to pass the state(e.g. array or object)
  */
 // 如果点击NavBar 的page3跳转，那么会报错。因为没有传parameter，所以加判断以后，就不会报错了。
 // 如何验证？点击NavBar的Main Page，然后点击 Page 3，会发现 state: null
  console.log('location of page3 is ', location)
  if (!!location.state) {
    const {state:{id, color}} = location
    console.log('id is', id, '\ncolor is', color)
  }

  // const search = location.search
  // const item = new URLSearchParams(search).get('item')

  return(
    <div>
      <h2>Page3</h2>
      {products.map((product, index) => {
        return(
          // Warning: Each child in a list should have a unique "key" prop. Here we add key={index} to <div>
          <div key={index}>
            {/* 包裹在Link里，当点击以后，会跳转到相关页面. 有${}, 用``backtick */}
            <Link to={`/page3/product_details/${product}`} key={index}>View {product}</Link>
          </div>
        )
      })}

      <Routes>
        <Route path='/product_details/:name' element={<NameDetails/>}/>
      </Routes>
    </div>
  ) 
}

// NameDetails is a component used in Page3 component.
// NameDetails is a subpage of page3 showing the product information. 
const NameDetails = () => {
  // The useParams hook returns an object of key/value pairs of the dynamic params 
  // from the current URL that were matched by the <Route path>. 
  // Child routes inherit all params from their parent routes.
  const productName = useParams()

  // 拿到传过来的产品的名字
  return <h2>Details of name {productName.name}</h2>
}

// 用户输入了一个无效链接，1. 那么就定义这个webpage，类似 Not Found
const NoMatch = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p><Link to='/'>Go to Main Page</Link></p>
    </div>
  )
}

// 用户输入了一个无效链接，2. 或者定义一个Page404的webpage
const Page404 = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Oops! This Page Not Found!</p>
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
      <Link to='/page1'>Page 1</Link>
      <Link to='/Product-Page/100'>Product Page</Link>
      {/* 也可以通过Link，跳转到相关页面 */}
      <Link to='/page3'>Page 3</Link>
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
        <Route path='/page1' element={<Page1/>}/>
        {/* 不是仅仅跳转到page3，还要传个值。此处是传个id。
            点开歌曲链接，单独进入一个播放的页面。 */}
        <Route path='/Product-Page/:id' element={<ProductPage/>}/>
        {/* if a webpage has a nested Route, use "*" to present all the elements */}
        <Route path='/page3/*' element={<Page3/>}/>
        {/* NoMatch的路径是'*'  */}
        {/* <Route path='*' element={<NoMatch/>}/> */}
        {/* 还可以define一个 page 404 */}
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </div>
  )
}

export default App;
