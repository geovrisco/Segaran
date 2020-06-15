import React from "react"
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import {Home as HomeIcon, AccountBoxSharp} from "@material-ui/icons"
import {Link} from "react-router-dom"
import {useStyles} from '../styles'

function Navbar (){
  const classes = useStyles()
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

    </Drawer>

  )

}

export default Navbar