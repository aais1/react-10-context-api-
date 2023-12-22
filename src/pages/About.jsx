import React from 'react'
import UserContext from '../context/UserContext';
const About = () => {
    const {user,age} =React.useContext(UserContext);

  return (
    <div className='flex flex-col gap-8 py-24 mx-auto w-[80vw]'>
         
       <p> {`${user}`} </p>    
       <p> {   age ?  `${age}` : ``   }</p>
                                                  
        
        </div>
  )
}

export default About