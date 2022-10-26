// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance, returns first match, if no match - undefined

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'intern' },
];

const fruits = ['orange', 'pear', 'lemon'];

//FILTER
//find people less equal to 25
const youngPeople = people.filter((person)=>{
  // if(person.age < 30){
  //   return person;
  // }                      simplified to 
  return person.age < 30
});
console.log(youngPeople)

//just develoeprs 
const developers = people.filter((person)=>person.position === 'developer');
console.log(developers);



//no match in filter will be empty
const seniorDevs = people.filter((item) => item.position === 'senior dev');
console.log(seniorDevs); 



//FIND
//This example of returning an object
const peter = people.find((person) => person.name === 'peter');
console.log(peter) 

//This example of returning a string 
const fruit = fruits.find((fruit)=>fruit === 'lemon')
console.log(fruit)


//no match in find will give undefined 
const oldPerson = people.find((person) => person.age > 35)
console.log(oldPerson);

//muliple matches - first match
const randomPerson = people.find((person) => person.age < 35)
console.log(randomPerson);

//log position
console.log(peter.position) //for find you can just access the parts 

const anna = people.filter((person)=>person.name === 'anna'); // for filter its more complicated 
console.log(anna[0].position)
