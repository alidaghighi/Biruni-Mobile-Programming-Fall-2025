# Mobile Programming

# **JavaScript & ES6 Essentials**

---

## **1. Introduction to JavaScript**

JavaScript, commonly abbreviated as **JS**, is the most widely used programming language in the world. Originally designed in 1995 by Brendan Eich in just 10 days, it was intended as a lightweight scripting language to make web pages interactive. Back then, it was often dismissed as a “toy language.”

Today, that perception has changed dramatically. JavaScript has grown into a **full-featured, general-purpose language** that powers the modern web and beyond.

### 1.1 Where is JavaScript Used?

* **Web Browsers**: Every major browser (Chrome, Firefox, Safari, Edge) has a built-in JavaScript engine (V8 in Chrome, SpiderMonkey in Firefox, etc.). JS is what makes websites interactive - handling form validation, animations, dynamic content updates, and user interface behavior.  

* **Servers**: With Node.js (released in 2009), JavaScript can also run on servers, powering backends for major companies like Netflix, LinkedIn, and PayPal. This allows developers to use the same language for both frontend and backend development, creating a unified development experience.  

* **Desktop Apps**: Frameworks like Electron allow developers to build cross-platform desktop apps using web technologies (HTML, CSS, JS). Popular apps like Visual Studio Code, Discord, and Slack are built with Electron.  

* **Mobile Apps**: Frameworks like **React Native** let you build iOS and Android apps using JavaScript. This is particularly important for our course - React Native allows you to write mobile apps using familiar web technologies while still accessing native device features like camera, GPS, and push notifications.  

**Why This Matters for Mobile Development:** React Native uses a JavaScript runtime to communicate with native iOS and Android components. Understanding JavaScript deeply will help you build better mobile apps, debug issues effectively, and leverage the full power of the React Native ecosystem.  

---


**ECMAScript vs JavaScript:**  
- **ECMAScript** is the standard/specification  
- **JavaScript** is the implementation of that standard  
- ES6, ES2017, ES2018, etc. are version numbers of the ECMAScript standard  


### Why ES6 Matters

For many years, JavaScript grew slowly, and developers often struggled with its quirks. In 2015, the language underwent a major upgrade with **ECMAScript 2015 (ES6)**. This update introduced features like:

* `let` and `const` for block-scoped variables.  
* Arrow functions for cleaner syntax.  
* Template literals for easier string handling.  
* Destructuring, spread/rest operators, and modules.  

When learning JavaScript today, it’s essential to focus on **modern ES6+ syntax**, since that’s what React and React Native use.



**Why ES6+ is Critical for React Native:**  
1. **Modern Syntax**: React Native projects use Babel to transpile ES6+ code, so you can use all modern features  
2. **Better Code Organization**: Modules and classes help structure larger mobile applications  
3. **Improved Developer Experience**: Features like destructuring and arrow functions make code more readable and maintainable  
4. **Industry Standard**: All modern JavaScript frameworks and libraries expect ES6+ knowledge  

**Legacy vs Modern:**
```js
// Old ES5 way
var self = this;
setTimeout(function() {
  console.log(self.name);
}, 1000);

// Modern ES6+ way
setTimeout(() => {
  console.log(this.name);
}, 1000);
```

When learning JavaScript today, it's essential to focus on **modern ES6+ syntax**, since that's what React and React Native use exclusively.aScript, commonly abbreviated as **JS**, is the most widely used programming language in the world. Originally designed in 1995 by Brendan Eich in just 10 days, it was intended as a lightweight scripting language to make web pages interactive. Back then, it was often dismissed as a "toy language."

Today, that perception has changed dramatically. JavaScript has grown into a **full-featured, general-purpose language** that powers the modern web and beyond.

**What makes JavaScript special?**  
- **Interpreted Language**: No compilation step needed - code runs directly in the browser or Node.js runtime  
- **Dynamic Typing**: Variables can hold different types of data without explicit type declarations  
- **Event-Driven**: Perfect for handling user interactions like clicks, form submissions, and touch events  
- **First-Class Functions**: Functions can be assigned to variables, passed as arguments, and returned from other functions  
- **Prototype-Based**: Object-oriented programming through prototypes rather than traditional classes (though ES6 added class syntax)  

**JavaScript vs Other Languages:**
Unlike languages like Java or C++, JavaScript is **weakly typed** and **flexible**. This makes it easy to learn but also prone to runtime errors if not handled carefully. For mobile development with React Native, this flexibility allows rapid prototyping and development.ramming


---



## **2. Variables and Data Types**

### 2.1 Declaring Variables

Variables are like labeled boxes in memory that hold values. In JavaScript, we declare variables using `var`, `let`, or `const`.

* **`var`**: the old way (function-scoped). Has quirks due to **hoisting** and is discouraged.  
* **`let`**: block-scoped, can be reassigned.  
* **`const`**: block-scoped, cannot be reassigned (though objects/arrays declared with `const` can still be modified).  

```js
var oldWay = "Avoid this";  // function-scoped
let age = 20;               // block-scoped
const pi = 3.14159;         // constant, cannot be reassigned

age = 21; //  allowed
// pi = 3.14;  Error: Assignment to constant variable
```

**Best practice**: Use `const` by default. Use `let` only if you know the variable’s value will change. Avoid `var`.

---

### 2.2 Primitive Data Types

JavaScript has **7 primitive data types**:

1. **String** → `"hello"`, `'world'`, `` `template` ``  
2. **Number** → both integers and floats (`42`, `3.14`)  
3. **Boolean** → `true`, `false`  
4. **Null** → intentional absence of value  
5. **Undefined** → declared but not assigned  
6. **Symbol** (ES6) → unique and immutable, often used as object keys  
7. **BigInt** (ES2020) → very large integers beyond `Number.MAX_SAFE_INTEGER`  

```js
let text = "Hello";     // string
let score = 100;        // number
let isActive = true;    // boolean
let emptyValue = null;  // null
let notAssigned;        // undefined
let uniqueId = Symbol("id"); // symbol
let bigNum = 9007199254740991n; // BigInt
```

**Detailed Explanation:**

**1. String:**

There are three ways to create strings in JavaScript:
using single quotes, double quotes, or backticks (template literals).

```js
let singleQuote = 'Hello';
let doubleQuote = "World";
let template = `Hello ${name}`; // Template literal (ES6)
let multiline = `Line 1
Line 2
Line 3`; // Multi-line strings with template literals
```

**2. Number:**

JavaScript has a single `Number` type for both integers and floating-point numbers. It also supports special numeric values like `Infinity` and `NaN` (Not a Number).

```js
let integer = 42;
let float = 3.14159;
let scientific = 2.5e6;    // 2.5 * 10^6 = 2500000
let infinity = Infinity;
let notANumber = NaN;      // "Not a Number"

console.log(typeof NaN);   // "number" (surprisingly!)
```

**3. Boolean:**
```js
let isLoggedIn = true;
let hasPermission = false;

// Often used with conditionals
if (isLoggedIn && hasPermission) {
  // User can access the feature
}
```

**4. Null vs Undefined:**

In JavaScript, `null` is an assignment value that represents "no value" or "empty". `undefined` means a variable has been declared but not assigned a value. SO `null` is Intentional absence of value, while `undefined` is unintentional absence of value.

```js
let explicitlyEmpty = null;      // Intentionally set to "no value"
let declaredButNotSet;           // undefined (automatically assigned)

console.log(typeof null);        // "object" (known JavaScript quirk)
console.log(typeof undefined);   // "undefined"
```

**5. BigInt (for very large numbers):**

In JS if you need to work with integers larger than `Number.MAX_SAFE_INTEGER` (2^53 - 1), you should use `BigInt`. 
In JS we create BigInt by appending `n` to the end of an integer or by calling the `BigInt()` constructor.
`BigInt` cannot be mixed with regular `Number` types in operations.

```js
let regularNumber = 9007199254740991;      // Maximum safe integer
let bigNumber = 9007199254740991n;         // BigInt
let anotherBig = BigInt("123456789012345678901234567890");

// Cannot mix BigInt with regular numbers
// console.log(bigNumber + 1);  Error
console.log(bigNumber + 1n); //  Works
```

**Checking Types:**
```js
console.log(typeof "hello");         // "string"
console.log(typeof 42);              // "number"  
console.log(typeof true);            // "boolean"
console.log(typeof undefined);       // "undefined"
console.log(typeof null);            // "object" (quirk!)
console.log(typeof 123n);            // "bigint"
console.log(typeof {});              // "object"
console.log(typeof []);              // "object" (arrays are objects)
console.log(typeof function(){});    // "function"
console.log(typeof NaN);             // "number"
console.log(typeof typeof "hello");  // "string" (quirk!)
```

---

### 2.3 Objects

Everything in JavaScript that is not a primitive is an **object**. Objects are collections of key-value pairs (properties and methods).
Objects are like dictionaries in Python or maps in Java. To access properties, we can use **dot notation** or **bracket notation**.

```js
let user = {
  name: "Ali",
  age: 22,
  isStudent: true
};

console.log(user.name);   // Ali (dot notation)
console.log(user["age"]); // 22 (bracket notation)
```

**Object Creation Methods:**

For creating objects, there are several common patterns: Object literals, constructor functions, and `Object.create()`.

**1. Object Literal (most common):**

Just like defining a dictionary in Python, we can define an object using curly braces `{}`.

```js
let phone = {
  brand: "Samsung",
  model: "Galaxy S24",
  year: 2024,
  specs: {
    ram: "8GB",
    storage: "256GB"
  }
};
```

**2. Constructor Function:**

In JavaScript, a constructor function is a special kind of function used to create and initialize objects. It’s like a blueprint for making multiple similar objects without rewriting code. They are defined with a capitalized name and are called with the `new` keyword.

When you call a constructor function with `new`, it:

- Creates a new empty object.  
- Sets this inside the function to point to that object.  
- Links the new object’s prototype to the constructor’s prototype property.  
- Returns the new object automatically (unless you explicitly return another object).  

In modern JavaScript, `class` syntax is often preferred since it’s cleaner, but under the hood, it still uses constructor functions and prototypes

```js
function Phone(brand, model) {
  this.brand = brand;
  this.model = model;
  this.makeCall = function(number) {
    return `Calling ${number}...`;
  };
}

let myPhone = new Phone("iPhone", "15");
```

**3. Object.create():**

`Object.create()` creates a new object with the specified prototype object and properties. This is useful for setting up inheritance.

```js
let phonePrototype = {
  makeCall: function(number) {
    return `${this.brand} calling ${number}`;
  }
};

let newPhone = Object.create(phonePrototype);
newPhone.brand = "Google Pixel";
```

**Property Access:**

To access properties, we can use **dot notation** or **bracket notation**.

