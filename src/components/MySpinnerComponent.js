import LoaderSkelton from "./LoaderSkelton";


const MySpinnerComponent = () =>  {
  return (
    <div className='pt-0 md:pt-0  overflow-hidden box-border'>
      <div className=' flex justify-center items-center w-full  py-24 bg-gray-900'>
      <div className='w-36  m-auto my-auto flex justify-center items-center  bg-center bg-no-repeat object-cover h-full relative '>
            <img src="https://png.pngitem.com/pimgs/s/197-1979719_jjsh-and-beverage-svg-icon-food-and-beverage.png"alt="" className="w-32 h-32 rounded-full"></img>
            <div className='border-t-[6px] border-t-gray-500 border-r-[7px] border-r-gray-400 border-b-gray-200 border-b-[8px] border-l-[8px] border-l-gray-200  w-32 h-32  rounded-full absolute animate-spin'>
           </div>
       
           
        </div>

      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 grid-flow-row-dense w-[80%]  max-w-70% mx-auto mt-6">
     
      <LoaderSkelton />
 
        
        <LoaderSkelton />
        <LoaderSkelton />
        <LoaderSkelton />
        <LoaderSkelton />
        <LoaderSkelton />
        <LoaderSkelton />
        <LoaderSkelton />
        <LoaderSkelton />
        <LoaderSkelton />
        <LoaderSkelton />
        <LoaderSkelton />
        <LoaderSkelton />
        <LoaderSkelton />
        <LoaderSkelton />
      </div>

    </div>
  )
  }


export default MySpinnerComponent;