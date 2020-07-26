import React, {useEffect, useState, useMemo, createContext, useReducer } from 'react';
import { AsyncStorage } from 'react-native'
import * as Font from 'expo-font'

import registerForPushNotifications from './helpers/registerpushnotification'
import {AuthContext} from './config/context.js'
import Navigation from './config/navigation'
import axios from 'axios'
import {url} from './config/variables'


export default function App() {

  async function loadStaticFiles(){
    await Font.loadAsync(
      {
        'OpenSans':require('./assets/fonts/OpenSans/OpenSans-Regular.ttf')
      }
    )
    console.log('done')
  }

  async function retrieveData(){
    try {
    let id = await AsyncStorage.getItem('id')
    if (id){
      return id
    }
      } catch (error) {
        console.log('error dari trycatch')
        console.log(error)
      }
  }
  // const AuthContext = createContext()
  const [userData, setUserData] =useState(null)
  const initialLoginState = {
    isLogin:false,
    token:null,
    name: null,
    fullName: null,
    dob: null,
    address: null,
    phone1: null,
    phone2: null,
    gender: null,
    id:null
  }

  const loginReducer = (prevState, action) => {
   switch (action.type){
     case 'RETRIEVE_TOKEN' :
       return {
         ...prevState,
         token:action.token,
         isLogin: true
       }
     case 'LOGIN' : 
      return{
        ...prevState,
        isLogin:true,
        token:action.token,
        name: action.name,
        fullName: action.fullname,
        dob: action.dob,
        address: action.address,
        phone1: action.phone1,
        phone2: action.phone2,
        gender: action.gender,
        id: action.id
      }
     case 'LOGOUT':
       return{
         ...prevState,
         isLogin:false,
         token:null,
         name: null,
         fullName: null,
         dob: null,
         address: null,
         phone1: null,
         phone2: null,
         gender: null,
         id: null
       }
    case 'RETRIEVE':
      return{
        ...prevState,
        isLogin:true,
        token:action.token,
        name: action.name,
        fullName: action.fullname,
        dob: action.dob,
        address: action.address,
        phone1: action.phone1,
        phone2: action.phone2,
        gender: action.gender,
        id: action.id
      }
   }
  }

  const [loginState, dispatch] = useReducer(loginReducer,initialLoginState)

  const authContext = useMemo(() => ({
    signIn: async (email,password) =>{
      // console.log(email,password)
      let result = await axios.post(`${url}/users/login`,{email:email,password:password})
      console.log(result.data.userData.fullname,'ini dari database')
       try {
        await dispatch({
          type:'LOGIN', 
          token:result.data.token,
          address:result.data.userData.address,
          dob:result.data.userData.dob,
          email:result.data.userData.email,
          fullName: result.data.userData.fullname,
          name:result.data.userData.name,
          gender:result.data.userData.gender,
          phone1:result.data.userData.phone1,
          phone2:result.data.userData.phone2, 
          id:result.data.userData.id
        })
         await AsyncStorage.setItem('token',`${result.data.userData.token}`)
         await AsyncStorage.setItem('id',`${result.data.userData.id}`)
       } catch (error) {
         console.log(error)
       }
        console.log(loginState)

        // console.log('==========end login')
      
    },
    signOut: async() => {
      await AsyncStorage.removeItem('token', error => {
        if (error){
          console.log(error)
        }
      })
      await AsyncStorage.removeItem('id', error => {
        if (error){
          console.log(error)
        }
      })
      dispatch({type:'LOGOUT'})
    },
    getAsync: () => {

    }
  }),[])

  

  useEffect(()=>{
    registerForPushNotifications()
    loadStaticFiles()
    retrieveData()
    async () => {
      if (retrieveData()){
        try {
          let result = await axios.get(`${url}/users/${retrieveData()}`)
          console.log(result.data, 'ini dari retrievedata')
        } catch (error) {
          console.log(error)
        }
      }
    }
  },[])
  

  return (
    <AuthContext.Provider value={{authContext,loginState}}>
      <Navigation></Navigation>
    </AuthContext.Provider>

    // <AuthContext.Provider value={authContext}>
    // </AuthContext.Provider>r
  );
}


