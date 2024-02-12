export const checkValidData = (email,number) =>{
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    
    const isNumberValid = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(number)

    if(!isNumberValid) return console.log("number is not valid");
    if(!isEmailValid) return console.log("email id is not valid");
    return null;
}