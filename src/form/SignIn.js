import React from 'react'

const SignIn = () => {
  return (
    <div className='w-[90%] md:w-[50%] mx-auto mt-10'>
      <div className='flex flex-col justify-center p-4 '>
         <div className='text-lg'>
            <h1 className='text-[2rem] font-bold'>Sign up</h1>
            <h1>or <span className='text-orange-500'>login to your account</span></h1>
            <div>
                <img src="" alt=''>

                </img>
            </div>
        </div>
        <div className='border-2 border-gray-400 flex flex-col '>
          <div className='flex flex-col border-b-2 border-gray-400'>
            <label for="number">Phone number</label>
            <input type ="number"  className='outline-none'></input>
          </div>
          
          <div className='flex flex-col border-b-2 border-gray-400'>
            <label for="name">Name</label>
            <input type ="text" className='outline-none'></input>
          </div>
        
          <div className='flex flex-col'>
            <label for="email">Email</label>
            <input type ="email"  className='outline-none'></input>
          </div>
       
          
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