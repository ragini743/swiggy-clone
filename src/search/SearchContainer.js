import React from 'react'
import ScrollableFoodList from '../components/ScrollableFoodList'

const SearchContainer = () => {
  return (
    <div className="pt-36 w-[80%] md:w-[70%] lg:w-[50%] mx-auto">
        <div className='flex justify-between border-gray-300 border-[1px] px-4 py-2'>
            <input type='text' placeholder='search  for  restaurants and food ' className='w-[80%] outline-none'>

            </input>
            <div className='w-[5%]'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png'alt=''>

                </img>
            </div>
        </div>
        <div className='pt-8 pb-4 flex justify-between'>
            <p>Recent Searches </p>
            <p className='text-orange-700'> show more</p>
        </div>
        <div>
            
        </div>
        <div>
            <p className='font-bold '>
                Popular Cuisines
            </p>
            <div>
                {/* <ScrollableFoodList /> */}
            </div>
        </div>

    </div>
  )
}

export default SearchContainer