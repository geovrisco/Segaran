import React, {useEffect} from 'react';
import Navigation from './config/navigation'
import registerForPushNotifications from './helpers/registerpushnotification'
export default function App() {

  useEffect(()=>{
    registerForPushNotifications()
  },[])
  
  return (
    <Navigation></Navigation>
  );
}


