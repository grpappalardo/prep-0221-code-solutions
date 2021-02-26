var person = {
  firstName: 'Tara',
  lastName: 'Maclay',
  hobby: 'art'
};
var fullName = person.firstName + ' ' + person.lastName;

console.log('Her name is ' + fullName);

person.job = 'tutor';
console.log('Her job is ' + person.job);

person.previousJob = 'guide';
console.log('Her last job was ' + person.previousJob);

console.log(person);

var myCar = {
  make: 'Subaru',
  model: 'Outback',
  year: '2007'
};

console.log(myCar);
myCar['owner'] = fullName;
console.log('The car owner: ' + myCar['owner'] + ' has a ' + myCar['make'] + ' ' + myCar['model'] + ' ' + myCar['year']);
console.log(myCar);
