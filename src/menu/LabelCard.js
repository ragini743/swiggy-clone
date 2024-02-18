import React from 'react'

const LabelCard = ({card}) => {
    // console.log("card",card)
  return (
    <div className='border-2 border-gray-400 mr-4 text-sm text-gray-600 py-2 pl-2'>
        <div className='font-bold flex items-center'>
            <div className='w-8'>
                <img src="/offer-logo.png" alt=''></img>
            </div>
            {card.info.header}
        </div>
        <div className='flex text-xs text-gray-400 w-[230px] '>
           <h1 className=''> {card.info.couponCode} | </h1>
           <h1 className=''> { card.info.description} </h1>
        </div>

    </div>
  )
}

export default LabelCard