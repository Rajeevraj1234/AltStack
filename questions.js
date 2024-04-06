const questions = [
  {
    question: "What is the primary purpose of Node.js?",
    options: [
      "Frontend development",
      "Backend development",
      "Mobile app development",
      "Data analysis",
    ],
    answer: "Backend development",
  },
  {
    question: "Which of the following is not a core module in Node.js?",
    options: ["fs", "http", "express", "path"],
    answer: "express",
  },
  {
    question: "What does the event loop in Node.js handle?",
    options: [
      "User interface events",
      "File I/O operations",
      "Asynchronous operations",
      "Synchronous operations",
    ],
    answer: "Asynchronous operations",
  },
  {
    question: "Which method is used to include external modules in Node.js?",
    options: ["require()", "import()", "include()", "use()"],
    answer: "require()",
  },
  {
    question:
      "Which of the following is used to execute a piece of code after a specified delay in Node.js?",
    options: [
      "setInterval()",
      "setTimeout()",
      "setImmediate()",
      "clearInterval()",
    ],
    answer: "setTimeout()",
  },
  {
    question: "What is the primary purpose of the 'util' module in Node.js?",
    options: [
      "File system operations",
      "Utilities for working with file paths",
      "Providing utility functions for common tasks",
      "Creating HTTP servers",
    ],
    answer: "Providing utility functions for common tasks",
  },
  {
    question:
      "Which of the following best describes a callback function in Node.js?",
    options: [
      "A function that is executed immediately",
      "A function that is passed as an argument to another function and is executed later",
      "A function that is executed only once",
      "A function that returns a value synchronously",
    ],
    answer:
      "A function that is passed as an argument to another function and is executed later",
  },
  {
    question: "What is the purpose of the 'fs' module in Node.js?",
    options: [
      "Handling HTTP requests and responses",
      "Performing file system operations",
      "Creating and managing child processes",
      "Working with URLs and URL parameters",
    ],
    answer: "Performing file system operations",
  },
  {
    question: "Which of the following is true about streams in Node.js?",
    options: [
      "Streams are used for synchronous data processing",
      "Streams are a type of data structure in Node.js",
      "Streams allow reading or writing data piece by piece, making them memory-efficient",
      "Streams can only be used with files and not with network sockets",
    ],
    answer:
      "Streams allow reading or writing data piece by piece, making them memory-efficient",
  },
  {
    question: "What is the purpose of the 'events' module in Node.js?",
    options: [
      "Managing events and event-driven architecture",
      "Handling HTTP requests and responses",
      "Parsing JSON data",
      "Generating random numbers",
    ],
    answer: "Managing events and event-driven architecture",
  },
];

module.exports = questions;
