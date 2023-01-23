
//Create a function to validate an email with regex and comment each line
// This function takes in a string as an argument and returns a boolean
function validateEmail(email: string): boolean {
  // Create a regular expression to match valid emails
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Test the provided string against the regex and return the result
  return emailRegex.test(email);
}
//Create a function to check the first non-Thai vowel and space characters with regex and comment each line.
// Declare a function called checkVowelSpace
function checkVowelSpace(word: string): boolean { 
    // Create a regular expression to check for non-Thai vowels and spaces
    let regex = /[^\u0E00-\u0E7F\s]/; 
    // Use the test() method to check for the first non-Thai vowel and space characters in a string 
    return regex.test(word); 
} 
// Call the function 
// checkVowelSpace(word);