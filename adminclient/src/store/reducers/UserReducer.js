
const initialState = {
  userData:{
    role:null,
    token:null
  }
}

const UserReducer = ( state = initialState, action)=>{
  console.log('dari userReducer' , action)
  switch(action.type){
    case 'SET_USERDATA':
      return {...state, userData:action.payload}

    case 'REMOVE_USERDATA':
      return{...state, userData:null}

    default :
      return state
  }
}

export default UserReducer