import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, Text, View } from 'react-native'

import ProfileForms from './ProfileForms/ProfileForms'
import axios from 'axios'
import styles from "../styles";
import {url} from '../config/variables'
import { ScrollView } from 'react-native-gesture-handler';

export default function ProfileScreen (){
  const [isLoading,setIsLoading] = useState(true)
  const [id, setId] = useState(5)
  const [address,setAddress] = useState(null)
  const [dob,setDob] = useState(null)
  const [fullname,setFullname]=useState(null)
  const [gender, setGender] = useState(null)
  const [name, setName] = useState(null)
  const [phone1,setPhone1] = useState(null)
  const [phone2,setPhone2] = useState(null)

  async function getUserData(){
    console.log('getting userr data')
    try {
      let result = await axios.get(`${url}/users/${id}`)
      console.log(result.data)
      setAddress(result.data.address)
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
    console.log(id,address,dob,fullname,gender,name,phone1,phone2)
    setIsLoading(true)
    axios.put(`${url}/users/${id}`,{
      address:address,
      dob:dob,
      fullname:fullname,
      gender:gender,
      name:name,
      phone1:phone1,
      phone2:phone2
    })
    .then(data=>{
      console.log(data)
      setIsLoading(false)
      console.log('id', id)
      console.log('address',address)
      console.log('dob',dob)
      console.log('fullname',fullname)
      console.log('gender',gender)
      console.log('name',name)
      console.log('phone1',phone1)
      console.log('phone2',phone2)
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
        !isLoading &&
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