import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CodeBlock from "../components/CodeBlock";

const JavaScriptContent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="content-container">
          <h1 className="page-title">JavaScript Fundamentals</h1>
          
          <div className="content-section">
            <h2 className="content-title">Introduction to JavaScript</h2>
            <p className="content-text">
              JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. 
              It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.
            </p>
            <p className="content-text">
              Originally created for making web pages interactive, JavaScript is now used for a wide variety of purposes 
              including server-side programming, mobile applications, games, and more.
            </p>
          </div>
          
          <div className="content-section">
            <h2 className="content-title">Variables and Data Types</h2>
            <p className="content-text">
              JavaScript has three ways to declare variables:
            </p>
            
            <div className="content-code-example">
              <CodeBlock code={`// Variable declaration
const constantValue = 'I cannot be reassigned';
let changeableValue = 'I can be reassigned';
var oldWayToDefine = 'Not recommended in modern JS';

// Data types
const string = 'I am a string';
const number = 42;
const boolean = true;
const array = [1, 2, 3, 'four'];
const object = { key: 'value', another: 123 };
const nullValue = null;
const undefinedValue = undefined;`} />
            </div>
            
            <p className="content-text">
              <strong>const</strong>: Use for values that should not be reassigned.<br />
              <strong>let</strong>: Use for values that might change.<br />
              <strong>var</strong>: Older way to declare variables, generally avoided in modern JavaScript.
            </p>
          </div>
          
          <div className="content-section">
            <h2 className="content-title">Functions</h2>
            <p className="content-text">
              Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a 
              set of statements that performs a task or calculates a value.
            </p>
            
            <div className="content-code-example">
              <CodeBlock code={`// Function declaration
function sayHello(name) {
  return \`Hello, \${name}!\`;
}

// Function expression
const greet = function(name) {
  return \`Welcome, \${name}!\`;
};

// Arrow function (ES6+)
const welcome = (name) => \`Hi there, \${name}!\`;

// Using the functions
console.log(sayHello('Alice')); // "Hello, Alice!"
console.log(greet('Bob')); // "Welcome, Bob!"
console.log(welcome('Charlie')); // "Hi there, Charlie!"`} />
            </div>
            
            <p className="content-text">
              Arrow functions are a more concise syntax introduced in ES6 and are commonly used in modern JavaScript.
            </p>
          </div>
          
          <div className="content-section">
            <h2 className="content-title">Control Flow</h2>
            <p className="content-text">
              Control flow refers to the order in which statements are executed in a program. JavaScript has several 
              structures that control the flow of a program.
            </p>
            
            <div className="content-code-example">
              <CodeBlock code={`// Conditional statements
const age = 20;

if (age >= 18) {
  console.log('You are an adult');
} else if (age >= 13) {
  console.log('You are a teenager');
} else {
  console.log('You are a child');
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log(\`Count: \${i}\`);
}

let count = 0;
while (count < 3) {
  console.log(\`While count: \${count}\`);
  count++;
}

// Switch statement
const fruit = 'apple';
switch (fruit) {
  case 'banana':
    console.log('Yellow fruit');
    break;
  case 'apple':
    console.log('Red or green fruit');
    break;
  default:
    console.log('Unknown fruit');
}`} />
            </div>
          </div>
          
          <div className="content-section">
            <h2 className="content-title">Object-Oriented Programming</h2>
            <p className="content-text">
              JavaScript is a prototype-based object-oriented language, which means it uses objects as the building blocks 
              of programs and inherits behavior through prototype objects.
            </p>
            
            <div className="content-code-example">
              <CodeBlock code={`// Creating objects
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  fullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  }
};

console.log(person.fullName()); // "John Doe"

// Constructor functions
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.fullName = function() {
    return \`\${this.firstName} \${this.lastName}\`;
  };
}

const jane = new Person('Jane', 'Smith', 25);
console.log(jane.fullName()); // "Jane Smith"

// ES6 Classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(\`\${this.name} makes a sound\`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(\`\${this.name} barks\`);
  }
}

const dog = new Dog('Rex');
dog.speak(); // "Rex barks"`} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JavaScriptContent;
