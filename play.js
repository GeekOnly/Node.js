var name = 'Max';
var age = 29;
var hasHobbies = true;

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