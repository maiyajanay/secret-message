let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// Check the length of the original array
console.log(secretMessage.length);
// Use an array method to remove the last string of the array secretMessage.
const removedLastElement = secretMessage.pop()

// Check that the array was modified and length is now one less than the original array length
console.log(secretMessage.length);

// Use an array method to add the words to and Program as separate strings to the end of the secretMessage array.
secretMessage.push('to', 'Program');
let easilyIndex = secretMessage.indexOf('easily');
secretMessage[easilyIndex] = 'right';

// Use an array method to remove the first string of the array.
const removedFirstElement = secretMessage.shift();
console.log('The element removed using shift(): ' + removedFirstElement);

// Use an array method to remove the first string of the array.
const addedFirstElement = secretMessage.unshift('Programming');

// Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,.
secretMessage.splice(6, 5, 'know,')

// const secretMessageString = secretMessage.join(' ');
// console.log(secretMessageString);

// On one line, use console.log() and .join() to print the secret message as a sentence.
console.log(secretMessage.join(' '));

