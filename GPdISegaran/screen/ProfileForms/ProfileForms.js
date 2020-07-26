import React, { useState, useContext, useEffect } from 'react'
import { View, Text, ScrollView, Picker, AsyncStorage } from 'react-native'
import {Input, Icon, Button} from 'react-native-elements'
import styles from '../../styles'
import DateTimePicker from '@react-native-community/datetimepicker'
import {AuthContext} from '../../config/context'

export default function ProfileForms(props){
  // console.log(props)
  const [date, setDate] = useState( new Date('1994-04-23'))
  const [showDate, setShowDate] = useState(false)
  const {loginState,authContext} = useContext(AuthContext)
  const toggleShowDate = () =>{
    setShowDate(!showDate)
  }

  useEffect(() => {
    console.log(loginState,authContext)
  },[])
  async function logout(){
    // console.log('keluar')
   try{
     let keys =['name','role','token','id']
     const remove = await AsyncStorage.multiRemove(keys)
    //  console.log(remove,'ini remove')
     const getz = await AsyncStorage.multiGet(keys)
    //  console.log(getz,'ini get')
   } catch(err){
     console.log(err,'ini error dari logout()')
   }
 }

  const onDateChange =(event, selectedDate) =>{
    setShowDate(!showDate)
    props.setDob(new Date(selectedDate))
    setDate(new Date(selectedDate))
  }

  return(
    <ScrollView style={styles.containerGeo}>
      <Input
        label="Nama Lengkap"
        placeholder="Nama Lengkap"
        containerStyle={styles.profileForm}
        value={props.fullname}
        onChangeText={(e)=>props.setFullname(e)}
      />
      <Input
        label="Nama Panggilan"
        placeholder="Nama Panggilan"
        containerStyle={styles.profileForm}
        value={props.name}
        onChangeText={(e)=>props.setName(e)}
      />
      <Input
        label="Tanggal Lahir"
        containerStyle={styles.profileForm}
        value={date.toLocaleDateString('id-ID')}
        onFocus={toggleShowDate}
      />
      {
        showDate && props.dob===null &&
        <DateTimePicker
          mode="date"
          value={date}
          onChange={onDateChange}
        />
      }
      {
        showDate && props.dob!==null &&
        <DateTimePicker
          mode="date"
          value={props.dob}
          onChange={onDateChange}
        />
      }

      <Input
        label="alamat"
        placeholder="Jl. a b c"
        containerStyle={styles.profileForm}
        value={props.address}
        onChangeText={(e)=>props.setAddress(e)}
      />
      <Input
        label="Nomor Handphone"
        placeholder="08xxxxxxxx"
        containerStyle={styles.profileForm}
        value={props.phone1}
        onChangeText={(e)=>props.setPhone1(e)}
      />
      <Input
        label="Nomor Handphone 2"
        placeholder="08xxxxxxxxxx"
        containerStyle={styles.profileForm}
        value={props.phone2}
        onChangeText={(e)=>props.setPhone2(e)}
      />
      <Text>Jenis Kelamin</Text>
      <Picker
        onValueChange={(itemValue,itemIndex) => props.setGender(itemValue)}
        selectedValue={props.gender ? props.gender : ''}
      >
        <Picker.Item label ="Silahkan Pilih:" value="jk"/>
        <Picker.Item label ="Pria" value="pria"/>
        <Picker.Item label ="Wanita" value="wanita"/>
      </Picker>
      <View style={{flexDirection:"row", justifyContent:"center"}}> 
        <Button
          title="Perbarui"
          onPress={()=>props.updateUserData()}
          buttonStyle={{width:100,marginRight:10}}
        />
          <Button
            mode="contained"
            title="LogOut"
            onPress={()=>authContext.signOut()}
            buttonStyle={{width:100,backgroundColor:"red"}}
          ></Button>
      </View>
    </ScrollView>
  )
}

