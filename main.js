// 1.1

function customReplace(str, val, replaceVal) {
    let newStr = '';
    let valIndex = str.indexOf(val);
  
    while (valIndex !== -1) {
      newStr += str.slice(0, valIndex) + replaceVal;
      str = str.slice(valIndex + val.length);
      valIndex = str.indexOf(val);
    }
  
    return newStr + str;
  }

const originalStr = 'Hello, world!';
const updatedStr = customReplace(originalStr, 'world', 'Universe');
console.log(updatedStr); // Output: "Hello, Universe!"


// 1.2

function capitalizeWords(sentence) {
    const words = sentence.split(' ');
    const capitalizedWords = [];
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      capitalizedWords.push(capitalizedWord);
    }
  
    const capitalizedSentence = capitalizedWords.join(' ');
    return capitalizedSentence;
  }

  const sentence = "the quick brown fox jumps over the lazy dog";
const capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence); // Output: "The Quick Brown Fox Jumps Over The Lazy Dog"


// 1.3

function sortUsersByAge(users) {
    const sortedUsers = users.sort((user1, user2) => user1.age - user2.age);
    return sortedUsers;
  }

  const users = [
    { name: 'Lasha', age: 30 },
    { name: 'Saba', age: 20 },
    { name: 'John', age: 25 }
  ];
  
  const sortedUsers = sortUsersByAge(users);
  console.log(sortedUsers);
  // Output: [{ name: 'Saba', age: 20 }, { name: 'John', age: 25 }, { name: 'Lasha', age: 30 }]
  