import React, { useEffect, useState } from 'react'
import PartenerBoarding from './PartenerBoarding'
import { Link } from 'react-router-dom'

const HelpSUpport = () => {
  const [listTitle,setListTitle] = useState([])
  const titleFetchData = async() =>{
    const data = await fetch("https://www.swiggy.com/dapi/support?")
  }
  useEffect(()=>{
    titleFetchData()
  },[])
  return (
    <div className='pt-16 md:pt-28 bg-blue-500 text-white px-10 h-[100vh]'>
        <div className='mb-2'>
          <div>
            <h1 className='font-bold text-2xl'>Help & Support</h1>
            <p>Let's take a step ahead and help you better.</p>

          </div>
        </div>

        <div className='bg-white mt-8 '>
          <aside className='bg-sky-100 text-gray-600 px-10 pt-5 pb-10 '>
            {/* <h1 className='hover:bg-white hover:text-yellow-600'><Link to="issue/partener-onboarding">
              Partener Boarding</Link></h1>
            <h1 className='hover:bg-white hover:text-yellow-600'>Legal</h1>
            <h1 className='hover:bg-white hover:text-yellow-600'>FAQs</h1> */}

          </aside>
        </div>
    </div>
  )
}

export default HelpSUpport