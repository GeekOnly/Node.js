const name = 'Max';
let age = 29;
const hasHobbies = true;

name = 'Maximilian';
age = 30;

function sumnmarizeUser(userName, userAge, userHasHobbies) {
    return (
      'Name is ' +
      userName +
      ', age is ' +
      userAge +
      ' and the user has hobbies: ' +
      userHasHobbies
    );
}

console.log(sumnmarizeUser(name, age, hasHobbies));