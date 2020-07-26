import React, { useEffect, useState, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screen/HomeScreen';
import DetailScreen from '../screen/HomeStacks/Detail';
import LoginScreen from '../screen/LoginScreen';
import ProfileScreen from '../screen/ProfileScreen';
import {AuthContext} from './context'
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


export default (props) =>{

  const {loginState} = useContext(AuthContext)

  useEffect(()=>{
   console.log(loginState,'ini loginstate')
  },[])

  if (loginState.token !==null){
    return (
      
        <NavigationContainer>
           <AppTabsLoginScreen></AppTabsLoginScreen>
        </NavigationContainer>
    
      
    )
  } else if (loginState.token === null){
    return (
      <NavigationContainer>
      <AppTabScreen></AppTabScreen>
    </NavigationContainer>
    )
  }
}

