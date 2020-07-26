import React from "react"
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import {Home as HomeIcon, AccountBoxSharp, Close} from "@material-ui/icons"
import {Link} from "react-router-dom"
import {useStyles} from '../styles'
import { useDispatch } from "react-redux"


function Navbar (){
  const dispatch = useDispatch()
  const classes = useStyles()

  const logout = () =>{
    dispatch({
      type: "REMOVE_USERDATA"
    })
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    // window.location.reload(false);
  }

  return (
    <Drawer 
      style={{width:'240px'}}
      variant="persistent"
      anchor="left"
      open={true}
      classes={{paper: classes.drawerPaper}}
    > 
    <List>
      <Link to ="/" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon/>
          </ListItemIcon>
          <ListItemText
            primary={"Home"}
          />
        </ListItem>
      </Link>
    </List>

    <List>
      <Link to ="/users" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <AccountBoxSharp/>
          </ListItemIcon>
          <ListItemText
            primary={"Data Jemaat"}
          />
        </ListItem>
      </Link>
    </List>

    <List>
      <ListItem button
      onClick={() => logout()}
      >
        <ListItemIcon>
          <Close></Close>
        </ListItemIcon>
        <ListItemText
          primary={"Logout"}
        />
        
      </ListItem>
    </List>

    </Drawer>

  )

}

export default Navbar