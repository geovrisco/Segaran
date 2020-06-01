import React, { useEffect, useState } from "react";
import { View, Dimensions, TouchableOpacity, KeyboardAvoidingView,Alert } from "react-native";
import axios from 'axios'
import styles from "../../styles";
import {url} from '../../config/variables'

import { Icon, Input, Text, Button, withBadge } from "react-native-elements";
const MAX_WIDTH = Dimensions.get('screen').width
const MAX_HEIGHT = Dimensions.get('screen').height


export default function RegisterForm(props) {

  const register =  () => {
    // console.log(fullname,phone,email,password)
    axios({
      method:'POST',
      url:`${url}/users/register`,
      data:{
        fullname:props.fullname,
        phone1:props.phone,
        email:props.email,
        password:props.password,
        role:'user'
      }
    })
    .then(data =>{
      console.log(data)
      Alert.alert(
        "Pendaftaran Sukses",
        "akun sudah dibuat silahkan login",
        [
          {
            text:'Ok',
            onPress:()=>props.clearField()
          }
        ]
      )
    })
    .catch(error=>{
      // console.log(error)
      let arrayOfError=[]
      if(Array.isArray(error.response.data.message)){
        error.response.data.message.forEach(element => {
          arrayOfError.push(element)
        });
        let message=arrayOfError.join('\n\n')
        Alert.alert(
          'Pendaftaran gagal',
          message,
          [
            {
              text:'Ok'
            }
          ]
        )
      }else{
        alert(error.response.data.message)
      }
    })
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios"? "padding" : "height"} style={styles.container2}>
      {
        <>
          <Text>Daftar</Text>
          <View style={styles.registerContainer}>
            <Input
              placeholder="nama lengkap"
              onChangeText={(e)=>props.setFullName(e)}
              leftIcon={
                <Icon
                  name="envelope"
                  type="font-awesome"
                  size={24}
                  color="#ff7f50"
                />
              }
            />
            <Input
            keyboardType="number-pad"
              placeholder="No. Telp"
              onChangeText={(e) => props.setPhone(e)}
              leftIcon={
                <Icon
                  name="envelope"
                  type="font-awesome"
                  size={24}
                  color="#ff7f50"
                />
              }
            />
            <Input
              placeholder="Email@mail.com"
              onChangeText={(e) => props.setEmail(e)}
              leftIcon={
                <Icon
                  name="envelope"
                  type="font-awesome"
                  size={24}
                  color="#ff7f50"
                />
              }
            />
            <Input
              placeholder="Password"
              onChangeText={(e) => props.setPassword(e)}
              secureTextEntry={true}
              leftIcon={<Icon name="lock" size={30} color="#ff7f50" />}
            />
          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity title="Daftar" style={
                {
                  width:MAX_WIDTH*0.75*3/4,
                  backgroundColor:'#ffa502',
                  height:MAX_HEIGHT*0.065,
                  
                  color:'white',
                  alignItems:'center',
                  justifyContent:'center',
                  borderBottomStartRadius:20
                }
                }
                onPress={()=>register()}
              >
                <Text style={styles.white}>Daftar</Text>
              </TouchableOpacity>
              <TouchableOpacity title="Daftar" style={
                {
                  width:MAX_WIDTH*0.75*1/4,
                  backgroundColor:'#ff6b81',
                  height:MAX_HEIGHT*0.065,
                  borderBottomEndRadius:20,
                  color:'white',
                  alignItems:'center',
                  justifyContent:'center',
                  
                }
                }
                onPress={()=>props.toggleForm()}
              >
                <Text style={styles.white}>Batal</Text>
              </TouchableOpacity>

          </View>
        </>
      }
    </KeyboardAvoidingView>
  );
}
