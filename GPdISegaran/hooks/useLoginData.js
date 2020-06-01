import {useState, useEffect} from 'react';
import {AsyncStorage} from 'react-native'
export default (data)=>{
    // console.log(data)
    const [userName, setuserName] = useState(null)
    const [role, setRole] = useState(null)
    const [token, setToken]= useState(null)
    async function getUserData(){
      try {
        let asyncStorageValue={
          name:null,
          token:null,
          role:null
        }
        asyncStorageValue.name = await AsyncStorage.getItem(`name`);
        asyncStorageValue.token = await AsyncStorage.getItem(`token`);
        asyncStorageValue.role = await AsyncStorage.getItem(`role`);
        if (!asyncStorageValue.name && ! asyncStorageValue.token && !asyncStorageValue.role) {
          throw "data kosong";
        } else {
          console.log(asyncStorageValue,'ini async storage value untuk :')
          setuserName(asyncStorageValue.name)
          setRole(asyncStorageValue.role)
          setToken(asyncStorageValue.token)
        }
      } catch (error) {
        console.log(error);
        setuserName('silahkan login/register')
        setToken(null)
        setRole(null)
      }
    }

    useEffect(()=>{
      getUserData()
    },[])


    return{
        userName,
        role,
        token
    }        
}