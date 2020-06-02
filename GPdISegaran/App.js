import React, {useEffect, useState} from 'react';
import Navigation from './config/navigation'
import registerForPushNotifications from './helpers/registerpushnotification'
import * as Font from 'expo-font'

export default function App() {

  async function loadStaticFiles(){
    await Font.loadAsync(
      {
        'OpenSans':require('./assets/fonts/OpenSans/OpenSans-Regular.ttf')
      }
    )
    console.log('done')
  }

  useEffect(()=>{
    registerForPushNotifications()
    loadStaticFiles()
  },[])
  
  return (
    <Navigation></Navigation>
  );
}


