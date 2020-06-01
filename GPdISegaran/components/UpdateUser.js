import { View } from "react-native";
import React, { useEffect,useState } from 'react'
import { View, Dimensions,TouchableOpacity } from 'react-native';
import styles from '../styles'
import { Icon, Input,Text, Button, withBadge } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker'
import {Picker} from '@react-native-community/picker'
const MAX_WIDTH = Dimensions.get('screen').width
const MAX_HEIGHT = Dimensions.get('screen').height

export default function UpdateForm(){
  return(
    <View style={styles.container2}>
      {
        <>
          <Text>Daftar</Text>
          <View style={styles.inputContainer}>
            <Input
              placeholder="nama panggilan"
              leftIcon={
                <Icon
                  name='envelope'
                  type="font-awesome"
                  size={24}
                  color="#ff7f50"
                />
              }
            />
            <Input
              placeholder="nama lengkap"
              leftIcon={
                <Icon
                  name='envelope'
                  type="font-awesome"
                  size={24}
                  color="#ff7f50"
                />
              }
            />
            <Input
              placeholder="alamat"
              leftIcon={
                <Icon
                  name='envelope'
                  type="font-awesome"
                  size={24}
                  color="#ff7f50"
                />
              }
            />
            <Input
              placeholder="No. Telp"
              leftIcon={
                <Icon
                  name='envelope'
                  type="font-awesome"
                  size={24}
                  color="#ff7f50"
                />
              }
            />
            <Input
              placeholder="No. Telp lain"
              leftIcon={
                <Icon
                  name='envelope'
                  type="font-awesome"
                  size={24}
                  color="#ff7f50"
                />
              }
            />
            <Picker
              onValueChange={(itemValue,itemIndex) =>
                setGender(itemValue)
              }
            >
              <Picker.Item label="Pria" value="pria" />
              <Picker.Item label="Wanita" value="wanita" />
            </Picker>
            <Input
              placeholder="Email@mail.com"
              leftIcon={
                <Icon
                  name='envelope'
                  type="font-awesome"
                  size={24}
                  color="#ff7f50"
                />
              }
            />''
            <Input
              placeholder="Password"
              secureTextEntry={true}
              leftIcon={
                <Icon
                  name='lock'
                  size={30}
                  color="#ff7f50"
                />
              }
            />
            
          </View>
        </>
      }
    </View>
  )
}