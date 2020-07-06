import React,{useState} from 'react'
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'
import {Delete } from '@material-ui/icons'
import {makeStyles} from '@material-ui/core'


function TableComponent (props){
  const [hover, setHover] = useState(false)
  
  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
    hoverTrue:{
      color:'red'
    }
  });

  const classes = useStyles()
  const hoverTrue = () =>{
    setHover(true)
  }
  const hoverFalse = () => {
    setHover(false)
  }


  return(
    <Paper>
      <TableContainer className={classes.container} > 
        <Table style={{width:props.width}} aria-label ={props.label}>
          <TableHead>
            <TableRow>
            {
              props.header.map(header => (
                  <TableCell>{header}</TableCell>
                  )
              )
            }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              props.row.map( (row, idx) => {
                let date = ''
                row.date ? date = new Date(row.date) : date = new Date(row.dob)
                return (
                  <TableRow key={row.id}>
                    {
                      props.rowTitle.map(column => {
                        if (`${column}` === 'date'  || `${column}` === 'dob' ){
                          return (
                            <TableCell>{date.toDateString()}</TableCell>
                          )
                        } else if (`${column}`==='hapus'){
                          return(
                            <TableCell>
                              <Delete
                              style={hover ? {cursor:'pointer',color:'blue'} : {color:'blue'} }
                              onMouseOver={() => hoverTrue()}
                              onMouseLeave ={() => hoverFalse()}
                              onClick={() => props.functDeleteItem(row.id)}
                              ></Delete>
                            </TableCell>
                          )
                        }
                        else {
                          return (
                            <TableCell>{row[`${column}`]}</TableCell>
                          )
                        }
                      })
                    }
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )

}

export default TableComponent