import React, {useEffect, useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getArticles} from '../store/actions/ArticlesAction'
import TableComponent from './HomePage/TableComponent'
import {Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import {url} from '../config/variabels'
function HomePage (){
  const dispatch = useDispatch();
  const history = useHistory()
  const articles = useSelector(state => state.ArticleReducer.articles);
  const userData = useSelector(state => state.UserReducer.userData)
  const header = ['Id', 'Title', 'Kategori', 'Tanggal Terbit','Hapus','Edit']
  const rowTitle= ['id','title','category','date','hapus','edit']
 
  const functGetArticles = useCallback(()=>{
    dispatch(getArticles())
  },[dispatch])

  const functDeleteItem = (id)=>{
    console.log(userData)
    console.log(id,'ini dari home')
    axios.delete(`${url}/articles/${id}`,{
      headers:{
        token:userData.token
      }
    })
    .then(suksesDelete =>{
      console.log(suksesDelete)
      return dispatch(getArticles())
    })
    .catch(errorDeleteArticle=>{
      console.log(errorDeleteArticle.response)
    })
    
  }

  const functEditItem = (id,data) =>{
    history.push(`/article/${id}`,data)
  }

  useEffect(()=>{
    functGetArticles()
  },[functGetArticles])


  console.log(articles)
  


  return(
    <div style={{display:'flex', flexDirection:'column', width:"800px", alignItems:"center" }}>
      <div style={{margin:20}}>
        <TableComponent
          row={articles}
          label='Data Artikel'
          header={header}
          rowTitle={rowTitle}
          width={800}
          functDeleteItem = {functDeleteItem}
          functEditItem = {functEditItem}
        />
      </div>
      <div>
        <Button color="primary" variant="contained" 
          onClick={()=> history.push('/createArticle')}
        >Buat Artikel</Button>
      </div>
    </div>
  )
}

export default HomePage