```js
let user = { name: "Ali", "favorite-color": "blue" };

// Dot notation (preferred when possible)
console.log(user.name);

// Bracket notation (required for special characters or dynamic keys)
console.log(user["favorite-color"]);

let key = "name";
console.log(user[key]); // Dynamic property access
```

**Adding/Modifying/Deleting Properties:**

To add a new property, simply assign a value to a new key. To modify, assign a new value to an existing key. To delete, use the `delete` operator.

```js
let car = { brand: "Toyota" };

// Adding properties
car.model = "Camry";
car["year"] = 2024;

// Modifying properties
car.brand = "Honda";

// Deleting properties
delete car.year;

console.log(car); // { brand: "Honda", model: "Camry" }
```

**Methods (Functions as Properties):**
```js
let calculator = {
  result: 0,
  add: function(number) {
    this.result += number;
    return this;
  },
  multiply: function(number) {
    this.result *= number;
    return this;
  },
  getValue: function() {
    return this.result;
  }
};

// Method chaining
calculator.add(5).multiply(3).getValue(); // 15
```

**Objects in React Native:**
In React Native, you'll work with objects constantly - component props, state objects, API responses, navigation parameters, etc.

---

### 2.4 Type Coercion

JavaScript automatically converts types in some cases (**coercion**), which can cause confusion but is also sometimes useful.

```js
console.log("5" + 1);   // "51" (string concatenation)
console.log("5" - 1);   // 4   (string converted to number)
```

**Understanding Coercion Rules:**

1. **String Coercion:** When one operand is a string, JavaScript converts the other to a string.  
2. **Number Coercion:** For `-`, `*`, `/`, `%`, JavaScript converts operands to numbers.  
3. **Boolean Coercion:** In logical contexts, values are converted to `true` or `false`.  

**String Coercion:**

The `+` operator concatenates strings. If one operand is a string, the other is converted to a string.
If both are numbers, it adds them.

```js
console.log("The answer is " + 42);     // "The answer is 42"
console.log("5" + 3 + 2);               // "532" (left to right)
console.log(3 + 2 + "5");               // "55" (3+2=5, then "5"+"5")
```

**Number Coercion:**

For `-`, `*`, `/`, `%`, JavaScript converts operands to numbers.

```js
console.log("10" - 5);      // 5 (string becomes number)
console.log("10" * 2);      // 20
console.log("10" / 2);      // 5
console.log(+"123");        // 123 (unary + converts to number)
console.log(Number("456")); // 456 (explicit conversion)
```

**Boolean Coercion:**

In logical contexts (like `if` statements), values are coerced to `true` or `false`.

```js
console.log(Boolean("hello"));  // true
console.log(Boolean(""));       // false
console.log(Boolean(0));        // false
console.log(Boolean(1));        // true
console.log(!!"hello");         // true (double negation trick)
```

**Comparison Operators:**

In JavaScript we have two types of equality operators: `==` (loose equality) and `===` (strict equality).
At the beginning, `==` was commonly used, but it can lead to unexpected results due to coercion. Then `===` was introduced to avoid these pitfalls by checking both value and type. The best practice is to always use `===` and `!==` to avoid bugs.

**Loose Equality (==) - with coercion:**

```js
5 == "5";          // true  (string "5" becomes number 5)
true == 1;         // true  (true becomes 1)
false == 0;        // true  (false becomes 0)
null == undefined; // true (special case)
"" == 0;           // true  (empty string becomes 0)
```

**Strict Equality (===) - no coercion:**
```js
5 === "5";    // false (different types)
true === 1;   // false (different types)
null === undefined; // false (different types)
```

**Common Coercion Pitfalls:**

There are many edge cases where coercion leads to unexpected results. Here are some examples:

```js
// Unexpected results
console.log([] + []);        // "" (empty string)
console.log([] + {});        // "[object Object]"
console.log({} + []);        // "[object Object]"
console.log([] == false);    // true (both become 0)
console.log("0" == false);   // true (both become 0)
```

**Safe Practices:**

To avoid unexpected coercion issues, the best practice is instead of relying on coercion, be explicit about conversions

```js
// Instead of relying on coercion, be explicit
let userInput = "123";

// Dangerous
if (userInput == 123) { /* ... */ }

// Better
if (Number(userInput) === 123) { /* ... */ }
// or
if (parseInt(userInput) === 123) { /* ... */ }
```

**Best practice**: Always use `===` and `!==` to avoid bugs. When you need type conversion, do it explicitly with `Number()`, `String()`, `Boolean()`, etc.

---

### 2.5 Truthy and Falsy Values

JavaScript evaluates values as **truthy** (true in conditionals) or **falsy** (false in conditionals).

**The Complete List of Falsy Values (only 8):**
1. `false` - the boolean false  
2. `0` - zero  
3. `-0` - negative zero  
4. `0n` - BigInt zero  
5. `""` - empty string  
6. `null` - null value  
7. `undefined` - undefined value  
8. `NaN` - Not a Number  

**Everything else is truthy!**

```js
// Falsy examples
if (0) console.log("Won't run");
if ("") console.log("Won't run");
if (null) console.log("Won't run");
if (undefined) console.log("Won't run");
if (NaN) console.log("Won't run");

// Truthy examples
if ("hello") console.log("Will run");
if (42) console.log("Will run");
if ([]) console.log("Will run"); // Empty array is truthy!
if ({}) console.log("Will run"); // Empty object is truthy!
if ("0") console.log("Will run"); // String "0" is truthy!
if (-1) console.log("Will run"); // Negative numbers are truthy!
```

**Common Surprises:**
```js
// These are all TRUTHY (not falsy!)
console.log(Boolean([]));        // true - empty array
console.log(Boolean({}));        // true - empty object
console.log(Boolean("0"));       // true - string "0"
console.log(Boolean("false"));   // true - string "false"
console.log(Boolean(Infinity));  // true
console.log(Boolean(-Infinity)); // true
```

**Practical Usage:**

Here are some common scenarios where understanding truthy/falsy is important:

**1. Default Values:**
```js
function greet(name) {
  name = name || "Guest"; // If name is falsy, use "Guest"
  return `Hello, ${name}!`;
}

// ES6 way (preferred)
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
```

**2. Checking Array/Object Existence:**
```js
let users = getUsersFromAPI(); // might return null or []

if (users && users.length) {
  // Safe to process users
  users.forEach(user => console.log(user.name));
}
```

**4. Form Validation:**
```js
function validateForm(email, password) {
  if (!email) {
    return "Email is required";
  }
  if (!password) {
    return "Password is required";
  }
  return null; // No errors
}
```

**Boolean Conversion Functions:**
```js
// Explicit conversion
Boolean(0);        // false
Boolean("hello");  // true

// Double negation trick (commonly used)
!!0;              // false
!!"hello";        // true
```

Understanding truthy/falsy is crucial for writing clean conditional logic in React Native applications!

```js
var oldWay = "Avoid this";  // function-scoped
let age = 20;               // block-scoped
const pi = 3.14159;         // constant, cannot be reassigned

age = 21; //  allowed
// pi = 3.14;  Error: Assignment to constant variable
```

**Understanding Scope:**

In JavaScript, scope determines the accessibility of variables. There are two main types of scope: **function scope** (for `var`) and **block scope** (for `let` and `const`).

**Function Scope (var):**

For the function-scoped `var`, a variable declared inside a function is accessible anywhere within that function, even if the variable is declared inside nested blocks.

```js
function example() {
  if (true) {
    if (true) {
      var y = 1; // function-scoped
    }
    var x = 1;
  }
  console.log(x); // 1 - accessible outside the if block
  console.log(y); // 1 - also accessible outside the if block
}
```

**Block Scope (let/const):**

For block-scoped `let` and `const`, a variable declared inside a block (like an `if` statement or loop) is only accessible within that block.
The following code will throw a `ReferenceError` if you try to access `y` or `z` outside the `if` block.

```js
function example() {
  if (true) {
    let y = 1;
    const z = 2;
  }
  // console.log(y);  ReferenceError: y is not defined
  // console.log(z);  ReferenceError: z is not defined
}
```

**Hoisting Explained:**

Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope (global or function) before code execution.
This means you can use certain things before they are defined (but with caveats).

**Important**: Only declarations are hoisted, not initializations/assignments.

```js
sayHello(); // Works!

function sayHello() {
  console.log("Hello!");
}
```
Function **declarations** are fully hoisted, meaning the whole function is available anywhere in its scope.

**Var Hoisting:**
```js
console.log(x); // undefined (not an error)
var x = 10;
```
What happens behind the scenes:
```js
var x;          // declaration is hoisted (set to undefined)
console.log(x); // undefined
x = 10;         // initialization happens here
```
So `var` is hoisted and initialized to undefined.

**Let/Const Hoisting:**

```js
console.log(y); //  ReferenceError
let y = 5;
```

Behind the scenes:

- `let` and `const` **are** hoisted too, but they are placed in a **Temporal Dead Zone (TDZ)** until their declaration line is executed.  

- This means you can’t use them before the actual line of declaration.  
  

**Example of TDZ (Temporal Dead Zone)**

```js
console.log(a); // undefined
var a = 1;

console.log(b); // ReferenceError
let b = 2;
```

Here, `b` exists in memory (hoisted), but you can’t access it until the line it’s declared.


In summary:

| Keyword                         | Hoisted?                      | Initialized?           | Usable before declaration?     |
| ------------------------------- | ----------------------------- | ---------------------- | ------------------------------ |
| `var`                           |  Yes                          | `undefined`            | Yes (but value is `undefined`) |
| `let`                           |  Yes                          |  No                    | No → ReferenceError (TDZ)      |
| `const`                         |  Yes                          |  No                    | No → ReferenceError (TDZ)      |
| Function Declaration            |  Yes                          |  Yes (whole function)  | Yes                            |
| Function Expression (with var)  |  Variable only (`undefined`)  | No function yet        | No                             |
| Arrow Function (with let/const) |  Variable hoisted (TDZ)       | No function yet        | No                             |



**const with Objects/Arrays:**

We know that `const` prevents reassignment of the variable itself, but it does not make the object or array immutable. You can still modify the contents of an object or array declared with `const`.

```js
const user = { name: "Ali" };
user.name = "Sara"; //  allowed - modifying property
user.age = 25;      //  allowed - adding property
// user = {};  Error - cannot reassign the variable

const numbers = [1, 2, 3];
numbers.push(4);    //  allowed - modifying array
// numbers = [];  Error - cannot reassign
```

**Best practice**: Use `const` by default. Use `let` only if you know the variable's value will change. Avoid `var` completely in modern JavaScript. and developers often struggled with its quirks. In 2015, the language underwent a major upgrade with **ECMAScript 2015 (ES6)**. This update introduced features like:

