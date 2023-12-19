import React from 'react'
import UserContext from '../context/UserContext';

const Home = () => {
  const {user,setUser}=React.useContext(UserContext);
  const {age,setAge}=React.useContext(UserContext);
  const [userName , setUserName] = React.useState('');
  const [userAge , setUserAge] = React.useState('');
  return (
  <> 
    { user ?
    <div className='flex flex-col items-center justify-center h-[80.79vh] font-bold bg-blue-300'>
    <div className='text-2xl;'>Hello <span className='text-3xl text-red-500'>{user}</span></div>
    <div className='text-2xl;'>Age  <span className='text-3xl text-red-500'>{age}</span></div>
    </div>
    :
    <div className='bg-gray-400 h-[81.5vh]'>
    <form action="" className='w-[60vw] py-20 mx-auto flex flex-col items-center gap-14 bg-slate-500'>
      <div>
      <label htmlFor="" className='text-xl text-white'>Enter Name : </label>
      <input 
      type="text"
      placeholder='Enter Your Name'
      className='bg-gray-200 rounded-md px-3'
      onChange={(e)=>setUserName(e.target.value)}/>
      </div>
      <div>
      <label htmlFor="" className='text-xl text-white'>Enter Age : </label>
      <input 
      type="text"
      placeholder='Enter Your Age'
      className='bg-gray-200 rounded-md px-3'
      onChange={(e)=>setUserAge(e.target.value)}/>
      </div>
      <button className='px-5 bg-green-500 text-white py-1 rounded-sm w-28' onClick={(e)=>{
        e.preventDefault();
        if(userName && userAge){
        setUser(userName);            
        setAge(userAge);
          }
          window.document.getElementById('error').innerHTML='Please Enter Name and Age'
      }
      }>Submit</button>
      <div id='error' className='text-red-500 font-bold'></div>
    </form>
    
    </div>
    }

  </>
  )
}

export default Home