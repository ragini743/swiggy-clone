import React from 'react'
import { appStore_img, downloadingSwiggy, googleplay_img, swiggyIcon } from '../utils/logos'

const Footer = () => {
  return (
    <div>
        <footer className=''>
            <div className='bg-gray-100 flex px-[10%] flex-col sm:justify-evenly sm:flex-row sm:items-center py-10  '>
                <h1 className='font-bold text-lg mb-5 mr-10'>For better user experience download the swiggy app now</h1>
                <div className='flex justify-between w-full '>
                <div className='w-[40%]'>
                    <a href={downloadingSwiggy}>
                        <img src={googleplay_img} alt='downloading-icon'></img>
                    </a>
                </div>
                <div className='w-[40%]'>
                <a href={downloadingSwiggy}>
                        <img src={appStore_img} alt='downloading-icon'></img>
                    </a>
                </div>
                </div>
                
            </div>
            <div className='bg-black flex px-[5%] sm:px-[10%] text-white py-14'>
                <div className='w-[35%] sm:w-[30%]'>
                    <div className='w-[35%]'>
                        <img src={swiggyIcon}alt='swiggy-logo'></img>
                    </div>
                   &copy; 2023Bundl<br></br>
                    Technolies Pvt. Ltd
                </div>
                <div className=' grid grid-cols-2 sm:grid-cols-3 gap-5 w-[65%] sm:w-[w-70%] '>
                <div className=''>
                  <h1 className='font-bold text-sm sm:text-lg'> Company</h1> 
                    <ul className='text-xs sm:text-sm'>
                        <li>About </li>
                        <li>Careers</li>
                        <li>Team</li>
                        <li>Swiggy one</li>
                        <li>Swiggy instamart</li>
                    </ul>
                </div>
                <div className=''>
                    <h1 className='font-bold text-sm sm:text-lg'>contct us</h1>
                <ul className='text-xs sm:text-sm'>
                        <li>help & support</li>
                        <li>partener with us</li>
                        <li>Ride with us</li>
                       
                    </ul>
                </div>
                <div className=''>
                   <h1 className='font-bold text-sm sm:text-lg'> We deliver to :</h1>
                    <ul  className='text-xs sm:text-sm'>
                        <li>Banglore </li>
                        <li>Gurgaon</li>
                        <li>Hydrabad</li>
                        <li>Delhi</li>
                        <li>Pune</li>
                        <li>Mumbai</li>
                    </ul>
                </div>
                <div className=''>
                    <h1 className='font-bold text-sm sm:text-lg'>Legal</h1>
                    <ul  className='text-xs sm:text-sm'>
                        <li>Terms & conditions </li>
                        <li>Cookie & policy</li>
                        <li>privacy policy</li>
                       
                    </ul>
                </div>
                </div>
              

            </div>
        </footer>
    </div>
  )
}

export default Footer