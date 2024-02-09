import React from "react";
import { Logo } from "../utils/constant";
import { Link } from "react-router-dom";

const arrayOfContent = [
    {
        src:"https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-10.png",
        text:"Search" ,
        id:"1",
        href:"/search"
    },
  {
    src: "https://cdn.iconscout.com/icon/free/png-256/free-special-offer-1784827-1521773.png",
    text: "Offer",
    id: "2",
    href:"offer"

  },
  {
    src: "https://static.thenounproject.com/png/1009849-200.png",
    text: "Help",
    id: "3",
    href:"/help"
  },
  {
    src: "https://cdn-icons-png.freepik.com/256/456/456283.png",
    text: "SignIn",
    id: "4",
    href:"/form"
  },
  {
    src: "https://static-00.iconduck.com/assets.00/shopping-cart-icon-251x256-7876j5yc.png",
    text: "Cart",
    id: "5",
    href:"/cart"
  },
];
export const Content = ({ content }) => {
  return (
    <div className="flex items-center mr-2 justify-center flex-grow basis-0 ">
    
      
      <div className="w-[20%]  mr-1 md:mr-2 ">
        <img
          src={content.src}
          alt=""
          className="w-[100%] object-cover h-auto "
        ></img>
      </div>
      <div className=" text-[8px] md:text-sm text-gray-800 hover:text-orange-500">{content.text}</div>
      
    </div>
  );
};

const Header = () => {
  return (
    <div className=" flex justify-evenly w-[100%] shadow-lg bg-white z-30 fixed py-2 md:px-20 md:py-4">
      <div className="flex w-[45%] justify-between items-center">
        <div className="flex items-center">
          <div className="w-[15%] md:w-[20%]">
            <img src={Logo} alt=""></img>
          </div>
          <div className="text-[8px] md:text-sm">ALLAHABAD</div>
        </div>
      
      </div>

      <div className="flex items-center w-[50%] justify-evenly flex-grow basis-0 ">
        {arrayOfContent.map((content) => {
          return <Content key={content.id} content={content} />;
        })}
      </div>
    </div>
  );
};

export default Header;
