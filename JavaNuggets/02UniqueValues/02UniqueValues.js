//Unique Values 
const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'bacon',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'dinner',
  },
];

//Set has only unique 
//Bracket makes it array 
const categories = ["all",...new Set(menu.map((item) => item.category))];
console.log(categories)

const result = document.querySelector('.result');
result.innerHTML = categories.map((category) =>{
  return `<button>${category}</button>`;
})
.join(``)

