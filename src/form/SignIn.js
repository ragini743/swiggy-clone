import React, { useContext, useRef, useState } from "react";
import { validateSignUp, validateLogin } from "./validate";
import UserContext from "../utils/UserContext";
import { useNavigate} from "react-router-dom";



const SignIn = ({children}) => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [error, setError] = useState(null);
  const [signInError, setSignInError] = useState(null);
  const [formSubmitted,setFormSubmitted] = useState(false)

  const {userName,setUserName} = useContext(UserContext)
  console.log("datat",userName)
  


const navigate =useNavigate()

function navigateTOHomePage (){
  navigate("/")
}

  const toggleButton = () => {
    setIsSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const number = useRef(null);
  const name = useRef(null);
  console.log("name",name)

  const handleValidation = () => {
    if (!isSignInForm) {
      if (number !== "") {
        const isValid = validateLogin(number.current.value);
       
        if (isValid) {
          alert("Thank you for Login!!!");
          setFormSubmitted(true)
        
          navigateTOHomePage()
          number.current.value = null;
          setError("");
        } else {
          setError("Invalid phone number. Please enter a 10-digit number.");
        }
      } else {
        setError("Phone number cannot be empty.");
      }
    } else if (isSignInForm) {
      if (
        number.current.value === "" ||
        name.current.value === "" ||
        email.current.value === ""
      ) {
       
        setSignInError("Please fill in all fields.");
        
      } else {
        const isValidSignUp = validateSignUp(
          number.current.value,
          name.current.value,
          email.current.value
        );
        console.log("validate", isValidSignUp);
        if (isValidSignUp.number&&isValidSignUp.name&&isValidSignUp.email) {
          console.log(name.current.value)
          setUserName(name.current.value)
          alert("Thank you !");
          navigateTOHomePage()
          number.current.value = null;
          name.current.value = null;
          email.current.value = null;
          setSignInError("");
          setFormSubmitted(true)
        } else {
          let errorMessage = "";
          if (!isValidSignUp.number) errorMessage += "Invalid number. ";
          if (!isValidSignUp.name) errorMessage += "Invalid name. ";
          if (!isValidSignUp.email) errorMessage += "Invalid email. ";
          setSignInError(errorMessage);
        }
      }
    }
  };
  


  

  return (
    <div className="w-[90%] sm:w-[80%] md:w-[50%] lg:w-[40%] mx-auto mt-10">
      <form
        className="flex flex-col justify-center p-4 "
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="text-lg cursor-pointer">
          <h1 className="text-[2rem] font-bold">
            {isSignInForm ? "Sign up" : "Login"}
          </h1>
          <h1 className="mt-2">
            or{" "}
            <span className="text-orange-500 " onClick={toggleButton}>
              {isSignInForm ? "or login to your account" : "create an account"}
            </span>
          </h1>
          <div>
            <img src="" alt=""></img>
          </div>
        </div>
        <div className=" flex flex-col mt-5 ">
          <div className="flex flex-col border-2 border-gray-400 pl-4 py-4">
            <label htmlFor="number">Phone number</label>
            <input
              ref={number}
              type="number"
              id="number"
              className="outline-none"
              min="0"
              max="0"
            ></input>
          
          </div>

          {isSignInForm ? (
            <div className="flex flex-col border-b-2 border-l-2 border-r-2 border-gray-400 pl-4 py-4">
              <label htmlFor="name">Name</label>
              <input
                ref={name}
                type="text"
                id="name"
              
                className="outline-none bg-white"
              ></input>
            </div>
          ) : null}

          {isSignInForm ? (
            <div className="flex flex-col border-b-2 border-l-2 border-r-2 border-gray-400 pl-4 py-4">
              <label htmlFor="email">Email</label>
              <input
                ref={email}
                type="email"
                id="email"
                className="outline-none bg-white"
              ></input>
            </div>
          ) : null}
        </div>
        <p className="text-blue-600 font-bold">
          {isSignInForm ? " Have a referral code ? " : null}
        </p>
        <p className="text-red-600 text-right font-bold">
          {isSignInForm ? signInError : error}
        </p>
        <div
          className=" text-white bg-orange-500 mt-5 text-center 
        cursor-pointer"
          onClick={handleValidation}
        >
          <button type="submit" className="pl-4 py-3 font-bold text-lg ">
            {isSignInForm ? "Continue" : "Login"}
          </button>
        </div>

        <p className="text-slate-600 mt-2 cursor-pointer">
          {isSignInForm ? "By creating an account" : "By clicking on Login"} , I
          accept the
          <span className="text-black">
            {" "}
            Terms & Conditions & Privacy Policy
          </span>
        </p>
      </form>
    </div>
  
  );
};

export default SignIn;