* `let` and `const` for block-scoped variables  
* Arrow functions for cleaner syntax  
* Template literals for easier string handling  
* Destructuring, spread/rest operators, and modules  
* Classes, promises, and many other modern features  




---

## **3. Operators**

### 3.1 Arithmetic Operators

In the following examples, we demonstrate the basic arithmetic operations in JavaScript.

```js
let x = 10;
let y = 3;

console.log(x + y);  // 13 (addition)
console.log(x - y);  // 7  (subtraction)
console.log(x * y);  // 30 (multiplication)
console.log(x / y);  // 3.333... (division)
console.log(x % y);  // 1  (modulus - remainder after division)
console.log(x ** y); // 1000 (exponentiation - ES2016)
```

**Special Cases:**

There are some special cases to be aware of with certain arithmetic operations. For example in JavaScript, division by zero does not throw an error. Instead, it results in `Infinity` or `-Infinity` depending on the sign of the numerator. Dividing zero by zero results in `NaN` (Not a Number).

```js
console.log(5 / 0);        // Infinity
console.log(-5 / 0);       // -Infinity
console.log(0 / 0);        // NaN
console.log(10 % 3);       // 1 (remainder)
console.log(-10 % 3);      // -1 (sign follows dividend)
console.log(2 ** 3 ** 2);  // 512 (right-associative: 2^(3^2) = 2^9)
```

**Increment/Decrement:**

The increment (`++`) and decrement (`--`) operators increase or decrease a variable's value by 1. They can be used in two forms: **prefix** (before the variable) and **postfix** (after the variable).

```js
let counter = 5;

// Pre-increment: increment first, then return
console.log(++counter); // 6 (counter is now 6)

// Post-increment: return first, then increment
console.log(counter++); // 6 (returns 6, then counter becomes 7)

console.log(counter); // 7

// Same logic for decrement
console.log(--counter); // 6 (pre-decrement)
console.log(counter--); // 6 (post-decrement, counter becomes 5)
```

### 3.2 Assignment Operators

Just like in many programming languages, JavaScript supports various assignment operators to assign values to variables. Except for the arrays, in case of the arrays the `+=` operator converts the array to a string.

```js
let num = 5;

// Compound assignment operators
num += 3;   // num = num + 3;  → 8
num -= 2;   // num = num - 2;  → 6
num *= 2;   // num = num * 2;  → 12
num /= 3;   // num = num / 3;  → 4
num %= 3;   // num = num % 3;  → 1
num **= 3;  // num = num ** 3; → 1 (ES2016)

// Works with strings too
let message = "Hello";
message += " World"; // "Hello World"

// And arrays
let arr = [1, 2];
arr += [3, 4]; // "1,23,4" (becomes string!)
```

**Multiple Assignment:**
```js
let a, b, c;
a = b = c = 5; // All variables get value 5

// Better approach for clarity
let x = 5;
let y = 5;
let z = 5;
```

### 3.3 Comparison Operators

```js
console.log(10 > 5);     // true (greater than)
console.log(10 < 5);     // false (less than)
console.log(10 >= 10);   // true (greater than or equal)
console.log(10 <= 5);    // false (less than or equal)
console.log(10 == "10"); // true (loose equality - with coercion)
console.log(10 === "10"); // false (strict equality - no coercion)
console.log(10 != "5");   // true (loose inequality)
console.log(10 !== "10"); // true (strict inequality)
```

**String Comparison (alphabetical):**
```js
console.log("apple" < "banana"); // true
console.log("Apple" < "apple");  // true (capital letters come first)
console.log("10" < "9");         // true (string comparison, not numeric!)

// For numeric strings, convert first
console.log(Number("10") < Number("9")); // false
```

**Comparison Pitfalls:**
```js
console.log(null == undefined);  // true (special case)
console.log(null === undefined); // false (different types)
console.log(NaN == NaN);         // false (NaN is not equal to anything)
console.log(Number.isNaN(NaN));  // true (proper way to check NaN)
```

### 3.4 Logical Operators

In JavaScript, logical operators are used to combine multiple boolean expressions or values. The three main logical operators are AND (`&&`), OR (`||`), and NOT (`!`).

```js
let isStudent = true;
let hasID = false;
let age = 20;

// AND (&&) - all conditions must be true
console.log(isStudent && hasID);        // false
console.log(isStudent && age >= 18);    // true

// OR (||) - at least one condition must be true
console.log(isStudent || hasID);        // true
console.log(!isStudent || hasID);       // false

// NOT (!) - inverts the boolean value
console.log(!isStudent);                // false
console.log(!hasID);                    // true
console.log(!!isStudent);               // true (double negation)
```

**Short-Circuit Evaluation:**

Logical operators in JavaScript use **short-circuit evaluation**, meaning they stop evaluating as soon as the result is determined. This can be useful for setting default values or avoiding errors.

```js
// && stops at first falsy value
let user = null;
user && user.name && console.log(user.name); // Won't execute console.log

// || stops at first truthy value
let name = user.name || "Guest"; // If user.name is falsy, use "Guest"

// Common pattern for default values
function greet(name) {
  name = name || "Anonymous";
  return `Hello, ${name}!`;
}
```

**Nullish Coalescing (??) - ES2020:**

In addition to `||`, JavaScript introduced the **nullish coalescing operator** (`??`) in ES2020. It is similar to `||` but only considers `null` and `undefined` as "nullish" values, ignoring other falsy values like `0`, `""`, or `false`.

```js
let user = "";
let defaultName = "Guest";

// || uses truthy/falsy (empty string is falsy)
console.log(user || defaultName); // "Guest"

// ?? only checks for null/undefined
console.log(user ?? defaultName); // "" (empty string is not null/undefined)

// Useful for distinguishing between falsy and null/undefined
let timeout = 0;
let defaultTimeout = 5000;
console.log(timeout || defaultTimeout); // 5000 (0 is falsy)
console.log(timeout ?? defaultTimeout); // 0 (0 is not null/undefined)
```

**Logical Assignment (ES2021):**

JavaScript introduced logical assignment operators in ES2021, which combine logical operations with assignment. These operators are `&&=`, `||=`, and `??=`.

```js
let obj = { name: "" };

// Old way
obj.name = obj.name || "Default";

// New way
obj.name ||= "Default"; // Only assign if obj.name is falsy
obj.value &&= "Updated"; // Only assign if obj.value is truthy
obj.data ??= "New"; // Only assign if obj.data is null/undefined
```

---

## **4. Strings**

Strings are used for text and are one of the most commonly used data types in JavaScript applications.

### 4.1 String Creation

**Three ways to create strings:**
```js
let singleQuote = 'Hello World';
let doubleQuote = "Hello World";
let templateLiteral = `Hello World`; // ES6 - most powerful
```

**Escaping Characters:**

Just like in many programming languages, you can use the backslash (`\`) to escape special characters in strings.

```js
let quote = 'She said, "Hello!"';
let apostrophe = "Don't worry";
let escaped = "She said, \"Don't worry!\"";
let newline = "Line 1\nLine 2";
let tab = "Column1\tColumn2";
let backslash = "Path: C:\\Users\\Name";
```

### 4.2 Concatenation

In the past, string concatenation was commonly done using the `+` operator or the `+=` operator. However, this can lead to messy and hard-to-read code, especially with multiple variables or multi-line strings.


**Traditional Concatenation:**
```js
let first = "Ali";
let last = "Khan";
console.log(first + " " + last); // Ali Khan

let greeting = "Hello";
greeting += " ";
greeting += "World"; // "Hello World"
```

**Problems with Traditional Concatenation:**
```js
let name = "Sara";
let age = 25;
let city = "Istanbul";

// Hard to read and maintain
let message = "My name is " + name + ". I am " + age + " years old and I live in " + city + ".";
```

### 4.3 Template Literals (ES6)

Template literals, introduced in ES6, provide a cleaner and more powerful way to work with strings. They use backticks (`` ` ``) and allow for embedded expressions using `${}`.

**Basic Usage:**
```js
let name = "Sara";
let age = 20;
console.log(`My name is ${name} and I am ${age} years old.`);
```

**Multi-line Strings:**
```js
let html = `
  <div>
    <h1>Welcome ${name}</h1>
    <p>You have ${unreadCount} unread messages.</p>
  </div>
`;
```

**Expressions in Template Literals:**

Template literals can contain **any valid JavaScript expression**, including variables, arithmetic operations, and function calls.

```js
let a = 5;
let b = 3;
console.log(`Sum: ${a + b}, Product: ${a * b}`); // Sum: 8, Product: 15

let user = { name: "Ali", age: 22 };
console.log(`User: ${user.name.toUpperCase()}, Adult: ${user.age >= 18}`);
```

**Function Calls:**

Since template literals can include any expression, you can call functions directly within them.

```js
function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

let price = 19.99;
console.log(`Total: ${formatCurrency(price)}`); // Total: $19.99
```

**Nested Template Literals:**

Template literals can be nested inside each other for more complex structures.

```js
let users = ["Ali", "Sara", "Ahmed"];
let message = `Users: ${users.map(user => `<span>${user}</span>`).join(", ")}`;
```

### 4.4 Useful String Methods

```js
let str = "JavaScript Programming";

// Length and basic info
console.log(str.length);        // 21
console.log(str[0]);           // "J" (character at index 0)
console.log(str.charAt(0));    // "J" (safer than bracket notation)

// Case conversion
console.log(str.toUpperCase()); // "JAVASCRIPT PROGRAMMING"
console.log(str.toLowerCase()); // "javascript programming"

// Searching
console.log(str.includes("Script"));    // true
console.log(str.indexOf("Script"));     // 4
console.log(str.lastIndexOf("a"));      // 15
console.log(str.startsWith("Java"));    // true
console.log(str.endsWith("ing"));       // true

// Extracting parts
console.log(str.slice(0, 4));          // "Java" (start, end)
console.log(str.slice(-11));           // "Programming" (negative = from end)
console.log(str.substring(0, 4));      // "Java" (similar to slice)
console.log(str.substr(0, 4));         // "Java" (deprecated)
```

**More String Methods:**
```js
let messy = "  Hello World  ";

// Trimming whitespace
console.log(messy.trim());           // "Hello World"
console.log(messy.trimStart());      // "Hello World  "
console.log(messy.trimEnd());        // "  Hello World"

// Replacing
console.log(str.replace("Java", "Type"));     // "TypeScript Programming"
console.log(str.replaceAll("a", "@"));        // "J@v@Script Progr@mming"

// Splitting
console.log(str.split(" "));         // ["JavaScript", "Programming"]
console.log(str.split(""));          // ["J", "a", "v", "a", ...]
```

**String Padding (ES2017):**

String padding allows you to add characters to the beginning or end of a string until it reaches a certain length.


