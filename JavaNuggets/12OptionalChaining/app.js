//what if you want to get the offset of all the timezone object in the location object but you reach the second object which wont work 
const people = [
  {
    name: 'bob',
    location: { street: '123 main street', timezone: { offset: '+7:00' } },
  },

  { name: 'peter', location: { street: '123 Pine street' } },
  
  {
    name: 'susan',
    location: { street: '123 Apple street', timezone: { offset: '+9:00' } },
  },
]

people.forEach((person)=>{
  // console.log(person.name)
  // console.log(
  //   person.location && 
  //   person.location.timezone && 
  //   person.location.timezone.offset
  //   )
  
  //this line below has the same purpose 
  //Will add hello world if the looked for is undefined 
  console.log(person?.location?.timezone?.offset || 'hello world')
})
W
console.log(true && 'hello world')
console.log(false && 'hello people')
