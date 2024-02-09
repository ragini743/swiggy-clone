import React from 'react'

const SignIn = () => {
  return (
    <div>
        <div>
            <h1>Sign up</h1>
            <h1>or <span className='text-orange-500'>login to your account</span></h1>
            <div>
                <img src="" alt=''>

                </img>
            </div>
        </div>
        <div>
            <input type ="number" placeholder='name'></input>
            <input type ="text" placeholder='name'></input>
            <input type ="email" placeholder='name'></input>
        </div>
       <p className='text-blue-500'> have a referral code</p>
       <div className='bg-orange-500 text-white'>
       <button type='submit'></button>
       </div>
      
       <p>By creating an account, I accept the Terms & Conditions & Privacy Policy</p>
    </div>
  )
}

export default SignIn