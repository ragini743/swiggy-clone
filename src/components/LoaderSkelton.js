import React from 'react'

const LoaderSkelton = () => {
  const style = {
    backgroundImage : "url('https://cdn-icons-png.flaticon.com/512/2771/2771401.png') center no-repeat",
  }
  
  return (
    <div className='pt-16 md:pt-20 bg-gray-900  overflow-hidden'>
      <div className=' flex justify-center items-center w-full h-full py-36'>
      <div className='w-36 bg-white m-auto my-auto flex justify-center items-center bg-[url("https://cdn-icons-png.flaticon.com/512/2771/2771401.png")] bg-center bg-no-repeat object-cover h-full '>
            
            <div className='border-t-[6px] border-t-gray-700 border-r-[7px] border-r-gray-500 border-b-gray-400 border-b-[8px] border-l-[9px] border-l-gray-200  w-32 h-32  rounded-full'>
           </div>
       
           
        </div>

      </div>

    </div>
  )
}

export default LoaderSkelton