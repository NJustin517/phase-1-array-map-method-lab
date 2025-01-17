const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((title) => {
    let array = title.split(' ');
    return array.map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
  });
}

// const titleCased = () => {return tutorials.map(function (tutorials, array) {
//   console.log(tutorials);
//   return tutorials.charAt(0).toUpperCase() + tutorials.slice(1);
//   });
// }

// let words = () => tutorials.map(function (tutorials, array) {
//   console.log(tutorials);
//   return tutorials.charAt(0).toUpperCase() + tutorials.slice(1);
// });

// let titleCased = () => tutorials.map (function (tutorials, array) {
//   console.log(tutorials); 
//   tutorials.split(' ');
// });
