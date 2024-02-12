export const checkValidData = (email,number) =>{
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    
    const isNumberValid = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(number)

    if(!isNumberValid) return "number is not valid";
    if(!isEmailValid) return "email id is not valid";
    return null;
}