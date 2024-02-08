import React from 'react'

const LoaderSkelton = () => {
  return (
    <div className='mt-5 grid grid-cols-2 md:grid-cols-4 gap-10 grid-flow-row-dense'>
        <div className='w-96 h-44 bg-gray-200 '></div>
        <div className='w-96 h-44 bg-gray-200 '></div>
        <div className='w-96 h-44 bg-gray-200 '></div>
        <div className='w-96 h-44 bg-gray-200 '></div>
        <div className='w-96 h-44 bg-gray-200 '></div>
        <div className='w-96 h-44 bg-gray-200 '></div>
        <div className='w-96 h-44 bg-gray-200 '></div>
        <div className='w-96 h-44 bg-gray-200 '></div>
        <div className='w-96 h-44 bg-gray-200 '></div>
        <div className='w-96 h-44 bg-gray-200'></div>
        <div className='w-96 h-44 bg-gray-200'></div>
        <div className='w-96 h-44 bg-gray-200'></div>
    </div>
  )
}

export default LoaderSkelton