
import {url} from '../../config/variabels'
import axios from 'axios'

export const getArticles = () =>{
  return async dispatch => {
    const res = await fetch(`${url}/articles`)
    const data = await res.json()
    console.log(data,'ini data')
    dispatch({
      type:'GET_ARTICLES',
      payload:{
        articles:data
      }
    })
  }
}

export const getUsers = (token) =>{
  return async dispatch => {
    let config = {
      headers:{
        token:token
      }
    }
    const res = await axios.get(`${url}/users`,config)
    const data = await res.data
    dispatch({
      type:'GET_USERS',
      payload:{
        users:data
      }
    })
  }
}