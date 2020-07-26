import React from 'react'

export const authContext = React.useMemo(() => ({
  signIn: () =>{
    console.log('signin')
  }
}))