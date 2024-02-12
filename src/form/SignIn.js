import React, { useState } from 'react'

const SignIn = () => {
  const [isSignInForm,setIsSignInForm] = useState(false)
  const toggleButton =() =>{
   setIsSignInForm(!isSignInForm)
  }

  return (
    <div className='w-[90%] max-w-[40%] mx-auto mt-10'>
      <div className='flex flex-col justify-center p-4 '>
         <div className='text-lg'>
            <h1 className='text-[2rem] font-bold'>{isSignInForm?"Sign up":"Login"}</h1>
            <h1>or <span className='text-orange-500' onClick={toggleButton}>{isSignInForm?"or login to your account":"create an account"}</span></h1>
            <div>
                <img src="" alt=''>

                </img>
            </div>
        </div>
        <div className=' flex flex-col mt-5 '>
          {isSignInForm?null:(<div className='flex flex-col border-2 border-gray-400 pl-4 py-4'>
            <label for="number">Phone number</label>
            <input type ="number"id="number" className='outline-none'min="0" max="0"></input>
          </div>)}
          
          {isSignInForm?(<div className='flex flex-col border-b-2 border-gray-400'>
            <label for="name">Name</label>
            <input type ="text" id="name" className='outline-none'></input>
          </div>):null}
          
        {isSignInForm?(<div className='flex flex-col'>
            <label for="email">Email</label>
            <input type ="email" id="email" className='outline-none'></input>
          </div>):null}
          
       
          
        </div>
        <p className='text-blue-500'> have a referral code</p>
        <div className=' text-white'>
       <button type='submit'>continue</button>
        </div>
      
        <p className='text-slate-400'>By creating an account, I accept the<span> Terms & Conditions & Privacy Policy
        </span>
        </p>
      </div>
       
    </div>
    
  )
}

export default SignIn;