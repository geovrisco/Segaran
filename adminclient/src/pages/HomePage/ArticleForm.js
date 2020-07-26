import React, {useState} from 'react'
import {TextField, Container, Select, InputLabel, MenuItem, Button, Typography} from '@material-ui/core'
import axios from 'axios'
import { url } from '../../config/variabels';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams, useLocation } from 'react-router-dom'
import {getArticles} from '../../store/actions/ArticlesAction'


function ArticleForm (props){
  const location = useLocation()
  let {id} = useParams()
  console.log(id,'useparams')
  console.log(location.state)

  const userData = useSelector(state => state.UserReducer.userData)
  const dispatch = useDispatch()
  const history = useHistory()
  console.log(userData, 'ini user data..............')

  console.log(props)
  const [title, setTitle] = useState( props.command ==='update' ? location.state.title : '');
  const [category, setCategory] = useState(props.command ==='update' ? location.state.category : '');
  const [text, setText] = useState (props.command ==='update' ? location.state.text : '')
  const handleTitle = (e) => {
    
      setTitle(e.target.value)
      console.log('title : ',title)
   
  }
  const handleCategory = (e) => {
    
      setCategory(e.target.value)
      console.log('category : ',category)
    
  }
  const handleText = (e) => {
    
      setText(e.target.value)
      console.log('text : ', text)
    
  }

  const sendNotification = async () => {
    const req = await axios.post(`${url}/message/`,
    {
      title: category,
      body: title
    })
  }

  const submit = () => {
    let today= new Date()
    const data = {
      title:title,
      category:category,
      text:text,
      date:today,
    }
    console.log(data,'ini data')
    const config = {
      headers: {
        token:userData.token
      }
    }
    if (props.command==="create"){
      console.log('create data')
      axios.post(`${url}/articles/`,data,config)
      .then( suksesCreate => {
        console.log(suksesCreate)
        dispatch(getArticles())
        sendNotification()
        history.push('/')
      })
      .catch(error => {
        console.log(error.response)
      })
    }
    if (props.command==='update'){
      console.log('update data')
      axios.put(`${url}/articles/${id}`,data,config)
      .then(suksesUpdate => {
        console.log(suksesUpdate)
        dispatch(getArticles())
        sendNotification()
        history.push('/')
      })
      .catch(errorUpdate => {
        console.log('error update')
        console.log(errorUpdate)
      })
    }
  }

  const goback = () => {
    history.goBack()
  }

  
  return(
    <Container>
      <div style={{display:'flex', justifyContent:"center"}}>
        {
          props.command==='create' && 
          <Typography variant="h4" > Buat Artikel Baru </Typography>
        }
        {
          props.command==='update' && 
          <Typography variant="h4" > Edit Artikel </Typography>
        }
      </div>
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="outlined-basic"
          label="Judul"
          name="judul"
          onChange={(e) => handleTitle(e)}
          value={title}
          autoFocus/>
          <InputLabel id="kategori" >Kategori</InputLabel>
          <select name='category'
            onChange={(e) =>handleCategory(e)}
            style={{height:"40px",fontSize:"15px"}}
          >
            <option value="renungan"
              style={{height:"40px",fontSize:"15px"}}
            >Renungan</option>
            <option value="pengumuman"
              style={{height:"40px",fontSize:"15px"}}
            >Pengumuman</option>
          </select>
          {/* <Select labelId="kategori" id="select" required name="kategori"
          value={category}
             onChange={(e) => handleCategory(e)}>
            <MenuItem value="renungan">Renungan Harian</MenuItem>
            <MenuItem value="pengumuman">Pengumuman</MenuItem>
          </Select> */}

          <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          multiline
          id="outlined-basic"
          placeholder={'ketik <enter> untuk mengganti paragraf. \ncontoh : \nparagraf 1 adalah paragraf 1. <enter> paragraf2 adalah paragraf 2'}
          name="text"
          rows={8}
          value={text}
          onChange={(e) => handleText(e)}
          autoFocus/>

          {/* <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="outlined-basic"
          label="Link Gambar (jika ada) www.gambar.com/gambar1.jpg"
          name="gambar"
          autoFocus/>

          <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="outlined-basic"
          label="video (jika ada)"
          name="media"
          autoFocus/> */}
          <div style={{ display :"flex" , justifyContent : "center" }}>
            { props.command==="create" &&
            <>
              <Button variant="contained" color="primary" onClick={()=>submit()}>Publikasikan</Button>
              <Button variant="contained" color="secondary" onClick={ ()=>goback() } >Batal</Button>
            </>
            }
            { props.command==="update" &&
            <>
              <Button variant="contained" color="primary" onClick={()=>submit()}>Perbaharui</Button>
              <Button variant="contained" color="secondary" onClick={ ()=>goback() } >Batal</Button>
            </>
            }
          </div>
        </form>
    </Container>
  )

}

export default ArticleForm