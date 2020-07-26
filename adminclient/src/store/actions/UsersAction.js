export const setUserData = (token,role) => {
  return dispatch => {
    let data = {
      token: token,
      role: role
    }
    dispatch({
      type: "SET_USERDATA",
      payload: data
    })
  }
}

export const removeUserData = {
  type:"REMOVE_USERDATA"
}
