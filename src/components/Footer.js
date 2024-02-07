import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className=''>
            <div className='bg-gray-100 flex px-[10%] flex-col sm:justify-evenly sm:flex-row sm:items-center py-10  '>
                <h1 className='font-bold text-lg mb-5 mr-10'>For better user experience download the swiggy app now</h1>
                <div className='flex justify-between w-full '>
                <div className='w-[40%]'>
                    <a href='downloadingSwiggy'>
                        <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png'alt='downloading-icon'></img>
                    </a>
                </div>
                <div className='w-[40%]'>
                <a href='downloadingSwiggy'>
                        <img src='	https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png'alt='downloading-icon'></img>
                    </a>
                </div>
                </div>
                
            </div>
            <div className='bg-black flex flex-wrap px-[10%] text-white'>
                <div>
                    <div></div>
                    2023Bundl<br></br>
                    Technolies Pvt. Ltd
                </div>
                <div className=''>
                    Company
                    <ul>
                        <li>About </li>
                        <li>Careers</li>
                        <li>Team</li>
                        <li>Swiggy one</li>
                        <li>Swiggy instamart</li>
                    </ul>
                </div>
                <div>contct us
                <ul>
                        <li>help and support</li>
                        <li>partener with us</li>
                        <li>Ride with us</li>
                       
                    </ul>
                </div>
                <div>
                    We deliver to :
                    <ul>
                        <li>Banglore </li>
                        <li>Gurgaon</li>
                        <li>Hydrabad</li>
                        <li>Delhi</li>
                        <li>Pune</li>
                        <li>Mumbai</li>
                    </ul>
                </div>
                <div>
                    Legal
                    <ul>
                        <li>Terms and conditions </li>
                        <li>Cookie and policy</li>
                        <li>privacy policy</li>
                       
                    </ul>
                </div>

            </div>
        </footer>
    </div>
  )
}

export default Footer