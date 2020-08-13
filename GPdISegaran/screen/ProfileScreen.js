import React, { useState, useEffect, useContext } from 'react'
import { KeyboardAvoidingView, Text, View, AsyncStorage, ScrollView } from 'react-native'

import ProfileForms from './ProfileForms/ProfileForms'
import axios from 'axios'
import styles from "../styles";
import {url} from '../config/variables'
import {AuthContext} from '../config/context'



export default function ProfileScreen (){
  const {loginState} = useContext(AuthContext)
  const [isLoading,setIsLoading] = useState(false)
  const [id, setId] = useState(loginState.id)
  const [address,setAddress] = useState(loginState.address)
  const [dob,setDob] = useState(loginState.dob ? new Date (loginState.dob) : new Date('1994-04-23' ))
  const [fullname,setFullname]=useState(loginState.fullName)
  const [gender, setGender] = useState(loginState.gender)
  const [name, setName] = useState(loginState.name)
  const [phone1,setPhone1] = useState(loginState.phone1)
  const [phone2,setPhone2] = useState(loginState.phone2)
  let desperateId = null

  async function getUserData(){
    console.log(loginState.fullName,'ini profilescreen')
    
  }



  function updateUserData(){
    setIsLoading(true)
    console.log(address,dob,fullname,gender,name,phone1,phone2,'parameter update')
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
      alert('update berhasil')
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
      { !isLoading &&
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
        <Text>Mohon Tunggu</Text>
      }
    </KeyboardAvoidingView>
    </ScrollView>
  )
}