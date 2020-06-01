import React from 'react'
import { KeyboardAvoidingView, Text } from 'react-native'

import ProfileForms from './ProfileForms/ProfileForms'
import styles from "../styles";

export default function ProfileScreen (){
  const [id, setId] = React.useState(1)
  return( 
    <KeyboardAvoidingView style={styles.container}>
      <ProfileForms></ProfileForms>
    </KeyboardAvoidingView>
  )
}