```js
let num = "5";
console.log(num.padStart(3, "0"));   // "005"
console.log(num.padEnd(3, "0"));     // "500"

// Useful for formatting
let time = "9";
console.log(`${time.padStart(2, "0")}:30`); // "09:30"
```


**String Immutability:**

In JavaScript, strings are **immutable**, meaning once a string is created, it cannot be changed. Any operation that seems to modify a string actually creates a new string.

```js
let original = "Hello";
let modified = original.toUpperCase(); // Creates new string
console.log(original); // "Hello" (unchanged)
console.log(modified); // "HELLO"

// Strings cannot be modified in place
// original[0] = "h"; // No effect in JavaScript
```

---

---

### Something Extra for you to Explore:

**Symbol:**
```js
let id1 = Symbol('id');
let id2 = Symbol('id');
console.log(id1 === id2); // false - each Symbol is unique

// Often used as object property keys to avoid conflicts
let user = {
  [id1]: 'secret data',
  name: 'Ali'
};
```

**Regular Expressions with Strings:**
```js
let email = "user@example.com";
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(emailPattern.test(email));     // true
console.log(email.match(emailPattern));    // Full match object
console.log(email.search("@"));           // 4 (index of @)
```

**Common Patterns in React Native:**
```js
// Formatting user names
let firstName = "ali";
let lastName = "khan";
let displayName = `${firstName.charAt(0).toUpperCase()}${firstName.slice(1)} ${lastName.toUpperCase()}`;
// "Ali KHAN"

// Creating dynamic styles
let theme = "dark";
let className = `container ${theme}-theme`;

// Parsing API responses
let apiUrl = "https://api.example.com/users";
let userId = "123";
let endpoint = `${apiUrl}/${userId}/profile`;
```

---


---

## **5. Control Flow**

Control flow statements determine which code blocks execute based on conditions and repetition patterns.

### 5.1 If/Else Statements

If else is essentially like any other programming language. It allows you to execute different blocks of code based on certain conditions.

**Basic If/Else:**
```js
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

**Multiple Conditions:**
```js
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
```

**Complex Conditions:**
```js
let user = { age: 25, isVerified: true, hasPermission: false };

if (user.age >= 18 && user.isVerified && user.hasPermission) {
  console.log("Access granted");
} else if (user.age >= 18 && user.isVerified) {
  console.log("Verification complete, but no permission");
} else {
  console.log("Access denied");
}
```

**Ternary Operator (Short If/Else):**

In JavaScript, the ternary operator (`? :`) provides a concise way to perform conditional assignments or return values based on a condition. It is often used for simple conditions where an `if/else` statement would be too verbose.

```js
// Basic ternary
let status = age >= 18 ? "adult" : "minor";

// Nested ternary (use sparingly)
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";

```

**Nullish Check Pattern:**

In real-world applications, you often need to check for `null` or `undefined` values before accessing properties on an object to avoid runtime errors.
In EcmaScript 2020, optional chaining (`?.`) provides a cleaner way to do this.

```js
let user = getUserData();

// Safe property access
if (user && user.profile && user.profile.name) {
  console.log(user.profile.name);
}

// Optional chaining (ES2020) - cleaner alternative
console.log(user?.profile?.name);
```

### 5.2 Switch Statements

In JS, the `switch` statement is used to perform different actions based on different conditions. It is often used as an alternative to multiple `if/else if` statements when you have a single variable that can take on multiple values.
The syntax is straightforward, and close to Java, but remember to use `break` to prevent fall-through unless that behavior is desired.

**Basic Switch:**
```js
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Tuesday":
  case "Wednesday":  
  case "Thursday":
    console.log("Midweek");
    break;
  case "Friday":
    console.log("Weekend coming!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Invalid day");
}
```

**Switch with Expressions:**

We can use expressions in switch cases, but they must evaluate to the **same type** as the switch expression.

```js
let operation = "+";
let a = 10;
let b = 5;
let result;

switch (operation) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "*":
    result = a * b;
    break;
  case "/":
    result = b !== 0 ? a / b : "Cannot divide by zero";
    break;
  default:
    result = "Invalid operation";
}

console.log(result); // 15
```

**Modern Alternative - Object Lookup:**

Instead of using a switch statement, you can use an object to map operations to functions. This approach is often cleaner and more maintainable.

```js
const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => b !== 0 ? a / b : "Cannot divide by zero"
};

let result = operations[operation] 
  ? operations[operation](a, b) 
  : "Invalid operation";
```

### 5.3 Loops

Traditionally, JavaScript uses `for`, `while`, and `do...while` loops for iteration. 

**For Loop (Traditional):**
```js
// Basic counting
for (let i = 1; i <= 5; i++) {
  console.log(`Count: ${i}`);
}

// Reverse counting
for (let i = 5; i >= 1; i--) {
  console.log(`Countdown: ${i}`);
}

// Custom increment
for (let i = 0; i < 10; i += 2) {
  console.log(`Even: ${i}`); // 0, 2, 4, 6, 8
}
```

**For...of Loop (ES6) - for Arrays:**

With ES6, we also have `for...of` and `for...in` loops for iterating over arrays and object properties, respectively.

```js
let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

**For...in Loop - for Object Properties:**

```js
let user = { name: "Ali", age: 25, city: "Istanbul" };

for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
```

**For..of loop - Using entries():**  

```js
// With index using entries()
for (let [index, fruit] of fruits.entries()) {
  console.log(`${index}: ${fruit}`);
}
```

**For...in Loop - for Object Properties:**

```js
// Better approach for objects
Object.entries(user).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```


**While Loop:**
```js
let count = 0;
while (count < 5) {
  console.log(`While count: ${count}`);
  count++;
}

// Infinite loop protection
let attempts = 0;
let maxAttempts = 10;
while (someCondition && attempts < maxAttempts) {
  // Do something
  attempts++;
}
```

**Do...While Loop:**
```js
let input;
do {
  input = prompt("Enter a number greater than 10:");
} while (input <= 10);
```

**Loop Control:**

You can control loop execution using `break` and `continue` statements.

```js
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue; // Skip this iteration
  }
  if (i === 7) {
    break; // Exit the loop
  }
  console.log(i); // Prints: 0, 1, 2, 4, 5, 6
}
```

**Nested Loops:**
```js
// Multiplication table
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
```

**Array Iteration Methods (Functional Approach):**

In JS (ES5 and later), arrays come with built-in methods that allow for functional-style iteration and transformation. These methods include `forEach`, `map`, `filter`, `reduce`, `find`, `some`, and `every`.

- `forEach`: Executes a provided function once for each array element.  
- `map`: Creates a new array with the results of calling a provided function on every element.  
- `filter`: Creates a new array with all elements that pass the test implemented by the provided function.  
- `reduce`: Executes a reducer function on each element of the array, resulting in a single output value.  
- `find`: Returns the value of the first element that satisfies the provided testing function.  
- `some`: Tests whether at least one element in the array passes the test implemented by the provided function.  
- `every`: Tests whether all elements in the array pass the test implemented by the provided function.  

```js
let numbers = [1, 2, 3, 4, 5];

// forEach - execute for each element
numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

// map - transform each element
let doubled = numbers.map(num => num * 2);

// filter - select elements that match condition
let evens = numbers.filter(num => num % 2 === 0);

// find - get first element that matches
let found = numbers.find(num => num > 3);

// some - check if any element matches
let hasEvens = numbers.some(num => num % 2 === 0);

// every - check if all elements match
let allPositive = numbers.every(num => num > 0);
```


---

## **6. Functions**

Functions are reusable blocks of code that perform specific tasks. They are fundamental building blocks in JavaScript and crucial for React Native development.

### 6.1 Function Declaration

**Basic Declaration:**

A function is declared using the `function` keyword, followed by the function name, parentheses for parameters, and curly braces for the function body.

```js
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Ali")); // "Hello, Ali"
```

**Function Characteristics:**

In JavaScript, functions are first-class objects, meaning they can be assigned to variables, passed as arguments, and returned from other functions. At the same time, function declarations are hoisted, allowing them to be called before their definition in the code.

```js
// Functions are hoisted - can be called before declaration
console.log(add(2, 3)); // Works! Returns 5

function add(a, b) {
  return a + b;
}

// Functions are first-class objects
console.log(add.name);   // "add"
console.log(add.length); // 2 (number of parameters)
```

**Multiple Parameters:**

Like many programming languages, JavaScript allows functions to accept multiple parameters. So you can define a function that takes several inputs to perform its task.

```js
function calculateTotal(price, tax, discount) {
  let subtotal = price - discount;
  let total = subtotal + (subtotal * tax);
  return total;
}

let finalPrice = calculateTotal(100, 0.08, 10);
console.log(finalPrice); // 97.2
```

**Return Statements:**

Functions can return values using the `return` statement. If no return statement is provided, the function returns `undefined` by default.
The `return` statement also immediately exits the function, so any code after it will not be executed.

```js
function checkAge(age) {
  if (age < 0) {
    return "Invalid age"; // Early return
  }
  
  if (age < 18) {
    return "Minor";
  }
  
  return "Adult"; // Default return
}

function noExplicitReturn() {
  console.log("No return statement");
  // Implicitly returns undefined
}
```

### 6.2 Function Expression

Function expressions involve creating functions and assigning them to variables. Unlike function declarations, function expressions are not hoisted, meaning they cannot be called before they are defined in the code. Function expressions can be done in several ways, including anonymous functions, named functions, and immediately invoked function expressions (IIFE).

**Basic Function Expression:**
```js
const add = function(a, b) {
  return a + b;
};

// Cannot be called before declaration (not hoisted)
// console.log(multiply(2, 3)); //  Error

const multiply = function(a, b) {
  return a * b;
};
```

**Named Function Expression:**
```js
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // Can reference itself by name
};

console.log(factorial(5)); // 120
// console.log(fact(5)); //  Error - 'fact' not accessible outside
```

**Immediately Invoked Function Expression (IIFE):**
```js
(function() {
  console.log("This runs immediately!");
})();

// With parameters
(function(name) {
  console.log(`Hello ${name}!`);
})("World");

// Useful for creating isolated scope
const result = (function() {
  let privateVar = "secret";
  return {
    getValue: function() {
      return privateVar;
    }
  };
})();
```

### 6.3 Arrow Functions (ES6)

Arrow functions introduced in ES6 provide a shorter syntax for writing functions. They also have different behavior regarding the `this` keyword compared to regular functions.

**Basic Arrow Function Syntax:**
```js
// Traditional function
const multiply = function(a, b) {
  return a * b;
};

// Arrow function - concise
const multiply = (a, b) => a * b;
```

**Arrow Function Variations:**

There are several variations of arrow functions depending on the number of parameters and the function body. If the function takes a single parameter, parentheses can be omitted. But if the function takes no parameters or more than 1 parameter, parentheses are required. If the function body contains multiple statements, curly braces are required, and an explicit `return` statement must be used to return a value.

