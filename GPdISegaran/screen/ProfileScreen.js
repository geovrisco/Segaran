import React from 'react'
import { KeyboardAvoidingView, Text } from 'react-native'
import styles from "../styles";

export default function ProfileScreen (){

  return(
    <KeyboardAvoidingView style={styles.container}>
      <Text>Test</Text>
    </KeyboardAvoidingView>
  )
}