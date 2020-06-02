import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screen/HomeScreen';
import DetailScreen from '../screen/HomeStacks/Detail';
import LoginScreen from '../screen/LoginScreen';
import ProfileScreen from '../screen/ProfileScreen';
import { AsyncStorage } from 'react-native';

const NewsStack = createStackNavigator ();
const NewsStackScreen = () =>(
  <NewsStack.Navigator
  screenOptions={{
    headerTitleAlign:"center"
  }}
  >
    <NewsStack.Screen name="NewsList" component={HomeScreen} options={{title:"menu utama"}} />
    <NewsStack.Screen name="NewsDetail" component={DetailScreen} options={({route}) => {
      console.log(route)
      return {
        headerTitle:route.params.articleTitle,
      }
    }} />
  </NewsStack.Navigator>
);

const LoginRegisterStack = createStackNavigator();
const LoginRegisterStackScreen = ()=> (
  <LoginRegisterStack.Navigator>
    <LoginRegisterStack.Screen name ="Login" component={LoginScreen}/>
  </LoginRegisterStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () =>(
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profil" component={ProfileScreen}/>
  </ProfileStack.Navigator>
)


const AppTabs = createBottomTabNavigator();
const AppTabScreen = () =>(
  <AppTabs.Navigator>
    <AppTabs.Screen name="Artikel" component={NewsStackScreen} />
    <AppTabs.Screen name="Masuk" component={LoginRegisterStackScreen}/>
  </AppTabs.Navigator>
)

const AppTabsLogin=createBottomTabNavigator();
const AppTabsLoginScreen = ()=>(
  <AppTabsLogin.Navigator>
    <AppTabs.Screen name="Artikel" component={NewsStackScreen} />
    <AppTabs.Screen name="Profil" component={ProfileStackScreen}/>
  </AppTabsLogin.Navigator>
)


export default () =>{

  const [name,setName]=useState(null)
  const [token,setToken]=useState(null)
  const [id,setId]=useState(null)
  const [role,setRole]=useState(null)

  async function getAsyncStorageData(){
    try {
      const AsyncName = await AsyncStorage.getItem('name')
      const AsyncToken = await AsyncStorage.getItem('token')
      const AsyncRole = await AsyncStorage.getItem('role')
      const AsyncId = await AsyncStorage.getItem('id')
      setName(AsyncName)
      setToken(AsyncToken)
      setRole(AsyncRole)
      setId(AsyncId)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getAsyncStorageData()
  },[])

  return (
    <NavigationContainer>
      {token ? <AppTabsLoginScreen/> : <AppTabScreen/>}
    </NavigationContainer>

  )
}

