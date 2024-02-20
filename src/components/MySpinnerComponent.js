

const MySpinnerComponent = () =>  {
  return (
    <div className='pt-16 md:pt-16 bg-gray-900  overflow-hidden'>
      <div className=' flex justify-center items-center w-full h-full py-16'>
      <div className='w-36  m-auto my-auto flex justify-center items-center  bg-center bg-no-repeat object-cover h-full relative '>
            <img src="https://png.pngitem.com/pimgs/s/197-1979719_jjsh-and-beverage-svg-icon-food-and-beverage.png"alt="" className="w-32 h-32 rounded-full"></img>
            <div className='border-t-[6px] border-t-gray-600 border-r-[7px] border-r-gray-500 border-b-gray-400 border-b-[8px] border-l-[9px] border-l-gray-200  w-32 h-32  rounded-full absolute animate-spin'>
           </div>
       
           
        </div>

      </div>

    </div>
  )
  }


export default MySpinnerComponent;