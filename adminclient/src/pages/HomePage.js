import React, {useEffect, useState, useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getArticles} from '../store/actions/ArticlesAction'
import TableComponent from './HomePage/TableComponent'
import {Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom'

function HomePage (){
  const dispatch = useDispatch();
  const history = useHistory()
  const articles = useSelector(state => state.ArticleReducer.articles);
  const header = ['Id', 'Title', 'Kategori', 'Tanggal Terbit','Hapus']
  const rowTitle= ['id','title','category','date','hapus']
 
  const functGetArticles = useCallback(()=>{
    dispatch(getArticles())
  },[dispatch])

  const functDeleteItem = (id)=>{
    console.log(id,'ini dari home')
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