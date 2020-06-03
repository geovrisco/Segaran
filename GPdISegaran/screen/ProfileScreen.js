import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, Text, View, AsyncStorage, ScrollView } from 'react-native'

import ProfileForms from './ProfileForms/ProfileForms'
import axios from 'axios'
import styles from "../styles";
import {url} from '../config/variables'



export default function ProfileScreen (){
  const [isLoading,setIsLoading] = useState(true)
  const [id, setId] = useState(null)
  const [address,setAddress] = useState(null)
  const [dob,setDob] = useState(null)
  const [fullname,setFullname]=useState(null)
  const [gender, setGender] = useState(null)
  const [name, setName] = useState(null)
  const [phone1,setPhone1] = useState(null)
  const [phone2,setPhone2] = useState(null)
  let desperateId = null

  async function getUserData(){
    console.log('getting userr data')
    try {
      const userId = await AsyncStorage.getItem('id')
      desperateId=userId
      let result = await axios.get(`${url}/users/${desperateId}`)
      // console.log(result.data)
      setAddress(result.data.address)
      setId(result.data.id)
      setDob(result.data.dob)
      setGender(result.data.gender)
      setName(result.data.name)
      setPhone1(result.data.phone1)
      setPhone2(result.data.phone2)
      setFullname(result.data.fullname)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }



  function updateUserData(){
    // setIsLoading(true)
    console.log(desperateId,'parameter update')
    axios.put(`${url}/users/${idg}`,{
      address:address,
      dob:dob,
      fullname:fullname,
      gender:gender,
      name:name,
      phone1:phone1,
      phone2:phone2
    })
    .then(data=>{
      console.log(data,"sukses update")
      setIsLoading(false)
    })
    .catch(err=>{
      console.log(err.response)
      setIsLoading(false)
    })
  }


  useEffect(()=>{
    getUserData()
  },[])


  return( 
    <ScrollView>
    <KeyboardAvoidingView behavior={Platform.OS == "ios"? "padding" : "height"} style={styles.container}>
      {
        <ProfileForms
          id={id}
          address={address}
          dob={dob}
          gender={gender}
          name={name}
          fullname={fullname}
          phone1={phone1}
          phone2={phone2}
          setAddress={setAddress}
          setDob={setDob}
          setGender={setGender}
          setName={setName}
          setFullname={setFullname}
          setPhone1={setPhone1}
          setPhone2={setPhone2}
          updateUserData={updateUserData}
        />
      }
    </KeyboardAvoidingView>
    </ScrollView>
  )
}