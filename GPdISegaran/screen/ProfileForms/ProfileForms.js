import React from 'react'
import { View, Text } from 'react-native'
import {Input, Icon} from 'react-native-elements'
import styles from '../../styles'

export default function ProfileForms(){
  return(
    <View>
      <Input
        label="Nama Panggilan"
        placeholder="Nama Panggilan"
        containerStyle={styles.profileForm}
        value="asd"
        leftIcon={
          <Icon
            name="user"
            type="font-awesome"
            size={24}
            color="#ff7f50"
          />
        }
      />
      <Input
        label="Nama Lengkap"
        placeholder="Nama Lengkap"
        containerStyle={styles.profileForm}
        // value="asd"
        leftIcon={
          <Icon
            name="user"
            type="font-awesome"
            size={24}
            color="#ff7f50"
          />
        }
      />
    </View>
  )
}