```js
// No parameters
const sayHello = () => console.log("Hello!");

// One parameter (parentheses optional)
const square = x => x * x;
const square = (x) => x * x; // Same thing

// Multiple parameters
const add = (a, b) => a + b;

// Block body (requires explicit return)
const complexCalc = (a, b) => {
  let result = a * b;
  result += 10;
  return result;
};

// Returning object literal (wrap in parentheses)
const createUser = (name, age) => ({
  name: name,
  age: age,
  isAdult: age >= 18
});
```

**Arrow Functions vs Regular Functions:**

There are key differences between arrow functions and regular functions:

1. `this` Binding  
2. Cannot be used as constructors  
3. No `arguments` object  

**1. `this` Binding:**

In regular functions, `this` refers to the object that called the function. In arrow functions, `this` is lexically bound, meaning it inherits `this` from the surrounding (enclosing) scope.

```js
const obj = {
  name: "Ali",
  
  // Regular function - 'this' refers to obj
  regularMethod: function() {
    console.log(this.name); // "Ali"
    
    setTimeout(function() {
      console.log(this.name); // undefined (different context)
    }, 1000);
  },
  
  // Arrow function - inherits 'this' from parent scope
  arrowMethod: function() {
    console.log(this.name); // "Ali"
    
    setTimeout(() => {
      console.log(this.name); // "Ali" (inherits from arrowMethod)
    }, 1000);
  }
};
```

**2. Cannot be used as constructors:**

Regular functions can be used as constructors with the `new` keyword, while arrow functions cannot.

```js
function RegularConstructor(name) {
  this.name = name;
}
const person1 = new RegularConstructor("Ali"); //  Works

const ArrowConstructor = (name) => {
  this.name = name;
};
// const person2 = new ArrowConstructor("Sara"); //  Error
```

**3. No `arguments` object:**

In regular functions, you can access the `arguments` object, which contains all arguments passed to the function. Arrow functions do not have their own `arguments` object. instead, you can use rest parameters (`...args`) to achieve similar functionality.

```js
function regularFunc() {
  console.log(arguments); // Arguments object available
}

const arrowFunc = () => {
  // console.log(arguments); //  Error - no arguments object
};

// Use rest parameters instead
const arrowWithRest = (...args) => {
  console.log(args); // Array of arguments
};
```

### 6.4 Default Parameters (ES6)

In ECMAScript 2015, default function parameters were introduced to the JavaScript language. This feature allows developers to set default values for function parameters if no value or `undefined` is passed when the function is called. This helps avoid common pitfalls with `undefined` values and makes functions more robust and easier to use.

**Basic Default Parameters:**
```js
function greet(name = "Guest", greeting = "Hello") {
  console.log(`${greeting}, ${name}!`);
}

greet();              // "Hello, Guest!"
greet("Ali");         // "Hello, Ali!"
greet("Sara", "Hi");  // "Hi, Sara!"
```

**Default Parameters with Expressions:**

Default parameters can also be set using expressions, including function calls or calculations.

```js
function createUser(name = "Anonymous", timestamp = Date.now()) {
  return {
    name: name,
    createdAt: timestamp
  };
}

// Function calls as defaults
function getRandomId() {
  return Math.random().toString(36).substr(2, 9);
}

function createItem(name, id = getRandomId()) {
  return { name, id };
}
```

**Default Parameters with Object Destructuring:**

In modern JavaScript, you can also use default parameters in conjunction with object destructuring to provide default values for multiple properties.
For example in the code below `configureApp` takes one parameter, which is expected to be an object. Inside the parameter list, object destructuring is used. This means the function will "unpack" values from the object you pass in. Notice `= {}` after the parameter. This ensures the function works even if you call it with no arguments at all.
Without it, calling `configureApp()` would cause an error, because destructuring undefined isn’t allowed.

```js
function configureApp({
  theme = "light",
  language = "en",
  notifications = true
} = {}) {
  console.log(`Theme: ${theme}, Lang: ${language}, Notifications: ${notifications}`);
}

configureApp(); // Uses all defaults
configureApp({ theme: "dark" }); // Uses defaults for language and notifications
```

### 6.5 Rest Parameters and Spread Syntax

In JavaScript, rest parameters and spread syntax are powerful features introduced in ES6 that enhance the way functions handle arguments and how arrays and objects can be manipulated.

**Rest Parameters (...args):**

Rest parameters allow a function to accept an indefinite number of arguments as an array. This is useful when you don't know beforehand how many arguments will be passed to the function. The syntax involves using three dots (`...`) followed by a name, which collects all remaining arguments into an array.

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// Mixed parameters
function introduce(firstName, lastName, ...hobbies) {
  console.log(`${firstName} ${lastName} likes: ${hobbies.join(", ")}`);
}

introduce("Ali", "Khan", "reading", "coding", "gaming");
```

**Spread Syntax in Function Calls:**

Spread syntax allows an iterable (like an array or string) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. This is done using the same three-dot (`...`) syntax. You can also use spread syntax to combine arrays or objects.

```js
function multiply(a, b, c) {
  return a * b * c;
}

let numbers = [2, 3, 4];
console.log(multiply(...numbers)); // 24 (same as multiply(2, 3, 4))

// Combining arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
```

### 6.6 Higher-Order Functions

Higher-order functions are functions that can take other functions as arguments or return functions as their result. They are a key feature of functional programming and are widely used in JavaScript for tasks like array manipulation, event handling, and more.

**Functions that take other functions as arguments:**

In this example, the `repeat` function takes another function `fn` and a number `times` as arguments. It calls `fn` the specified number of times, passing the current iteration index to it.

```js
function repeat(fn, times) {
  for (let i = 0; i < times; i++) {
    fn(i);
  }
}

