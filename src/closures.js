// You have a car

// class car {
//   constructor(model, color) {
//     this.color = color;
//     this.model = model;
//   }
// }

// const newCar = new car("Model X", "red");

// console.log(newCar.color);
// console.log(newCar.model);

// const car = function(model, color) {
//   let modelName = model;
//   let colorName = color;

//   return {
//     get model() {
//       return modelName;
//     },
//     get color() {
//       return colorName;
//     }
//   };
// };

const Human = function({ firstName, lastName, age, gender }) {
  let _firstName = firstName;
  let _lastName = lastName;
  let _age = age;
  let _gender = gender;
  let _energy = 20;

  return {
    get energy() {
      return _energy;
    },

    set energy(newEnergy) {
      _energy += newEnergy;
    },

    get name() {
      return `${_firstName} ${_lastName}`;
    },

    talk(sentence) {
      if (_energy >= 5) {
        console.log(`${_firstName} says ${sentence}`);
        _energy -= 5;
      } else {
        console.log("Low Energy");
      }
    },

    walk(distance) {
      if (_energy >= distance * 10) {
        console.log("Walked - " + distance);
        _energy -= 10 * distance;
      } else {
        console.log("Low Energy");
      }
    }
  };
};

const amit = Human({
  firstName: "Amit",
  lastName: "Lastname",
  age: 21,
  gender: "male"
});

const dani = Human({
  firstName: "Dani",
  lastName: "Akash",
  age: 25,
  gender: "male"
});

console.log(dani.name);
console.log(amit.name);
dani.talk("How are you doing)?");
console.log(dani.energy);
dani.walk(1);
console.log(dani.energy);
dani.energy = 10;
console.log(dani.energy);
dani.talk("How are you doing)?");
dani.talk("How are you doing)?");
