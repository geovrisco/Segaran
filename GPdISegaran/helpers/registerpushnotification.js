import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions'

import {url} from '../config/variables'
const registerForPushNotifications = async ()=>{
  const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS)
  if(status !== 'granted'){
    alert('mohon izinkan aplikasi untuk mengakses notifikasi')
    return
  }
  let token = await Notifications.getExpoPushTokenAsync()
  console.log('register token')
  return fetch(`${url}/token`, {
    method:'POST',
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      token:{
        value:token
      }
    })
  })
}

export default registerForPushNotifications