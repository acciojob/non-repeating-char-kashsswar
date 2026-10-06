function firstNonRepeatedChar(str) {
	function firstNonRepeatedChar(str) {
  const count = {};

  // Count occurrences of each character
  for (const char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  // Find the first character that occurs only once
  for (const char of str) {
    if (count[char] === 1) {
      return char;
    }
  }

  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));

 // Write your code here
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
