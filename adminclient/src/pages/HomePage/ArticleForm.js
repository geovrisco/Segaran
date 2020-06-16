import React, {useState} from 'react'
import {TextField, Container, Select, InputLabel, MenuItem, Button, Typography} from '@material-ui/core'
import axios from 'axios'
import { url } from '../../config/variabels';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {getArticles} from '../../store/actions/ArticlesAction'


function ArticleForm (props){

  const userData = useSelector(state => state.UserReducer.userData)
  const dispatch = useDispatch()
  const history = useHistory()
  console.log(userData, 'ini user data..............')

  console.log(props)
  const [title, setTitle] = useState(null);
  const [category, setCategory] = useState(null);
  const [text, setText] = useState (null)
  const handleTitle = (e) => {
    if(props.command==="create"){
      setTitle(e.target.value)
      console.log('title : ',title)
    }
  }
  const handleCategory = (e) => {
    if(props.command==="create"){
      setCategory(e.target.value)
      console.log('category : ',category)
    }
  }
  const handleText = (e) => {
    if(props.command==="create"){
      setText(e.target.value)
      console.log('text : ', text)
    }
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
      .then( data => {
        console.log(data)
        dispatch(getArticles())
        sendNotification()
        history.push('/')
      })
      .catch(error => {
        console.log(error.response)
      })
    }
  }

  const goback = () => {
    history.goBack()
  }

  
  return(
    <Container>
      <div style={{display:'flex', justifyContent:"center"}}>
        <Typography variant="h4" > Buat Artikel Baru </Typography>
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
          autoFocus/>
          <InputLabel id="kategori" >Kategori</InputLabel>
          <Select labelId="kategori" id="select" required name="kategori"
             placeholder="pilih kategori"
             onChange={(e) => handleCategory(e)}
             defaultValue="renungan" >
            <MenuItem value="renungan">Renungan Harian</MenuItem>
            <MenuItem value="pengumuman">Pengumuman</MenuItem>
          </Select>

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
           <Button variant="contained" color="primary" onClick={()=>submit()}>Publikasikan</Button>
           <Button variant="contained" color="secondary" onClick={ ()=>goback() } >Batal</Button>
          </div>
        </form>
    </Container>
  )

}

export default ArticleForm