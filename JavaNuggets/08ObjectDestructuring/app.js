// faster/easier way to access/unpack values from arrays

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

//for object destructuring we have curly braces 
//all properties must be in object or else it will be undefined if wanting to get 
//ordering doesnt matter with object as opposed to array 
const last = 'some value'
const {last:shakeAndBake, first,  city, zip, siblings:{sister:favoriteSibling}} = bob;
console.log(first, last, city, zip, shakeAndBake, favoriteSibling); 


// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// function printPerson(person){
function printPerson({first, last, city, siblings:{sister}}){
  // console.log(person.first);
  // const {first, last} = person;
  console.log(first, last, sister);
}

printPerson(bob)

