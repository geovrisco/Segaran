import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, 
  Switch, 
  Route, 
 } from 'react-router-dom'
import {Container} from "@material-ui/core"
import {useSelector, useDispatch} from 'react-redux'
import '../index.css'
import { HomePage,
  UsersPage,
  SignIn,
  SignUp,
  ArticleForm
} from '../pages'
import { Navbar } from '../components'
import {setUserData} from '../store/actions/UsersAction'



function Navigation(){
  const userData = useSelector(state => state.UserReducer.userData)
  const dispatch = useDispatch()
  const [toggleForm,setToggleForm] = useState(false)
  const toggle = ()=>{
    setToggleForm(!toggleForm)
  }

  useEffect(()=>{
    function getLocalUserData (){
      if (localStorage.getItem('token') && localStorage.getItem('role')){
        dispatch(setUserData(localStorage.getItem('token'), localStorage.getItem('role')))
      } 
      return true
    }
    getLocalUserData()
  },[dispatch])

  
  return(
    <>
      {
        userData &&
        <Router>
          <div style={{display: "flex" }}> 
            <Navbar></Navbar> 
            <Switch>
              <Route exact path ="/">
                <Container>
                  <HomePage/>
                </Container>
              </Route>
              <Route exact path ="/users">
                <Container>
                  <UsersPage/>
                </Container>
              </Route>
              <Route exact path ="/createArticle">
                <Container>
                  <ArticleForm command={"create"}/>
                </Container>
              </Route>
              <Route exact path ="/article/:id"
              >
                <Container>
                  <ArticleForm command={'update'}/>
                </Container>
              </Route>
            </Switch>
        </div>
      </Router>
      } 
      {
        !userData &&
        <Router>
          <Switch>
            <Route exact path="/">
              <SignIn toggle={toggle}></SignIn>
            </Route>
            <Route exact path="/signUp">
              <SignUp toggle={toggle}></SignUp>
            </Route>
          </Switch>
        </Router>
      }
    </>
  )
}

export default Navigation