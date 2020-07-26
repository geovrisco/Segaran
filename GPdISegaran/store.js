const initialLoginState = {
  isLogin:false,
  token:null,
  name: null,
  fullName: null,
  dob: null,
  address: null,
  phone1: null,
  phone2: null,
  gender: null
}

const loginReducer = (prevState, action) => {
 switch (action.type){
   case 'RETRIEVE_TOKEN' :
     return {
       ...prevState,
       token:action.token,
       isLogin: true
     }
   case 'LOGIN' : 
    return{
      ...prevState,
      isLogin:true,
      token:action.token,
      name: action.name,
      fullName: action.fullname,
      dob: action.dob,
      address: action.address,
      phone1: action.phone1,
      phone2: action.phone2,
      gender: action.gender
    }
   case 'LOGOUT':
     return{
       ...prevState,
       isLogin:false,
       token:null,
       name: null,
       fullName: null,
       dob: null,
       address: null,
       phone1: null,
       phone2: null,
       gender: null
     }
 }
}

const [loginState, dispatch] = useReducer(loginReducer,initialLoginState)