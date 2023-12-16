import React from 'react'
import UserContext from '../context/UserContext';

const Hello = () => {
  const {user,setUser}=React.useContext(UserContext);
  const [userName , setUserName] = React.useState('');
  return (
  <> 
    { user ?
    <div className='flex items-center justify-center h-[80.79vh] font-bold bg-blue-300'>Hello {user}</div>
    :
    <form action="" className='w-[60vw] py-20 mx-auto flex justify-center gap-14'>
      <label htmlFor="" className='bg-gray-200 px-2'>Enter Name</label>
      <input 
      type="text"
      placeholder='Enter Your Name'
      className='bg-gray-200 rounded-md px-3'
      onChange={(e)=>setUserName(e.target.value)}/>
      <button className='border-2 border-green-500 bg-green-500 rounded-md text-white px-1' onClick={(e)=>{
        e.preventDefault();
        setUser(userName)
      }}>Login</button>
    </form>
    }

  </>
  )
}

export default Hello