
const initialState = {
  userData:null
}

const UserReducer = ( state = initialState, action)=>{
  console.log('dari userReducer' , action)
  switch(action.type){
    case 'SET_USERDATA':
      return {...state, userData:action.payload}
    default :
      return state
  }
}

export default UserReducer