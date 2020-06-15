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
  },[])

  console.log(userData,'ini user data')
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
            </Switch>
        </div>
      </Router>
      } 
      {
        !userData && !toggleForm &&
        <SignIn toggle={toggle}></SignIn>
      }
      {
        !userData && toggleForm &&
        <SignUp toggle={toggle}></SignUp>
      }
    </>
  )
}

export default Navigation