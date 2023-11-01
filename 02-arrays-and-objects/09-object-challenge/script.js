// Step 1

const library = [
  {
    title: "The road Ahead",
    author: "Boll Gates",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },

  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },

  {
    title: "Mockingjay",
    author: "Suzanne Collins",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// Step 2 setting read value for all of them to true

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
console.log(library);

// Step 3 Destructuring the title from the first book and renaming the variable to firstBook

const { title: firstBook } = library[0];
console.log(firstBook);

// Step 4 turning the library object into a JSON string

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
