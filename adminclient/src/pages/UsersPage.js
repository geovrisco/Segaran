import React,{useEffect,useCallback} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import {getUsers} from '../store/actions/ArticlesAction'

import TableComponent from './HomePage/TableComponent'
function UsersPage (){
  const dispatch = useDispatch()
  const users = useSelector(state => state.ArticleReducer.users)
  const header = ['Id', 'Nama', 'Nama Lengkap', 'Tanggal Lahir','Alamat','No. Hp 1','No. Hp 2','Gender','Email','Hapus']
  const rowTitle= ['id','name','fullname','dob','address','phone1','phone2','gender','email','hapus']
  console.log(users)
  const functGetUsers = useCallback(() => {
    dispatch(getUsers())
  },[dispatch]) 
  const functDeleteItem = (id)=>{
    console.log(id,'ini dari users')
  }

  useEffect(() => {
    functGetUsers()
  },[functGetUsers])

  
  return(
    <div style={{display:'flex', flexDirection:'column', alignItems:"center" }}>
      <>
        <TableComponent
        row={users}
        label='Data Jemaat'
        header={header}
        rowTitle={rowTitle}
        width={1000}
        functDeleteItem={functDeleteItem}
        ></TableComponent>
      </>
    </div> 
  )
}

export default UsersPage