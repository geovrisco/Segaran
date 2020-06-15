import {makeStyles} from "@material-ui/core"

export const useStyles = makeStyles ((theme) => ({
  drawerPaper: {
    width:"inherit"
  },
  link:{
    textDecoration:"none",
    color: theme.palette.text.primary 
  },
  columnContainer:{
    display:'flex',
    flexDirection:'column',
    alignItems:"center",
    width:100
  }
}))