repeat(x => console.log(`Count: ${x}`), 3);
// Count: 0
// Count: 1  
// Count: 2
```

**Functions that return other functions:**

In the example below, the `createMultiplier` function returns a new function that multiplies its input by a specified `multiplier`. This allows you to create specialized functions like `double` and `triple`.

```js
function createMultiplier(multiplier) {
  return function(x) {
    return x * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

### 6.7 Callback Functions

What iss a Callback Function? A callback function is a function that is passed into another function as an argument and is executed after some operation has been completed. Callbacks are commonly used for asynchronous operations, such as handling events, making API calls, or performing tasks that take time to complete.

**Basic Callbacks:**

In the example below, the `processData` function simulates an asynchronous operation using `setTimeout`. After processing the data (converting it to uppercase), it calls the provided callback function with the processed result.
SetTimeout is used here to mimic a delay, such as fetching data from a server. the setTimeout function takes two arguments: a callback function to execute after the delay and the delay time in milliseconds.

```js
function processData(data, callback) {
  // Simulate processing time
  setTimeout(() => {
    let processed = data.toUpperCase();
    callback(processed);
  }, 1000);
}

processData("hello world", function(result) {
  console.log(result); // "HELLO WORLD"
});
```

**Error-First Callbacks (Node.js style):**

In Node.js and many JavaScript libraries, the convention for callbacks is to use an "error-first" pattern. This means the first argument of the callback is reserved for an error (if any), and the second argument is for the successful result. This pattern helps in handling errors gracefully.

In the example below, the `readFile` function simulates reading a file. If the filename is "nonexistent.txt", it calls the callback with an error. Otherwise, it calls the callback with the file content.

```js
function readFile(filename, callback) {
  // Simulate file reading
  setTimeout(() => {
    if (filename === "nonexistent.txt") {
      callback(new Error("File not found"), null);
    } else {
      callback(null, "File content here");
    }
  }, 500);
}

readFile("data.txt", (error, data) => {
  if (error) {
    console.error("Error:", error.message);
  } else {
    console.log("Data:", data);
  }
});
```

---

## **7. Objects & Arrays**

Objects and arrays are the most important data structures in JavaScript and are heavily used in React Native for managing component state, props, and API data.

### 7.1 Objects Deep Dive

Objects are collections of key-value pairs.

**Creating and Accessing Objects:**
```js
let user = { 
  name: "Ali", 
  age: 22,
  contact: {
    email: "ali@example.com",
    phone: "+1234567890"
  }
};

console.log(user.name);              // "Ali"
console.log(user.contact.email);     // "ali@example.com"
console.log(user["age"]);            // 22

user.age = 23; // Modifying property
user.city = "Istanbul"; // Adding new property
```

**Object Methods and `this`:**

Like in java, the `this` keyword refers to the current object context.
At the same time in JS we can have `method chaining` by returning `this` from methods.

```js
let calculator = {
  value: 0,
  
  add(num) {
    this.value += num;
    return this; // Enable method chaining
  },
  
  multiply(num) {
    this.value *= num;
    return this;
  },
  
  reset() {
    this.value = 0;
    return this;
  },
  
  getValue() {
    return this.value;
  }
};

// Method chaining
let result = calculator.add(5).multiply(3).getValue(); // 15
```

**Object Property Descriptors:**
```js
let obj = {};

Object.defineProperty(obj, 'readOnlyProp', {
  value: 'Cannot change this',
  writable: false,
  enumerable: true,
  configurable: false
});

// obj.readOnlyProp = 'new value'; // Won't work
console.log(obj.readOnlyProp); // "Cannot change this"
```

**Useful Object Methods:**

Some of the most commonly used built-in object methods:
1. `Object.keys(obj)` - returns an array of the object's keys.  
2. `Object.values(obj)` - returns an array of the object's values.  
3. `Object.entries(obj)` - returns an array of key-value pairs.  
4. `Object.hasOwnProperty(prop)` - checks if an object has a specific property (not inherited).  
5. `in` operator - checks if a property exists in an object.  
6. `Object.assign(target, ...sources)` - copies properties from source objects to a target object (shallow copy).  
7. Spread operator `{ ...obj }` - creates a shallow copy of an object (ES6+).  
8. `JSON.parse(JSON.stringify(obj))` - creates a deep copy of an object (for nested objects).  

```js
let user = { name: "Ali", age: 25, city: "Istanbul" };

// Get all keys
console.log(Object.keys(user)); // ["name", "age", "city"]

// Get all values
console.log(Object.values(user)); // ["Ali", 25, "Istanbul"]

// Get key-value pairs
console.log(Object.entries(user)); // [["name", "Ali"], ["age", 25], ["city", "Istanbul"]]

// Check if property exists
console.log("name" in user);              // true
console.log(user.hasOwnProperty("age"));  // true

// Clone objects (shallow copy)
let userCopy = Object.assign({}, user);
let userCopy2 = { ...user }; // ES6 spread (preferred)

// Deep clone (for nested objects)
let deepCopy = JSON.parse(JSON.stringify(user));
```

### 7.2 Arrays Deep Dive

**Array Creation and Basic Operations:**

In JavaScript, arrays are dynamic and can hold elements of any type.
To adding or removing elements, we use methods like `push`, `pop`, `shift`, `unshift`, etc.
There are also many useful array methods for searching, transforming, and iterating.
Some of the few most commonly used array methods:
1. `map(callback)` - transforms each element and returns a new array.  
2. `filter(callback)` - selects elements that match a condition and returns a new array.  
3. `find(callback)` - returns the first element that matches a condition.  
4. `findIndex(callback)` - returns the index of the first element that matches a condition.  

To combine arrays, we can use `concat` or the spread operator. We will see spread operator in detail later.
We will also see sorting and reversing arrays.

```js
let nums = [10, 20, 30];
let mixed = [1, "hello", true, { id: 1 }];
let empty = [];

// Adding elements
nums.push(40);        // Add to end → [10,20,30,40]
nums.unshift(5);      // Add to beginning → [5,10,20,30,40]

// Removing elements
let last = nums.pop();      // Remove from end → 40
let first = nums.shift();   // Remove from beginning → 5

console.log(nums[0]);       // 10 (accessing by index)
console.log(nums.length);   // Array length
```

### 7.3 Essential Array Methods

**Transformation Methods:**
```js
let numbers = [1, 2, 3, 4, 5];

// map - transform each element (returns new array)
let doubled = numbers.map(n => n * 2);         // [2,4,6,8,10]

// filter - select elements that match condition (returns new array)
let evens = numbers.filter(n => n % 2 === 0);  // [2,4]

// reduce - combine all elements into single value
let sum = numbers.reduce((acc, num) => acc + num, 0);     // 15
let product = numbers.reduce((acc, num) => acc * num, 1); // 120

// some - check if ANY element matches
let hasEvens = numbers.some(n => n % 2 === 0); // true

// every - check if ALL elements match  
let allPositive = numbers.every(n => n > 0);   // true

// Flattening
let nested = [[1, 2], [3, 4], [5]];
let flattened = nested.flat();                // [1,2,3,4,5]
let deepNested = [[[1]], [[2, 3]]];
let deepFlattened = deepNested.flat(2);       // [1,2,3]

// find - get first element that matches condition
let found = numbers.find(n => n > 3);          // 4
let foundIndex = numbers.findIndex(n => n > 3); // 3
```

**Advanced Array Operations:**
```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Concatenation
let combined = arr1.concat(arr2);              // [1,2,3,4,5,6]
let spreadCombined = [...arr1, ...arr2];       // [1,2,3,4,5,6] (ES6)

// Sorting
let words = ["banana", "apple", "cherry"];
words.sort();                                  // ["apple", "banana", "cherry"]

let nums = [10, 2, 30, 4];
nums.sort((a, b) => a - b);                   // [2, 4, 10, 30] (numeric sort)

// Reversing
let reversed = [...nums].reverse();            // [30, 10, 4, 2] (doesn't mutate original)
```

### 7.4 Destructuring (ES6)

In ES6 and later versions, destructuring introduces a concise syntax to extract values from arrays or properties from objects into distinct variables. This leads to cleaner and more readable code, especially when dealing with complex data structures.

**Object Destructuring:**

In object destructuring we use curly braces `{}` to extract properties by their names.
It also supports renaming variables, setting default values, nested destructuring, and rest properties.  
Keeping in mind that the variable names must match the property names unless we rename them and this does not change the original object.

```js
let user = { 
  name: "Ali", 
  age: 25, 
  email: "ali@example.com",
  address: {
    city: "Istanbul",
    country: "Turkey"
  }
};

// Basic destructuring
let { name, age } = user;
console.log(name); // "Ali"
console.log(age);  // 25

// Renaming variables
let { name: userName, age: userAge } = user;
console.log(userName); // "Ali"

// Default values
let { name, age, phone = "Not provided" } = user;
console.log(phone); // "Not provided"

// Nested destructuring
let { address: { city, country } } = user;
console.log(city); // "Istanbul"

// Rest properties
let { name, ...otherInfo } = user;
console.log(otherInfo); // { age: 25, email: "...", address: {...} }
```

**Array Destructuring:**
```js
let nums = [10, 20, 30, 40, 50];

// Basic destructuring
let [first, second] = nums;
console.log(first);  // 10
console.log(second); // 20

// Skipping elements
let [, , third] = nums;
console.log(third); // 30

// Default values
let [a, b, c, d, e, f = 100] = nums;
console.log(f); // 100

// Rest elements
let [head, ...tail] = nums;
console.log(head); // 10
console.log(tail); // [20, 30, 40, 50]

// Swapping variables
let x = 1, y = 2;
[x, y] = [y, x]; // Now x = 2, y = 1
```

**Mixed Destructuring:**
```js
let response = {
  status: 200,
  data: {
    users: [
      { id: 1, name: "Ali" },
      { id: 2, name: "Sara" }
    ]
  },
  meta: {
    total: 2,
    page: 1
  }
};

// Extract nested data
let {
  status,
  data: { users: [firstUser, ...otherUsers] },
  meta: { total }
} = response;

console.log(status);     // 200
console.log(firstUser);  // { id: 1, name: "Ali" }
console.log(total);      // 2
```


**Function Parameter Destructuring:**
```js
// Object parameters
function createUser({ name, age, email = "not provided" }) {
  return {
    name,
    age,
    email,
    id: Math.random()
  };
}

let newUser = createUser({ name: "Ali", age: 25 });

// Array parameters
function getFullName([first, last]) {
  return `${first} ${last}`;
}

let fullName = getFullName(["Ali", "Khan"]);
```



---

## **8. ES6+ Features**

ES6 and later versions introduced powerful features that make JavaScript more expressive and easier to work with, especially important for React Native development.

### 8.1 Spread Operator (...) 

The spread operator "spreads out" elements of arrays or properties of objects. To understand it better, think of it as the opposite of destructuring. This can be done using three dots `...`. This allows for easy copying, merging, and transforming data structures and is widely used in React Native for state updates and prop passing.

**Array Spreading:**
```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Combining arrays
let combined = [...arr1, ...arr2];        // [1,2,3,4,5,6]
let withExtra = [0, ...arr1, 3.5, ...arr2, 7]; // [0,1,2,3,3.5,4,5,6,7]

// Copying arrays (shallow copy)
let copy = [...arr1];                     // [1,2,3]
copy.push(4); // Original arr1 unchanged

// Converting to array
let str = "hello";
let chars = [...str];                     // ['h','e','l','l','o']

// Finding min/max
let numbers = [5, 2, 8, 1, 9];
console.log(Math.max(...numbers));       // 9
console.log(Math.min(...numbers));       // 1
```

**Object Spreading:**
```js
let user = { name: "Ali", age: 25 };
let address = { city: "Istanbul", country: "Turkey" };

// Combining objects
let fullProfile = { ...user, ...address };
// { name: "Ali", age: 25, city: "Istanbul", country: "Turkey" }

// Adding properties
let updatedUser = { 
  ...user, 
  email: "ali@example.com",
  age: 26  // This overwrites the original age
};

// Copying objects (shallow copy)
let userCopy = { ...user };

// Conditional properties
let includeEmail = true;
let profile = {
  ...user,
  ...(includeEmail && { email: "ali@example.com" })
};
```

### 8.2 Rest Parameters (...)

Rest parameters collect multiple elements into an array - the opposite of spread. It may be confusing because it uses the same `...` syntax, but the context is different. Rest parameters are used in function definitions to handle an indefinite number of arguments. 

**Function Rest Parameters:**
```js
// Collect all arguments into an array
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 20));        // 30

// Mixed parameters
function introduce(firstName, lastName, ...hobbies) {
  console.log(`${firstName} ${lastName}'s hobbies: ${hobbies.join(', ')}`);
}

introduce("Ali", "Khan", "reading", "coding", "gaming");
// "Ali Khan's hobbies: reading, coding, gaming"
```

**Rest vs Arguments Object:**

Using rest parameters is preferred over the old `arguments` object because rest parameters are true arrays and work with array methods.

```js
// Old way (avoid)
function oldSum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// Modern way (preferred)
function modernSum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Rest parameters are real arrays with array methods
function processNumbers(...nums) {
  console.log(nums.length);           //  Works
  console.log(nums.map(n => n * 2));  //  Works
  
  // arguments object doesn't have array methods
  // console.log(arguments.map(n => n * 2)); //  Error
}
```

**Destructuring with Rest:**

We can also use rest syntax in destructuring to gather remaining elements or properties.

```js
// Array destructuring with rest
let [first, second, ...remaining] = [1, 2, 3, 4, 5];
console.log(first);     // 1
console.log(second);    // 2  
console.log(remaining); // [3, 4, 5]

// Object destructuring with rest
let user = { name: "Ali", age: 25, city: "Istanbul", email: "ali@example.com" };
let { name, age, ...otherInfo } = user;
console.log(name);      // "Ali"
console.log(age);       // 25
console.log(otherInfo); // { city: "Istanbul", email: "ali@example.com" }
```

### 8.3 Modules (import/export)

Modules allow you to organize code into separate files and control what's shared between them.
In JavaScript, we use `export` to make variables/functions/classes available outside a file, and `import` to bring them into another file.

**Named Exports:**
```js
// math.js - Multiple exports
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export const multiply = (a, b) => a * b;

// Alternative syntax
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;

export { subtract, divide };
```

**Named Imports:**
```js
// app.js - Import specific items
import { add, multiply, PI } from './math.js';

console.log(add(2, 3));      // 5
console.log(multiply(4, 5)); // 20
console.log(PI);             // 3.14159

// Import with renaming
import { add as sum, multiply as product } from './math.js';

// Import all named exports
import * as MathUtils from './math.js';
console.log(MathUtils.add(2, 3));
console.log(MathUtils.PI);
```

**Default Exports:**

In JavaScript, a module can have **one** default export. This is useful for exporting a single main value from a file.
You can have the default export as an inline declaration or a separate statement.

```js
// user.js - Default export (one per file)
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  greet() {
    return `Hello, I'm ${this.name}`;
  }
}

export default User;

// Or inline default export
export default function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
```

**Default Imports:**

Importing a default export does not require curly braces, and it's very similar to Python imports.
Syntax is `import <> from 'Path/to/Module'`

```js
// app.js - Import default exports
import User from './user.js';           // Can name it anything
import validateEmail from './validation.js';

const user = new User("Ali", "ali@example.com");
console.log(user.greet());

if (validateEmail("test@example.com")) {
  console.log("Valid email");
}
```

**Mixed Exports/Imports:**

You can have multiple named exports and one default export in the same file.
When importing, you can combine both named and default imports. Just remember that the default import comes first without curly braces(`{}`).

```js
// utils.js - Both named and default exports
const API_URL = "https://api.example.com";

