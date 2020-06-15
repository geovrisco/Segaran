
import {url} from '../../config/variabels'

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