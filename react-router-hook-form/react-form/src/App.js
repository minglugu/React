import React from 'react';

import {BrowserRouter, Route, Link, useParams, useNavigate, Routes, useLocation, Redirect} from "react-router-dom";
import "./index.css";
import { useState } from 'react';
import HookForm from './form/form.js';

const Page1 = props => {
  console.log('props page1', props)
  return (
    <div className="page">
      <h3>Page1</h3>
        <div>
          <img src="https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-210301-WSC-en.jpg" 
               width="300" alt="" />
        </div>
    </div>
  )
}

const Page2 = (props) => {
  console.log('props page2', props)
  return (
    <div className='page'>
      <h3>Component Page2</h3>
    </div>
  )
}

const Page3 = props => {
  const songId = props.match.params.id
  console.log('id: ', songId)
  const name = props.match.params.name
  console.log('name: ', name)
  let page3 = useParams()
  console.log('Page3', page3.id)

  // 已经没有这个hook了,新版本的 React 里面，用 useNavigate() 取代了
  // let history = useHistory()
  let history = useNavigate()
  
  console.log('history', history)

  const jumpTo = (path, id) => {
    history(path, {productId: id})
  }

  return (
    <div className='page'>
      <h3>Page3, {`input songId is ${songId}`}</h3>
      <button onClick={() => jumpTo('/page4', songId + "class52")}> Jump to Page4 </button>
      <button onClick={() => history.goBack()}> Go Back </button>
      <button onClick={() => window.history.go(-1)}> go -1 (prev page) </button>
      <button onClick={() => window.location.href = '/page2'}> Go to Page 2 </button>
    </div>
  )
}

const Page4 = props => {
  return (
    <div className='page'>
      <h3>Page 4, {props.location.state.productId} </h3>
      <button onClick={() => props.history.push('/page5', {singer: 'Taylor Swift'})}> Go to Page5 </button>
    </div>
  )
}

const Page5 = props => {
  console.log('props page5');
  return (
    <div className='page'>
      <h5>Page5, {props.location.state.singer}</h5>
      <button onClick={() => props.history.push('/form')}>Go to form</button>
    </div>
  )
}

const NavBar = () => {
  const id = 11
  const name = 'James'

  return (
    <div>
      <nav className='navbar navbar-dark bg-primary'>
        <Link to="/" type='button' className='btn btn-primary'> Home </Link>
        <Link to="/page2" type='button' className='btn btn-primary'> Page2 </Link> 
        <Link to={`/page3/${id}/name/${name}`} type='button' className='btn btn-primary'> Page3 </Link>
      </nav>
    </div>
  )
}

const Page404 = () => {
  return (
    <div className='page'>
      <h3>Page Not Found</h3>
    </div>
  )
}


function App() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div>
      <BrowserRouter>
        <NavBar/>

        {/* <Switch> "Switch" is replaced by routes "Routes" in React 6 */}
        <Routes>
          {/* <Route path="/" exact component={Page1}></Route> */}
          <Route path="/page2" exact component={Page2}></Route>
          <Route path="/page3/:id/name/:name" exact component={Page3}></Route>
          <Route path="/page4" exact component={Page4}></Route>
          <Route path="/page5" exact component={Page5}></Route>
          <Route path="/404" exact component={Page404}></Route>
          <Route path="/form" exact component={HookForm}></Route>

          {/* <Route exact path="/"> */}
          {/* {isActive ? <Redirect to="/404"> : <Redirect to="/form"/>} */}
          {/* </Route> */}
        </Routes>
        {/* </Switch> */}
      </BrowserRouter>
    </div>
  )
}

export default App;
