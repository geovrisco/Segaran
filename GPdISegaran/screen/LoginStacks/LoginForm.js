import React, { useEffect, useState } from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import { Icon, Input, Text, Button, withBadge } from "react-native-elements";
import axios from "axios";
import styles from "../../styles";

import {setAsyncStorage} from '../../helpers/helper'
import {url} from '../../config/variables'

const MAX_WIDTH = Dimensions.get("screen").width;
const MAX_HEIGHT = Dimensions.get("screen").height;

export default function LoginForm(props) {
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')

  const login = async () => {
    try {
      let response = await axios.post(`${url}/users/login`, {
        email: props.email,
        password: props.password,
      });
      let loginData = response.data;
      console.log(loginData,'sukses login')
      setAsyncStorage('token',loginData.token)
      loginData.name === null ? setAsyncStorage('name', 'pengguna') : setAsyncStorage('name',loginData.name)
      setAsyncStorage('role', loginData.role)
    } catch (error) {
      console.log('error login',props.email,props.password);
      alert(error.response.data.message)
    }
  };

  console.log(props);
  return (
    <View style={styles.container2}>
      {
        <>
          <View style={styles.marginTop1Bot1}>
            <Text style={styles.Opensans}>Masuk</Text>
          </View>
          <View style={styles.inputContainer}>
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
              onChangeText={(e)=>props.setPassword(e)}
              secureTextEntry={true}
              leftIcon={<Icon name="lock" size={30} color="#ff7f50" />}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => login()}
              title="Masuk"
              style={{
                width: (MAX_WIDTH * 0.75) / 2,
                backgroundColor: "#eccc68",
                height: MAX_HEIGHT * 0.065,
                borderBottomStartRadius: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.white}>Masuk</Text>
            </TouchableOpacity>
            <TouchableOpacity
              title="Daftar"
              style={{
                width: (MAX_WIDTH * 0.75) / 2,
                backgroundColor: "#ffa502",
                height: MAX_HEIGHT * 0.065,
                borderBottomEndRadius: 20,
                color: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => props.toggleForm()}
            >
              <Text style={styles.white}>Daftar</Text>
            </TouchableOpacity>
          </View>
        </>
      }
    </View>
  );
}
