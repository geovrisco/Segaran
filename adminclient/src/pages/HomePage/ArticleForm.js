import React from 'react'
import {TextField, Container, Select, InputLabel, MenuItem} from '@material-ui/core'



function ArticleForm (props){

  return(
    <Container>
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="outlined-basic"
          label="Judul"
          name="judul"
          autoFocus/>
          <InputLabel id="kategori" >Kategori</InputLabel>
          <Select labelId="kategori" id="select" required name="kategori">
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
          label="Isi..."
          name="text"
          autoFocus/>

          <TextField
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
          autoFocus/>
        </form>
    </Container>
  )

}

export default ArticleForm