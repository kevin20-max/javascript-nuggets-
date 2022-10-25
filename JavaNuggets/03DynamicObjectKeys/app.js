//dot notation
//object
const person = {
  name: 'john',
}
console.log(person.name);
person.age = 25;
console.log(person);

const items = {
  'featured-items': ['item1', 'item2']
}

console.log(items['featured-items']);
console.log(person['name'])


//variable
let appState = 'loading';
appState = 'error';
const keyName = 'computer';
const app = {
  [appState]:true
};
app[keyName] = 'apple'
console.log(app);

//dynamicly change 
const state = {
  loading:true,
  name:'',
  job:''
}

function updateState(key, value){
  state[key] = value //dynamically change value for name
}

updateState('name', 'john');
updateState('job', 'developer');
updateState('loading', false);

//can create a new key dynamically 
updateState('products', '[]');
//even though updated can still change 
updateState('name', 'peter');
console.log(state);