export const formatDate = (date) => {
  return date.toLocaleDateString();
};

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Default export
export default class ApiClient {
  constructor(baseUrl = API_URL) {
    this.baseUrl = baseUrl;
  }
  
  async get(endpoint) {
    const response = await fetch(`${this.baseUrl}${endpoint}`);
    return response.json();
  }
}

// app.js - Mixed imports
import ApiClient, { formatDate, capitalize } from './utils.js';

const client = new ApiClient();
console.log(formatDate(new Date()));
console.log(capitalize("hello"));
```

**Optional Chaining (?.) - ES2020:**

Optional chaining allows safe access to deeply nested object properties without having to check each level for existence. If any part of the chain is `null` or `undefined`, it short-circuits and returns `undefined` instead of throwing an error.
This works with any property access, method calls, and array indexing.

```js
let user = {
  name: "Ali",
  address: {
    street: "123 Main St",
    city: "Istanbul"
  }
};

// Safe property access
console.log(user?.address?.street);    // "123 Main St"
console.log(user?.address?.zipCode);   // undefined (no error)
console.log(user?.phone?.number);      // undefined (no error)

// Method calls
user?.someMethod?.();                  // Won't error if someMethod doesn't exist

// Array access
console.log(user?.hobbies?.[0]);       // undefined (no error)
```

### 8.4 Other Important ES6+ Features

**Template Literals with Tags:**
```js
function highlight(strings, ...values) {
  return strings.reduce((result, string, i) => {
    const value = values[i] ? `<mark>${values[i]}</mark>` : '';
    return result + string + value;
  }, '');
}

const name = "Ali";
const age = 25;
const html = highlight`Hello ${name}, you are ${age} years old`;
// "Hello <mark>Ali</mark>, you are <mark>25</mark> years old"
```

**Enhanced Object Literals:**
```js
let name = "Ali";
let age = 25;

// Property shorthand
let user = { name, age }; // Instead of { name: name, age: age }

// Method shorthand
let calculator = {
  add(a, b) {        // Instead of add: function(a, b)
    return a + b;
  },
  
  multiply(a, b) {
    return a * b;
  }
};

// Computed property names
let property = "dynamicKey";
let obj = {
  [property]: "value",           // dynamicKey: "value"
  [`${property}_2`]: "value2"    // dynamicKey_2: "value2"
};
```


These ES6+ features make JavaScript code more concise, readable, and maintainable - essential skills for effective React Native development!

---

## **9. Asynchronous JavaScript**

JavaScript is **single-threaded**, but it handles long-running tasks (like API calls, file operations, timers) using asynchronous techniques. Understanding async programming is crucial for React Native development.

### 9.1 Understanding the Event Loop

JavaScript uses an event-driven, non-blocking model to handle asynchronous operations. The **event loop** is the mechanism that allows JavaScript to perform non-blocking operations by offloading tasks to the browser (or Node.js) and executing callbacks when those tasks complete.

For example we want to run a function after few seconds without blocking the main thread. look at the example below:

**The Problem:**
```js
console.log("Start");

// This would block the entire application for 3 seconds
// for (let i = 0; i < 3000000000; i++) {} // Don't do this!

console.log("End");
```

**The Solution - Asynchronous Operations:**

The above blocking code can be replaced with a non-blocking `setTimeout` function that runs after a delay without freezing the UI.

SetTimeout is an example of an asynchronous operation. It allows the main thread to continue executing while waiting for the timer to complete.
The `SetTimeout` function is taking two parameters:  
1. A callback function to execute after the delay.  
2. The delay in milliseconds (1000 ms = 1 second).  


```js
console.log("Start");

setTimeout(() => {
  console.log("This runs after 1 second");
}, 1000);

console.log("End");

// Output:
// "Start"
// "End"  
// "This runs after 1 second" (after 1 second)
```

**How It Works:**
1. **Call Stack**: Executes synchronous code
2. **Web APIs**: Handle timers, HTTP requests, DOM events
3. **Callback Queue**: Stores completed async operations
4. **Event Loop**: Moves callbacks from queue to call stack when stack is empty

### 9.2 Callbacks (The Old Way)

Callbacks are functions passed as arguments to other functions and are executed after an asynchronous operation completes. This was the traditional way to handle async tasks in JavaScript before Promises and async/await were introduced.

**Basic Callbacks:**
```js
function fetchUserData(userId, callback) {
  // Simulate API call
  setTimeout(() => {
    const user = { id: userId, name: "Ali", email: "ali@example.com" };
    callback(null, user); // Error-first callback pattern
  }, 1000);
}

fetchUserData(123, (error, user) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("User:", user);
  }
});
```

**Callback Hell (The Problem):**

The main issue with callbacks is "callback hell", where multiple nested callbacks make the code hard to read and maintain.
See how nested callbacks can get messy:


```js
// Nested callbacks become hard to read and maintain
fetchUser(userId, (error, user) => {
  if (error) {
    console.error(error);
  } else {
    fetchUserPosts(user.id, (error, posts) => {
      if (error) {
        console.error(error);
      } else {
        fetchPostComments(posts[0].id, (error, comments) => {
          if (error) {
            console.error(error);
          } else {
            // Finally have the data...
            console.log(comments);
          }
        });
      }
    });
  }
});
```

### 9.3 Promises (The Better Way)


A better way to handle asynchronous operations is using **Promises**. A Promise represents a value that may be available now, later, or never. It can be in one of three states: **pending**, **fulfilled**, or **rejected**.

- **Pending**: Initial state, neither fulfilled nor rejected
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed

**Creating Promises:**

Promises are created using the `Promise` constructor, which takes a function with two parameters: `resolve` and `reject`. You use `resolve` to indicate success and `reject` to indicate failure.

In the example below, we create a promise that simulates an asynchronous operation (like an API call) that randomly succeeds or fails after 1 second.



**Creating Promises:**
```js
// Basic Promise creation
let promise = new Promise((resolve, reject) => {
  let success = true;
  
  setTimeout(() => {
    if (success) {
      resolve("Operation completed successfully!");
    } else {
      reject(new Error("Operation failed"));
    }
  }, 1000);
});

// Using the promise
promise
  .then(result => {
    console.log("Success:", result);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });
```

Let's talk about the methods used with Promises:

- `resolve(value)` - This function is provided by the Promise constructor and is called when the asynchronous operation completes successfully. The `value` passed to `resolve` becomes the result of the promise.
- `reject(error)` - This function is also provided by the Promise constructor and is called when the asynchronous operation fails. The `error` passed to `reject` becomes the reason for the promise's rejection.
- `.then(onFulfilled, onRejected)` - Attaches callbacks for the fulfilled and rejected states. The `onFulfilled` function runs when the promise is resolved and uses the value that passed to the `resolve`, and `onRejected` runs when it's rejected and uses the error that passed to the `reject`. You can also chain multiple `.then()` calls.
- `.catch(onRejected)` - Attaches a callback for only the rejected state. It's a shorthand for `.then(null, onRejected)`.  



**Promise States:**
```js
// Pending: initial state, neither fulfilled nor rejected
// Fulfilled: operation completed successfully  
// Rejected: operation failed

let promise = new Promise((resolve, reject) => {
  // This promise is currently "pending"
  
  setTimeout(() => {
    resolve("Done!"); // Now it's "fulfilled"
    // OR
    // reject("Failed!"); // Now it's "rejected"
  }, 1000);
});
```

**Chaining Promises:**

In this example, we simulate multiple asynchronous operations using promises to see how we can chain them together.  
Each operation depends on the result of the previous one, and we chain them together using `.then()` for better readability.

```js
function fetchUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "Ali" });
    }, 500);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, title: "First Post" }, { id: 2, title: "Second Post" }]);
    }, 500);
  });
}

function fetchPostComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, text: "Great post!" }, { id: 2, text: "Thanks!" }]);
    }, 500);
  });
}

// Promise chaining - much cleaner than callbacks
fetchUser(123)
  .then(user => {
    console.log("Got user:", user);
    return fetchUserPosts(user.id);
  })
  .then(posts => {
    console.log("Got posts:", posts);
    return fetchPostComments(posts[0].id);
  })
  .then(comments => {
    console.log("Got comments:", comments);
  })
  .catch(error => {
    console.error("Something went wrong:", error);
  });
```

### 9.4 Async/Await (The Cleanest Way)

`async` and `await` are keywords built on top of Promises that allow you to write asynchronous code that looks and behaves like synchronous code. This makes it easier to read and maintain.

In an `async` function, you can use the `await` keyword before a promise to pause execution until the promise resolves. The function itself returns a promise.  
In example below, we have `fetchData` function that simulates fetching data asynchronously. The `data` variable will hold the resolved value of the promise once it completes, till then the function execution is paused. But even though the function is paused, the main thread is not blocked and can continue executing other code.

- *Important:* `await` can only be used inside `async` functions. If you use `await` at the top level (not inside a function), it will throw a syntax error. To use `await` at the top level, you can wrap your code in an immediately invoked async function expression (IIFE). If you forget to use `await` before a promise, the code will not wait for the promise to resolve, and you will get the promise object instead of its resolved value.  
- *Important-2:* If you assign an `async` function to a variable, that variable will hold a promise, not the actual return value of the function.


**Basic Async/Await:**
```js
// Function marked with 'async' always returns a Promise
async function fetchData() {
  // 'await' pauses execution until Promise resolves
  let data = await new Promise(resolve => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
  
  console.log(data); // "Data loaded" (after 1 second)
  return data; // This becomes the resolved value of the returned Promise
}

// Calling async function
fetchData().then(result => {
  console.log("Function returned:", result);
});
```

**Error Handling with Try/Catch:**
```js
async function fetchUserData(userId) {
  try {
    const user = await fetchUser(userId);
    const posts = await fetchUserPosts(user.id);
    const comments = await fetchPostComments(posts[0].id);
    
    return { user, posts, comments };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error; // Re-throw if needed
  }
}

// Using the async function
async function main() {
  try {
    const data = await fetchUserData(123);
    console.log("All data:", data);
  } catch (error) {
    console.error("Main error handler:", error);
  }
}

main();
```


Understanding asynchronous JavaScript is essential for building responsive React Native apps that can handle network requests, user interactions, and background operations without freezing the UI!

---


### 9.6 Common Async Patterns and Pitfalls

**Pitfall: Forgetting to Handle Errors:**
```js
// Bad - no error handling
async function badExample() {
  const data = await fetch('/api/data'); // Could throw error
  return data.json();
}

// Good - proper error handling
async function goodExample() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error; // Or handle appropriately
  }
}
```

**Pitfall: Mixing Promises and Async/Await:**
```js
// Confusing mix - avoid this
async function mixedExample() {
  return fetch('/api/data')
    .then(response => response.json())
    .then(async (data) => {
      const processed = await processData(data);
      return processed;
    });
}

