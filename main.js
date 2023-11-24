// Repaso de OBJETOS y Arrays

// OBJETOS

const obj = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 20,
  direccion: {
    ciudad: 'Buenos Aires',
    zip: 123456,
    lat: 14.3232,
    lng: 34.9233321,
  },
};

// console.log(obj.direccion.ciudad);

// Objeto largo

// largerObject.isMarried

const largerObject = {
  name: 'John Doe',
  age: 30,
  isStudent: false,
  contact: {
    email: 'john.doe@example.com',
    phone: '555-1234',
  },
  address: {
    street: '789 Elm St',
    city: 'Sometown',
    country: 'USA',
  },
  hobbies: ['reading', 'traveling', 'coding'],
  scores: {
    math: 90,
    science: 85,
    english: 95,
  },
  friends: [
    {
      name: 'Alice',
      age: 28,
      isStudent: true,
      contact: {
        email: 'alice@example.com',
        phone: '555-5678',
      },
      address: {
        street: '456 Oak St',
        city: 'Othertown',
        country: 'USA',
      },
      favoriteBooks: [
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
      ],
    },
    {
      name: 'Bob',
      age: 32,
      isStudent: false,
      contact: {
        email: 'bob@example.com',
        phone: '555-8765',
      },
      address: {
        street: '321 Pine St',
        city: 'Anothertown',
        country: 'USA',
      },
      favoriteBooks: [
        { title: '1984', author: 'George Orwell' },
        { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
      ],
    }
  ],
  isMarried: false,
  spouse: {
    name: 'Jane Doe',
    age: 28,
    isStudent: true,
    contact: {
      email: 'jane.doe@example.com',
      phone: '555-4321',
    },
    address: {
      street: '101 Maple St',
      city: 'Familytown',
      country: 'USA',
    },
  },
};

largerObject.friends[1].favoriteBooks[0].author = 'Pepe';

// console.log(largerObject.spouse); // --> OBJ
// console.log(largerObject.friends); // --> ARRAY


// Congelar un objeto

const myObjectFreeze = {
  name: 'John Doe',
  age: 30,
  isStudent: false,
};

// Object.freeze(myObjectFreeze);

myObjectFreeze.age = 40;

// console.log(myObjectFreeze);

// Acceder a objectos a partir de una variable

const myObject = {
  name: 'John Doe',
  age: 30,
  isStudent: false,
  myKey: ':('
};

const myKey = 'name';

myObject.pepe = 'pepe';


// console.log(myObject['name'])
console.log(myObject[myKey])
// console.log(myObject.name)

const myNewObj = {
  [myKey]: 'John Doe'
}
myNewObj[myKey] = 'pepe'
console.log(myNewObj)