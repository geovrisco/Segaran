import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, Text, View, AsyncStorage } from 'react-native'

import ProfileForms from './ProfileForms/ProfileForms'
import axios from 'axios'
import styles from "../styles";
import {url} from '../config/variables'
import { ScrollView } from 'react-native-gesture-handler';

export default function ProfileScreen (){
  const [isLoading,setIsLoading] = useState(true)
  const [id, setId] = useState(null)
  const [name, setName] = useState(null)
 

  async function getAsyncStorageId(){
    const userId = await AsyncStorage.getItem('id')
    console.log('user id from AsyncStorage is: ',userId)
    await setId(userId)
    console.log('state hooks id : ',id)
  }

  async function getUserData(){
    console.log('getting userr data')
    try {
      let result = await axios.get(`${url}/users/${id}`)
      console.log(result.data)
      setName(result.data.name)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }


  function test(){
    getAsyncStorageId()
    setTimeout(() => {
      console.log(id)
      getUserData()
    }, 5000);
  }

  useEffect(()=>{
    test()
  },[])


  return( 
    <ScrollView>
    <KeyboardAvoidingView behavior={Platform.OS == "ios"? "padding" : "height"} style={styles.container}>
      {
        !isLoading &&
        <ProfileForms
          id={id}
          name={name}
          setName={setName}
        />
      }
      {
        isLoading &&
        <View>
          <Text>Loading</Text>
        </View>
      }
    </KeyboardAvoidingView>
    </ScrollView>
  )
}