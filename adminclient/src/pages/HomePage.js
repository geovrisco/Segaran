import React, {useEffect, useState, useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getArticles} from '../store/actions/ArticlesAction'
import {Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom'

function HomePage (){
  const dispatch = useDispatch();
  const history = useHistory()
  const articles = useSelector(state => state.ArticleReducer.articles);
 
  const functGetArticles = useCallback(()=>{
    dispatch(getArticles())
  },[dispatch])

  useEffect(()=>{
    functGetArticles()
  },[functGetArticles])


  console.log(articles)
  


  return(
    <div style={{display:'flex', flexDirection:'column', width:"800px" }}>
      <div>
        <pre>{JSON.stringify(articles,null,2)}</pre>
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