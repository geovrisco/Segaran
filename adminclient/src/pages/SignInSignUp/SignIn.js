import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {url} from '../../config/variabels'
import {setUserData} from '../../store/actions/UsersAction'
import { useHistory } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
      geovrisco@GPdISegaran
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles();
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const login = (e) => {
    e.preventDefault()
    const data = {
      email:email,
      password:password
    }
    console.log(data)
    axios.post(`${url}/users/login`,data)
    .then(result => {
      console.log(result.data, 'ini dari axios login')
      localStorage.setItem('token',result.data.token.toString())
      localStorage.setItem('role', result.data.role.toString())
      dispatch(setUserData(result.data.token,result.data.role))
    })
    .catch(error => {
      console.log(error)
    })
  }

  const onChangeEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    e.preventDefault()
    console.log(e)
    setPassword(e.target.value)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e =>onChangeEmail(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => onChangePassword(e)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={e => login(e)}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link onClick={() => history.push('/signUp')} variant="body2" href="#">
                {"Belum punya akun? Buat akun sekarang!"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}