'use strict';
const obj = {
  foo:1,
  bar:2,
  fum:3,
  quux:4,
};

for (const property in obj) {
  console.log(`${property}: ${obj[property]}`);
}

let hobbit = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(hobbit.meals[3]);

const loaf = {
  flour: 300,
  water: 210,

  hydration: function() {
    return (this.water / this.flour) * 100;
  }
    
};

console.log(`${loaf.flour} ${loaf.water}`);
console.log(loaf.hydration());


function Person(str, title, boss) {
  this.name = str;
  this.jobTitle = title;
  this.boss = boss;
}

const bob = new Person('Bob','Trash Man', 'kate');
const dave = new Person('Dave','Actor', 'karen');
const donald = new Person('Donald', 'Chef','john');
const vic = new Person('Vic', 'da boss',);
const myArray = [bob, dave, donald, vic];

function display(arr, i) {

  if (arr[i].boss ===  undefined) {
    return`${arr[i].jobTitle} ${arr[i].name} doesn't reprt to anybody`;
  } else {return`${arr[i].jobTitle} ${arr[i].name} reports to ${arr[i].boss}`;}
    
}
console.log(display(myArray, 3));



const letterCheck = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
}
const getChar = input => {
  const firstLtr = input[0];
  return !letterCheck[firstLtr] ? " " : input[letterCheck[firstLtr] - 1];
}
const decode = input => input.split(" ").map(getChar).join('');

console.log(decode('craft block argon meter bells brown croon droop'))


const createCharacter = ({Name, Nickname, Race, Origin, Attack, Defense}) => ({
  Name,
  Nickname,
  Race,
  Origin,
  Attack,
  Defense,
  evaluateFight(character) {
    return `You take ${character.Attack - this.Defense} damage and your opponent takes ${this.Attack - character.Defense} damage`
  },
  describe() {
    return `${this.Name} is a ${this.Race} from ${this.Origin}`
  }
})

let gandalf = createCharacter({Name: 'Gandalf the White', Nickname: 'Gandalf' , Race:'Wizard', Origin: 'Middle Earth', Attack:10, Defense: 6})
let bilbo = createCharacter({Name: 'Bilbo Baggins', Nickname: 'bilbo', Race: 'Hobbit', Origin: 'The Shire', Attack: 2, Defense: 1})
function getBilbo(character) {
  return character.Name === 'Bilbo Baggins'}
let characters = [gandalf, bilbo]
console.log(gandalf.evaluateFight(bilbo))
console.log(characters[0])
console.log(gandalf.describe())
console.log(characters.find(getBilbo))