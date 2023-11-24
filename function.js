// FUNCIONES

// Funciones sin parametros
// a + b + c === 180
// 30 + 60 + c === 180
// 30 + 60 - 180 = -c
// c === 180 - 30 - 60 --> 90
// c === 180 - a - b
function otherAngle(a, b) {
  return 180 - a - b;
}
// console.log(otherAngle(60, 60)) // --> 90

function helloWord(word = 'Hello Word') {
  return word;
}
// console.log(helloWord('Hello Pepe'));

const objFun = {
  name: 'Pepe',
  age: 22,
  fnAge: function () {
    const objFun = {
      age: 24,
    };
    return objFun.age;
  },
};

// console.log(objFun.name)
// console.log(objFun.fnAge())

let age = 27;

function sayPepe() {
  let age2 = 45;
  console.log('Function -->', age); // 27
  age = 42;
  console.log(age2); // 45
}
// console.log('No function -->', age); // 27
// sayPepe();
// console.log('No function -->', age); // 42
// console.log(age2); // Error

// ==
// ===
// console.log(2 == '2'); true
// console.log(2 === '2'); false

// && AND --> true && true --> true | true && false --> false | false && true --> false | false && false --> false
// || OR --> true || true --> true | true || false --> true | false || true --> true | false || false --> false

// !=
// !==

// console.log(2 != '2'); // false
// console.log(2 !== '2'); // true
// console.log(!true) // false
// console.log(!(2 + 2 === 4)) // false

// Todos los números diferentes a 0 son true por lo tanto 0 es false :D
// Todos los string son true menos ""
// undefined, null ---> false

// if (undefined) {
//   console.log('Entra en el if');
// } else {
//   console.log('Entra en el else');
// }

// %

// console.log(10 % 3); // 3

// && AND --> true && true --> true | true && false --> false | false && true --> false | false && false --> false
// || OR --> true || true --> true | true || false --> true | false || true --> true | false || false --> false

function say5(a, b, c) {
  if (a || (b && c)) {
    // true || false --> true && false --> false
    if (b) {
      console.log('Seguro???'); // aquí
    } else {
      console.log('a es true y b false');
    }
  } else {
    console.log('a es false');
  }
}

// say5('2' == 1+1, undefined, 0); //

const myObject = {
  name: 'John Doe',
  age: 16,
  isStudent: false,
  myKey: ':(',
};
const myObject2 = {
  name: 'Pepe',
  age: 30,
  isStudent: false,
  myKey: ':(',
};

function mayorEdad(obj) {
  return obj.age > 18;
}
// console.log(mayorEdad(myObject))

function makeNegative(num) {
  // Code?
  if (num < 0) return num;
  return -num;
}
// console.log(makeNegative(42)); // , -42
// console.log(makeNegative(-42)); // , -42

function test() {
  let suma = 2 + 4;
  if (suma === 6) {
    return 'hola';
  }
  suma = suma + 3;
  return suma;
}
/*
// Funciones con parametros

function say2(name) {
    console.log("Hola " + name);
}

say2("Pepe");

// Funciones con parametros por defecto

function say3(name = "Mundo") {
    console.log("Hola " + name);
}

say3();

// Funciones con retorno

function say4(name = "Mundo") {
    return "Hola " + name;
}

// console.log(say4());

// Funciones con retorno de objetos

function createPerson(name, age) {
    return { name, age };
}

let person = createPerson("Juan", "Perez");

// console.log(person);

*/
