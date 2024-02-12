import React, { useRef, useState } from 'react'
import { checkValidData } from './validate'

const SignIn = () => {
  const [isSignInForm,setIsSignInForm] = useState(false)
  const toggleButton =() =>{
   setIsSignInForm(!isSignInForm)
  }

const email = useRef(null) ;
const number = useRef(null);

const handleValidation = () =>{
  console.log("eml",email)
  if(email.current!==null){
    return(
     console.log("email",email.current.value), 
     console.log("asdfghj",number.current.value),
  checkValidData(email.current.value,email.current.value)
  )
    }else {
      checkValidData(number.current.value)
    }
  
  
}

  return (
    <div className='w-[90%] sm:w-[80%] md:w-[50%] lg:w-[40%] mx-auto mt-10'>
      
      <form className='flex flex-col justify-center p-4 ' onSubmit={(e)=>e.preventDefault()} >
         <div className='text-lg cursor-pointer'>
            <h1 className='text-[2rem] font-bold'>{isSignInForm?"Sign up":"Login"}</h1>
            <h1 className='mt-2'>or <span className='text-orange-500' onClick={toggleButton}>{isSignInForm?"or login to your account":"create an account"}</span></h1>
            <div>
                <img src="" alt=''>

                </img>
            </div>
        </div>
        <div className=' flex flex-col mt-5 '>
          <div className='flex flex-col border-2 border-gray-400 pl-4 py-4'>
            <label htmlFor="number">Phone number</label>
            <input ref={number} type ="number"id="number" className='outline-none'min="0" max="0"></input>
          </div>
          
          {isSignInForm?(<div className='flex flex-col border-b-2 border-l-2 border-r-2 border-gray-400 pl-4 py-4'>
            <label htmlFor="name">Name</label>
            <input type ="text" id="name" className='outline-none'></input>
          </div>):null}
          
        {isSignInForm?(<div className='flex flex-col border-b-2 border-l-2 border-r-2 border-gray-400 pl-4 py-4'>
            <label htmlFor="email">Email</label>
            <input ref={email} type ="email" id="email" className='outline-none'></input>
          </div>):null}
          
       
          
        </div>
        <p className='text-blue-600 font-bold'>{isSignInForm?" Have a referral code ? ":null}</p>
        <div className=' text-white bg-orange-500 mt-5 text-center 
        cursor-pointer' onClick={handleValidation}>
       <button type='submit'className='pl-4 py-4  '>{isSignInForm?"Continue":"Login"}</button>
        </div>
      
        <p className='text-slate-600 mt-2 cursor-pointer'>{isSignInForm?"By creating an account":"By clicking on Login"} , I accept the<span className='text-black'> Terms & Conditions & Privacy Policy
        </span>
        </p>
      </form>
       
    </div>
    
  )
}

export default SignIn;