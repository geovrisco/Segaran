// import {useState, useEffect} from 'react';
// import {AsyncStorage} from 'react-native'
// export default (data)=>{
//     // console.log(data)
//     const [userName, setuserName] = useState(null)
//     const [role, setRole] = useState(null)
//     const [token, setToken]= useState(null)
//     const [id,setId]=useState(null)
//     async function getUserData(){
//       try {
//         let asyncStorageValue={
//           name:null,
//           token:null,
//           role:null,
//           id:null
//         }
//         asyncStorageValue.name = await AsyncStorage.getItem(`name`);
//         asyncStorageValue.token = await AsyncStorage.getItem(`token`);
//         asyncStorageValue.role = await AsyncStorage.getItem(`role`);
//         asyncStorageValue.id = await AsyncStorage.getItem(`id`);
//         if (!asyncStorageValue.name && ! asyncStorageValue.token && !asyncStorageValue.role) {
//           throw "data kosong";
//         } else {
//           await setuserName(asyncStorageValue.name)
//           await setRole(asyncStorageValue.role)
//           await setToken(asyncStorageValue.token)
//           await setId(asyncStorageValue.id)
//           console.log('id dari hook')
//           console.log(id)
//         }
//       } catch (error) {
//         console.log('error dari hook')
//         console.log(error);
//       }
//     }

//     useEffect(()=>{
//       getUserData()
//     },[])


//     return{
//         userName,
//         role,
//         token,
//         id
//     }        
// }