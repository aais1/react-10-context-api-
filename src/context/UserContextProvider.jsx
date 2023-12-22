import React from 'react'
import UserContext from './UserContext'

// eslint-disable-next-line react/prop-types
const UserContextProvider = ({children}) => {
    const [user,setUser]=React.useState("Guest");
    const [age,setAge]=React.useState(null);
  return (
    <UserContext.Provider value={{user,setUser,age,setAge}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider