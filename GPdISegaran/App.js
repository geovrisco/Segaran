import React, {useEffect, useState} from 'react';
import Navigation from './config/navigation'
import registerForPushNotifications from './helpers/registerpushnotification'
import * as Font from 'expo-font'
import { AsyncStorage } from 'react-native';
export default function App() {

  const [id,setUserId] =useState(null)
  const [name, setUserName] =useState(null)
  const [token, setToken] =useState(null)
  const [role, setRole] =useState(null)

  async function loadStaticFiles(){
    await Font.loadAsync(
      {
        'OpenSans':require('./assets/fonts/OpenSans/OpenSans-Regular.ttf')
      }
    )
    console.log('done')
  }

  async function getAsyncStorageData(){
    try {
      let userId = await AsyncStorage.getItem("id")
      let userName = await AsyncStorage.getItem("name")
      let token = await AsyncStorage.getItem("token")
      let role = await AsyncStorage.getItem("role")
      console.log(userId,userName,token,role,"==credentials==")
      setUserId(userId)
      console.log(id,"id")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    registerForPushNotifications()
    loadStaticFiles()
    getAsyncStorageData()
  },[])
  
  return (
    <Navigation></Navigation>
  );
}


