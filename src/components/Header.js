import React, { useContext } from "react";
import { Logo } from "../utils/constant";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import UserContext from "../utils/UserContext";


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
    href:"/offer"

  },
  {
    src: "https://static.thenounproject.com/png/1009849-200.png",
    text: "Help",
    id: "3",
    href:"/support"
  },

  {
    src: "https://static-00.iconduck.com/assets.00/shopping-cart-icon-251x256-7876j5yc.png",
    text: "Cart",
    id: "5",
    href:"/cart"
  },
  {
    src: "https://cdn-icons-png.freepik.com/256/456/456283.png",
    text: "SignIn",
    id: "4",
    href:"/form"
  },
];
export const Content = ({ content }) => {
  return (
    <div className=" ">
    <Link to={content.href} className="flex items-center mr-2 justify-center flex-grow basis-0">
      
      <div className="w-[20%]  mr-1 md:mr-2 ">
        <img
          src={content.src}
          alt=""
          className="w-[100%] object-cover h-auto "
        ></img>
      </div>
      <div className=" text-[8px] md:text-sm text-gray-800 hover:text-orange-500">{content.text}</div>
      </Link>  
    </div>
  );
};

const Header = () => {
  const status = useStatus();
  // console.log("status",status)
const context = useContext(UserContext)
console.log("context",context)
// Replace "SignIn" with the context value
const updatedArrayOfContent = arrayOfContent.map((content) => {
  if (content.text === "SignIn") {
    return { ...content, text: context.userName || "SignIn" }; // Use context value or fallback to "SignIn"
  }
  return content;
});
 
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
      <div className="flex items-center">
         <p className={" text-white px-2 py-1 rounded-xl "+ (status?"bg-green-800":"bg-red-800")}>{status?"online":"offline"}
        </p>
      </div>
    
      <div className="flex items-center w-[50%] justify-evenly flex-grow basis-0 ">
        {updatedArrayOfContent.map((content) => {
          return <Content key={content.id} content={content} />;
        })}
      </div>
  
    </div>
  );
};

export default Header;