// Clean async/await - prefer this
async function cleanExample() {
  const response = await fetch('/api/data');
  const data = await response.json();
  const processed = await processData(data);
  return processed;
}
```

**Pattern: Timeout for Long Operations:**
```js
function withTimeout(promise, timeoutMs) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Operation timed out')), timeoutMs);
  });
  
  return Promise.race([promise, timeout]);
}

// Usage
try {
  const data = await withTimeout(
    fetch('/slow-api-endpoint'),
    5000 // 5 second timeout
  );
} catch (error) {
  if (error.message === 'Operation timed out') {
    console.log('Request took too long');
  }
}
```


## **10. Common Pitfalls and Best Practices**

Understanding common JavaScript pitfalls and following best practices will help you write more reliable and maintainable React Native applications.

### 10.1 Common Pitfalls

**1. Type Coercion Surprises:**
```js
// Unexpected results
console.log("10" + 5);      // "105" (string concatenation)
console.log("10" - 5);      // 5 (numeric subtraction)
console.log([] + []);       // "" (empty string)
console.log([] + {});       // "[object Object]"
console.log({} + []);       // "[object Object]"

// Comparison gotchas
console.log(null == undefined);   // true
console.log(null === undefined);  // false
console.log(0 == false);          // true
console.log("" == false);         // true
console.log([] == false);         // true (!!)

// Solution: Always use strict equality
if (value === null || value === undefined) {
  // Handle null/undefined
}
// Or use nullish coalescing
const result = value ?? "default value";
```

**2. `this` Binding Issues:**
```js
const obj = {
  name: "Ali",
  
  // Problem: 'this' changes in different contexts
  greet: function() {
    console.log(`Hello, ${this.name}`);
    
    setTimeout(function() {
      console.log(`Delayed hello, ${this.name}`); // 'this' is undefined!
    }, 1000);
  },
  
  // Solution 1: Arrow functions inherit 'this'
  greetFixed: function() {
    console.log(`Hello, ${this.name}`);
    
    setTimeout(() => {
      console.log(`Delayed hello, ${this.name}`); // Works!
    }, 1000);
  },
  
  // Solution 2: Bind 'this'
  greetBound: function() {
    console.log(`Hello, ${this.name}`);
    
    setTimeout(function() {
      console.log(`Delayed hello, ${this.name}`);
    }.bind(this), 1000);
  }
};
```

**3. Hoisting Confusion:**
```js
// Var hoisting can cause issues
console.log(hoisted); // undefined (not ReferenceError!)
var hoisted = "I'm hoisted";

// Function hoisting
sayHello(); // Works!

function sayHello() {
  console.log("Hello!");
}

// But function expressions aren't hoisted
// sayGoodbye(); // Error!
var sayGoodbye = function() {
  console.log("Goodbye!");
};

// Solution: Use let/const and declare before use
```

**4. Closure Memory Leaks:**
```js
// Problematic: closures can keep references alive
function createHandlers() {
  const largeData = new Array(1000000).fill("data");
  
  return {
    handler: function() {
      // This closure keeps largeData in memory even if unused
      console.log("Handler called");
    }
  };
}

// Solution: Be mindful of what closures capture
function createHandlersBetter() {
  const largeData = new Array(1000000).fill("data");
  
  // Only capture what you need
  const importantData = largeData.slice(0, 10);
  
  return {
    handler: function() {
      console.log("Handler called", importantData.length);
    }
  };
}
```

**5. Mutating Objects/Arrays Unexpectedly:**
```js
// Problem: Modifying original data
const users = [{ name: "Ali", age: 25 }];
const updatedUsers = users;
updatedUsers[0].age = 26; // Modifies original!

console.log(users[0].age); // 26 - original was changed!

// Solution: Create copies
const usersCopy = users.map(user => ({ ...user })); // Deep copy for objects
const usersCopyShallow = [...users]; // Shallow copy
```

**6. Async/Await Error Handling:**
```js
// Problem: Forgetting try/catch
async function fetchData() {
  const response = await fetch('/api/data'); // Can throw
  const data = await response.json(); // Can throw
  return data;
}

// Solution: Always wrap in try/catch
async function fetchDataSafe() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch failed:', error);
    throw error; // Re-throw or handle appropriately
  }
}
```

### 10.2 Best Practices

**1. Variable Declaration:**
```js
//  Good: Use const by default
const userName = "Ali";
const userAge = 25;
const users = [];

//  Good: Use let when reassignment is needed
let counter = 0;
for (let i = 0; i < 10; i++) {
  counter += i;
}

//  Avoid: var has confusing scope rules
// var oldStyle = "avoid this";
```

**2. Function Definitions:**
```js
//  Good: Use arrow functions for callbacks and short functions
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);

//  Good: Use regular functions for methods and when you need 'this'
const calculator = {
  total: 0,
  
  add(value) {
    this.total += value;
    return this;
  },
  
  getTotal() {
    return this.total;
  }
};

//  Good: Use async/await instead of Promise chains
async function loadUserData(userId) {
  try {
    const user = await fetchUser(userId);
    const posts = await fetchPosts(userId);
    return { user, posts };
  } catch (error) {
    console.error('Failed to load user data:', error);
    throw error;
  }
}
```

**3. Object and Array Handling:**
```js
//  Good: Use destructuring
const user = { name: "Ali", age: 25, city: "Istanbul" };
const { name, age } = user;

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

//  Good: Use spread operator for copying
const userCopy = { ...user };
const numbersCopy = [...numbers];

//  Good: Use array methods instead of loops
const adults = users.filter(user => user.age >= 18);
const userNames = users.map(user => user.name);
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
```

**4. Error Handling:**
```js
//  Good: Handle errors at appropriate levels
class UserService {
  static async getUser(id) {
    try {
      const response = await fetch(`/api/users/${id}`);
      if (!response.ok) {
        throw new Error(`User not found: ${id}`);
      }
      return await response.json();
    } catch (error) {
      console.error('UserService.getUser failed:', error);
      throw error; // Let caller decide how to handle
    }
  }
}

// In React Native component
const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        setError(null);
        const userData = await UserService.getUser(userId);
        setUser(userData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    loadUser();
  }, [userId]);
  
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!user) return <Text>No user found</Text>;
  
  return <UserDetails user={user} />;
};
```

**5. Code Organization:**
```js
//  Good: Organize code into modules
// utils/validation.js
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 8 && 
         /[A-Z]/.test(password) && 
         /[a-z]/.test(password) && 
         /[0-9]/.test(password);
};

// services/api.js
class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  
  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };
    
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    return response.json();
  }
  
  get(endpoint) {
    return this.request(endpoint);
  }
  
  post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

export const apiClient = new ApiClient('https://api.myapp.com');
```

**6. Performance Considerations:**
```js
//  Good: Avoid unnecessary re-renders in React Native
const ExpensiveComponent = React.memo(({ data, onPress }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      formatted: formatExpensiveData(item)
    }));
  }, [data]);
  
  const handlePress = useCallback((item) => {
    onPress(item);
  }, [onPress]);
  
  return (
    <FlatList
      data={processedData}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item)}>
          <Text>{item.formatted}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
    />
  );
});

//  Good: Debounce expensive operations
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
};

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  
  useEffect(() => {
    if (debouncedSearchTerm) {
      performSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);
  
  return (
    <TextInput
      value={searchTerm}
      onChangeText={setSearchTerm}
      placeholder="Search..."
    />
  );
};
```


Following these practices will help you write more reliable, maintainable, and performant React Native applications!

---

## **11. Summary**

In this comprehensive JavaScript and ES6 overview, we covered all the essential concepts needed for effective React Native development:

### **Core JavaScript Fundamentals:**
* **Variables and Data Types**: Understanding `let`, `const`, and `var`, along with JavaScript's 7 primitive types and objects
* **Type System**: How JavaScript handles dynamic typing, type coercion, and the difference between loose (`==`) and strict (`===`) equality
* **Truthy/Falsy Values**: The 8 falsy values and how JavaScript evaluates conditions
* **Operators**: Arithmetic, assignment, comparison, and logical operators with their nuances and best practices

### **Working with Data:**
* **Strings**: Creation, manipulation, template literals, and useful methods for text processing
* **Objects**: Creation methods, property access, methods, and the importance of objects in React Native
* **Arrays**: Essential array methods (`map`, `filter`, `reduce`, `find`, etc.) that are crucial for data manipulation in mobile apps

### **Control Flow and Functions:**
* **Conditional Logic**: `if/else`, `switch` statements, and ternary operators for decision-making
* **Loops**: Different iteration methods and when to use each approach
* **Functions**: Declarations, expressions, arrow functions, and their differences (especially `this` binding)
* **Advanced Function Concepts**: Default parameters, rest/spread operators, and higher-order functions

### **Modern ES6+ Features:**
* **Destructuring**: Extracting values from objects and arrays cleanly
* **Spread/Rest Operators**: For copying, combining, and handling variable arguments
* **Modules**: Import/export for code organization and reusability
* **Enhanced Object Literals**: Shorthand properties, methods, and computed property names
* **Optional Chaining**: Safe property access to prevent runtime errors

### **Asynchronous JavaScript:**
* **Event Loop**: Understanding how JavaScript handles async operations
* **Promises**: Creating and chaining promises for better async code organization
* **Async/Await**: The modern, clean approach to handling asynchronous operations
* **Real-world Patterns**: API calls, error handling, and async patterns specific to React Native

### **Best Practices and Pitfalls:**
* **Common Mistakes**: Type coercion issues, `this` binding problems, and closure memory leaks
* **Code Quality**: Proper variable declaration, function usage, and error handling
* **React Native Specific**: Performance optimization, platform handling, and mobile-specific patterns

### **Why This Matters for React Native:**
Every concept covered here directly applies to React Native development:
- **State Management**: Objects and arrays for component state
- **Event Handling**: Functions and arrow functions for user interactions  
- **API Integration**: Async/await for network requests
- **Data Transformation**: Array methods for processing API responses
- **Code Organization**: Modules for structuring larger applications
- **Performance**: Understanding closures and references for optimization

### **Next Steps:**
With this JavaScript foundation, you're ready to:
1. **Learn React fundamentals**: Components, props, state, and lifecycle methods
2. **Dive into React Native**: Mobile-specific components, navigation, and native features
3. **Build real applications**: Combining these concepts to create functional mobile apps
4. **Advanced topics**: State management (Redux/Context), testing, and deployment

This JavaScript knowledge forms the backbone of everything you'll do in React Native development. Practice these concepts regularly, and always refer back to these fundamentals when facing complex mobile development challenges!

---