export const validateSignUp = (number, name, email) => {
    const numberRegex = /^[0-9]{10}$/; // Regex for a 10-digit number
    const nameRegex = /^[a-zA-Z\s]+$/; // Regex for alphabetic characters and spaces only
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for a basic email format
  
    return {
      number: numberRegex.test(number),
      name: nameRegex.test(name),
      email: emailRegex.test(email),
    };
  };


export const validateLogin = (number) => {
    const numberRegex = /^[0-9]{10}$/; // Regex for a 10-digit number
    const numberValid = numberRegex.test(number);
    return numberValid; // Return true if the number matches the regex, otherwise return false
};