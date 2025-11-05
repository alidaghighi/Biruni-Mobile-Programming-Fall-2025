# Mobile Programming

# **React Essentials**

---

## **1. React Overview & Why It Matters**

### **1.1 What is React?**

**React** is a JavaScript library created by Facebook (now Meta) for building user interfaces.
It was first released in 2013 to help developers build fast, dynamic, and reusable web applications.

Unlike traditional web frameworks that directly manipulate the HTML **Document Object Model (DOM)**, React introduces a new way of thinking:

> “Describe what the UI should look like, and React will take care of updating it efficiently.”

React doesn’t try to control your whole application — it focuses purely on the **view layer**, i.e., how things look and behave on the screen.

---

### **1.2 The Core Idea: Declarative UI**

Traditionally, building interfaces required **imperative programming** — telling the computer *how* to update the UI step by step.

Example (imperative):

```js
// Vanilla JavaScript
const button = document.querySelector("#btn");
let count = 0;
button.addEventListener("click", () => {
  count++;
  button.textContent = `Clicked ${count} times`;
});
```

In React, you describe **what the UI should look like** for a given state, and React handles the updates automatically.

Example (declarative):

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

You’re not manually changing text or HTML; you simply tell React:

> “If the state is X, render this UI.”

This approach makes the code **easier to reason about** and **less prone to bugs**.

---

### **1.3 The Building Block: Components**

At the heart of React is the concept of **components**.

A **component** is a small, reusable piece of UI — like a button, form, or header — that can be combined with others to build complex interfaces.

* Each component:

  * Has its own logic (written in JavaScript)
  * Returns its own UI (written using JSX)
  * Can maintain its own data (state)

Example components might include:

* `<Button />`
* `<UserProfile />`
* `<TodoItem />`

React applications are built by **composing components** together, like Lego blocks, to create the full user interface.

---

### **1.4 Why React Became Popular**

React quickly gained popularity because of several key features:

| Feature                      | Description                                                        |
| ---------------------------- | ------------------------------------------------------------------ |
| **Reusable Components**      | Build once, reuse anywhere. Makes maintenance easier.              |
| **Declarative Syntax**       | Focus on what the UI should look like, not how to update it.       |
| **Virtual DOM**              | React updates only what’s necessary, improving performance.        |
| **Unidirectional Data Flow** | Data moves one way (top → down), making state changes predictable. |
| **Strong Ecosystem**         | Supported by a huge community and countless tools/libraries.       |

---

### **1.5 From React to React Native**

React was originally built for the **web**, but the same ideas — components, state, props, and hooks — are equally powerful in mobile development.

**React Native** uses React’s principles but renders components using **native mobile UI elements** instead of HTML.

| React (Web)                                                 | React Native (Mobile)                                                   |
| ----------------------------------------------------------- | ----------------------------------------------------------------------- |
| Renders to the DOM (HTML elements like `<div>` or `<span>`) | Renders to native mobile components like `<View>`, `<Text>`, `<Button>` |
| Uses CSS for styling                                        | Uses JavaScript-based `StyleSheet`                                      |
| Runs in the browser                                         | Runs on Android/iOS via a bridge to native code                         |

So when you learn React, you’re really learning the **core foundation** of React Native.

---

## **2. JSX & Components**

### **2.1 What Is JSX?**

**JSX (JavaScript XML)** is a special syntax used in React that lets you **write HTML-like code inside JavaScript**.

It makes it easier to visualize your user interface while still giving you the full power of JavaScript.

Example:

```jsx
const element = <h1>Hello, world!</h1>;
```

JSX looks like HTML, but it’s actually **syntactic sugar** — React turns it into JavaScript behind the scenes.

Under the hood, the example above is equivalent to:

```js
const element = React.createElement('h1', null, 'Hello, world!');
```

**In short:** JSX is not HTML — it’s JavaScript that *looks* like HTML.

---

### **Why JSX?**

1. **Visual clarity:** You can see what your UI looks like directly in code.
2. **Integration:** You can embed JavaScript logic (e.g., variables, conditions) directly inside `{}` braces.
3. **Type safety:** Errors are caught early by tools (like ESLint or TypeScript).

---

### **2.2 Writing JSX Correctly**

JSX has a few special **rules** that differ from HTML:

| Rule                                  | Example                                        | Note                                                |
| ------------------------------------- | ---------------------------------------------- | --------------------------------------------------- |
| Must return **one root element**      | `<div><h1>Hello</h1><p>World</p></div>`        | You cannot return multiple siblings side by side.   |
| Use **className** instead of `class`  | `<div className="container">...</div>`         | Because `class` is a reserved JavaScript keyword.   |
| Use **camelCase** for attributes      | `<button onClick={handleClick}>Click</button>` | `onClick`, not `onclick`.                           |
| JavaScript expressions go inside `{}` | `<p>{username}</p>`                            | Works for variables, functions, or logic.           |
| The name of components must start with a capital letter | `<MyComponent />`            | Lowercase names are treated as HTML tags.           |

Example:

```jsx
function Welcome() {
  const name = "Alex";
  return <h2>Welcome, {name}!</h2>;
}
```

---

### **2.3 What Is a Component?**

A **component** is the fundamental building block in React.
It’s a **function** (or sometimes a class, though we focus only on functions) that:

* Takes **input data** (called *props*), and
* Returns **JSX** (what should appear on screen).

Basic example:

```jsx
function Hello() {
  return <h1>Hello React!</h1>;
}
```

To use this component, you can write:

```jsx
function App() {
  return (
    <div>
      <Hello />
      <Hello />
    </div>
  );
}
```

Here, `<Hello />` is used like an HTML tag — but it’s a **custom component** you defined yourself!

---

### **2.4 Function Components in Detail**

Let’s build a slightly more dynamic component.

```jsx
function Greeting() {
  const user = "Siti";
  return <p>Hello, {user}! Welcome back.</p>;
}
```

**How it works:**

* The component is a plain JavaScript function.
* The function’s name must start with a **capital letter** (important!).
* Whatever JSX is returned becomes the UI for that component.

If you name it with lowercase (like `function greeting()`), React will think it’s a regular HTML tag — not your component.

---

### **2.5 Combining Components**

Components can contain **other components**, forming a tree-like structure.

Example:

```jsx
function Header() {
  return <h1>My App</h1>;
}

function Footer() {
  return <footer>© 2025 My App</footer>;
}

function App() {
  return (
    <div>
      <Header />
      <p>This is the main content area.</p>
      <Footer />
    </div>
  );
}
```

This is called **composition**, and it’s how large applications are built — by nesting many small, reusable components together.

---

### **2.6 Component File Structure**

A simple React project usually follows this pattern:

```
src/
  App.js          → Root component
  index.js        → Entry point (renders <App />)
  components/
    Header.js
    Footer.js
    Button.js
```

Each component:

* Lives in its own file.
* Is exported for use elsewhere.

Example:

```jsx
// Header.js
export default function Header() {
  return <h1>Welcome to My App</h1>;
}
```

Then in `App.js`:

```jsx
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <p>Content goes here.</p>
    </div>
  );
}
```

---

## **3. Props**


### **3.1 What Are Props?**

The word **“props”** stands for **properties**.
Props are the way you **pass data** from one component (the *parent*) to another (the *child*).

Think of props like **function parameters** — they allow components to receive data and display it differently depending on the input.

Example:

```jsx
function Welcome(props) {
  return <h2>Hello, {props.name}!</h2>;
}

function App() {
  return (
    <div>
      <Welcome name="Ali" />
      <Welcome name="Siti" />
    </div>
  );
}
```

**What happens here:**

* The `App` component calls the `Welcome` component twice.
* Each call passes a different value for the `name` prop.
* `Welcome` receives it as a parameter (`props`) and displays it.

**Output:**

```
Hello, Ali!
Hello, Siti!
```

---

### **3.2 How Props Work**

Let’s visualize this:

```
Parent Component (App)
        |
        ├── passes name="Ali" → <Welcome name="Ali" />
        └── passes name="Siti" → <Welcome name="Siti" />

Child Component (Welcome)
        ↓
     uses props.name inside JSX
```

Props flow **from parent to child** — **never the other way around**.
This one-way direction of data is known as **unidirectional data flow**, and it’s one of React’s key principles.

---

### **3.3 Using Destructuring for Props**

Writing `props.name` repeatedly can be verbose.
We can use **object destructuring** to simplify the syntax.

Example:

```jsx
function Welcome({ name }) {
  return <h2>Hello, {name}!</h2>;
}
```

This means:

```js
// Equivalent to:
function Welcome(props) {
  const name = props.name;
  ...
}
```

Destructuring is especially useful when your component receives multiple props.

Example:

```jsx
function Profile({ name, course, year }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Course: {course}</p>
      <p>Year: {year}</p>
    </div>
  );
}

function App() {
  return (
    <Profile name="John Doe" course="Mobile Programming" year="2025" />
  );
}
```

---

### **3.4 Passing Different Types of Props**

Props can be **any kind of data**, not just text:

| Type     | Example                                    | Description             |
| -------- | ------------------------------------------ | ----------------------- |
| String   | `<Title text="Hello" />`                   | Textual data            |
| Number   | `<Score value={99} />`                     | Numbers must be in `{}` |
| Boolean  | `<Button disabled={true} />`               | Boolean flags           |
| Object   | `<User data={{ name: "Ali", age: 21 }} />` | Complex data            |
| Function | `<Button onClick={handleClick} />`         | Event handlers          |
| JSX      | `<Card content={<p>Hello</p>} />`          | Pass another component! |

Example:

```jsx
function Button({ label, onPress }) {
  return <button onClick={onPress}>{label}</button>;
}

function App() {
  function sayHello() {
    alert("Hello from props!");
  }

  return <Button label="Click Me" onPress={sayHello} />;
}
```

Here, the **parent passes a function** as a prop to the **child**, allowing child components to trigger parent-defined actions — a very common React pattern.

---

### **3.5 Default Props (Optional)**

Sometimes you want a component to have a **default value** if a prop isn’t provided.

Example:

```jsx
function Greeting({ name = "Guest" }) {
  return <h3>Hello, {name}!</h3>;
}

function App() {
  return (
    <>
      <Greeting name="Ahmad" />
      <Greeting />
    </>
  );
}
```

**Output:**

```
Hello, Ahmad!
Hello, Guest!
```

---

### **3.7 Common Pitfalls**

1.  **Modifying props inside a child component**

   ```jsx
   props.name = "New Name"; // WRONG
   ```

   Props are **read-only** — React will warn you if you try to change them.

2.  **Forgetting curly braces for JavaScript values**

   ```jsx
   <Card title="Title" score=100 /> // WRONG
   <Card title="Title" score={100} /> // CORRECT
   ```

3.  **Props flow downward only** — data moves from parent to child.

---

## **4. State (useState)**

### **4.1 What Is “State”?**

So far, your components have been **static** — they display information but don’t change on their own.
In real apps, though, we need components that **remember information** and **update when things change** — such as user input, toggles, or counts.

That’s where **state** comes in.

> **State** represents *mutable data* that belongs to a specific component.
> When the state changes, the component re-renders with the new data.

---

### **4.2 Introducing useState**

In modern React (and React Native), we use the **useState Hook** to manage state in *function components*.

A **Hook** is just a special function that lets you “hook into” React features like state and lifecycle behavior.

**Basic syntax:**

```jsx
import { useState } from "react";

const [stateVariable, setStateFunction] = useState(initialValue);
```

* `stateVariable` → holds the current state value.
* `setStateFunction` → updates that value.
* `initialValue` → the default state when the component first renders.

---

### **4.3 Example: A Simple Counter**

Let’s create a simple counter app.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // initial value = 0

  function increase() {
    setCount(count + 1); // update state
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
}
```

**How it works:**

1. `useState(0)` creates a variable `count` with an initial value of 0.
2. The `setCount()` function changes that value.
3. When `setCount()` is called, React **automatically re-renders** the component — showing the new `count`.

**Key takeaway:** You never change state directly.
`count++` (wrong)
`setCount(count + 1)` (correct)

---

### **4.4 State Changes Cause Re-Renders**

React automatically updates the UI when the state changes.

When you click the button:

1. `setCount()` changes the state.
2. React re-runs the `Counter()` function.
3. The new `count` value is displayed on screen.

You don’t need to manually re-render or refresh anything — React handles it behind the scenes.

---

### **4.5 Updating State in Different Ways**

You can also update state **using the previous value**, especially when multiple updates might happen quickly.

Example:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  function increaseTwice() {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increaseTwice}>+2</button>
    </>
  );
}
```

Here, we use a **function inside `setCount()`** so React always uses the latest state value.

---

### **4.6 Managing Multiple State Values**

You can call `useState()` multiple times for different pieces of data.

Example:

```jsx
function UserInfo() {
  const [name, setName] = useState("Ali");
  const [age, setAge] = useState(20);

  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <button onClick={() => setAge(age + 1)}>Birthday!</button>
    </div>
  );
}
```

Each call to `useState()` is **independent** — you can manage as many pieces of data as needed in a single component.

---

### **4.7 Example: Toggling State**

State can also be used for simple UI toggles.

```jsx
function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function toggleSwitch() {
    setIsOn(!isOn);
  }

  return (
    <button onClick={toggleSwitch}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}
```

**Explanation:**

* `isOn` holds a boolean value (true/false).
* Each button click flips the value.
* React re-renders the button text accordingly.

This simple pattern — *store something in state, render it, change it on interaction* — is used constantly in both React and React Native.

---

### **4.8 State vs Props**

It’s easy to confuse **props** and **state**, so here’s a simple comparison:

| Aspect     | Props                          | State                                   |
| ---------- | ------------------------------ | --------------------------------------- |
| Definition | Data passed *into* a component | Data managed *inside* a component       |
| Mutability | Read-only                      | Can change via set function             |
| Owner      | Parent component               | The component itself                    |
| Use case   | Configuration, inputs          | Dynamic, interactive data               |
| Example    | `<Greeting name="Ali" />`      | `const [count, setCount] = useState(0)` |

You’ll use **props** to pass data **in**, and **state** to handle data **inside** a component.

---

### **4.9 Common Mistakes with useState**

| Mistake                             | Why It’s Wrong                     | Correct Way                                             |
| ----------------------------------- | ---------------------------------- | ------------------------------------------------------- |
| Modifying state directly: `count++` | Doesn’t trigger re-render          | Use `setCount(count + 1)`                               |
| Forgetting to import `useState`     | React won’t recognize the Hook     | `import { useState } from 'react'`                      |
| Setting wrong initial type          | Can cause runtime bugs             | Match your data type (e.g., `useState([])` for arrays)  |
| Expecting immediate update          | State updates are **asynchronous** | Don’t rely on state changing immediately after setState |

---

## **5. Rendering & Component Tree**


### **Learning Objectives**

By the end of this section, you should be able to:

* Understand how React **renders** components to create a user interface.
* Visualize the **component tree** and how parent–child relationships work.
* Explain how **state or props changes** trigger re-rendering.
* Recognize what the **Virtual DOM** is and why it improves performance.
* See how these concepts apply similarly in **React Native**.

---

### **5.1 What Does “Rendering” Mean in React?**

In web development, **rendering** means *showing something on the screen*.

In React, rendering happens when:

1. The app starts — React displays components for the first time.
2. Data changes (via **state** or **props**) — React updates only the parts that changed.

When you write:

```jsx
function App() {
  return <h1>Hello React!</h1>;
}
```

React reads your component, translates its **JSX** into elements, and renders it to the screen.

But how does React decide what to draw and when to update it?
→ That’s where the **component tree** and **Virtual DOM** come in.

---

### **5.2 The Component Tree**

Every React app can be visualized as a **tree of components**.
Each component can have **child components**, which in turn can have their own children.

For example:

```jsx
function Header() {
  return <h1>My App</h1>;
}

function Footer() {
  return <footer>© 2025 My App</footer>;
}

function App() {
  return (
    <div>
      <Header />
      <p>Welcome to my app!</p>
      <Footer />
    </div>
  );
}
```

**Component Tree:**

```
App
├── Header
├── <p>Welcome to my app!</p>
└── Footer
```

Each node in the tree represents a component instance.
When React renders the app, it starts at the **root** (`App`) and works downward.

---

### **5.3 The Root of the React App**

Every React project starts by **rendering one root component** — often called `App`.

In a web React app, it looks like this (inside `index.js`):

```jsx
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

* `ReactDOM.createRoot()` connects React to the real HTML page.
* `<App />` is the root component of your app.
* Everything else you see on screen comes from components inside `<App />`.

In **React Native**, this concept is the same — except instead of `ReactDOM`, it renders to a **mobile UI** (using native views rather than HTML).

---

### **5.4 Virtual DOM: How React Updates Efficiently**

When something changes (for example, you call `setState`), React needs to update the UI.
But instead of re-drawing the whole page, React uses a **Virtual DOM** to figure out what’s changed.

**Virtual DOM** = a lightweight copy of the real DOM that React keeps in memory.

Here’s how it works:

1. React builds a **virtual representation** of the UI.
2. When state/props change, React builds a **new** virtual DOM.
3. React compares the **old** and **new** versions (a process called **reconciliation**).
4. React updates **only the parts that actually changed** on screen.

Example:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
```

When you click “Add”:

* Only the `<h2>` element changes.
* The `<button>` stays the same.
* React updates **just that one element**, saving performance.

**In React Native**, the concept is identical — React compares what the UI *should* look like and updates only the affected native components.

---

### **5.5 When Does React Re-Render a Component?**

A component re-renders when:

1. Its **state changes** (via `useState` or other hooks).
2. Its **props change** (because the parent passed new data).
3. Its **parent re-renders**, causing it to re-render too.

Example:

```jsx
function Child({ value }) {
  console.log("Child re-rendered");
  return <p>{value}</p>;
}

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child value={count} />
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
```

Each time the button is clicked:

* The parent’s `count` state changes.
* The parent re-renders.
* The `Child` component gets new props and also re-renders.

React does all this automatically and efficiently.

---

### **5.6 Re-Rendering vs Re-Mounting**

These are two terms students often mix up:

| Term             | Meaning                                               | Example                           |
| ---------------- | ----------------------------------------------------- | --------------------------------- |
| **Re-rendering** | React calls the component again to produce updated UI | Happens when state/props change   |
| **Mounting**     | When a component appears on screen for the first time | Happens once when app loads       |
| **Unmounting**   | When a component is removed from the UI               | Example: hiding a modal or screen |

Example for visualization:

* You click “Show Details” → component **mounts**
* You update data → component **re-renders**
* You click “Hide Details” → component **unmounts**

---

### **5.7 Why Component Trees Matter**

Understanding the **tree structure** helps you:

* Predict how **data flows** (props go down the tree).
* Know which components **own state** and which just display data.
* Debug re-renders (e.g., if too many children re-render unnecessarily).
* Transition easily into **React Native navigation**, where each screen is a component in a tree.

In React Native, the component tree maps directly to **native views** (screens, buttons, images, etc.), maintaining the same parent–child relationships.

---

### **5.8 Visualization Example**

Imagine this app:

```jsx
function Header() { return <h1>Header</h1>; }
function Content() { return <p>Main content</p>; }
function Footer() { return <p>Footer</p>; }

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
```

**Component Tree:**

```
App
 ├── Header
 ├── Content
 └── Footer
```

If we later add a `useState` in `Content` that changes data, **only that branch** of the tree re-renders.
This is how React stays fast — it’s selective.

---

### **5.9 React Rendering Flow Summary**

1. **Initial render** → React builds and displays the UI for the first time.
2. **State or props change** → React creates a new Virtual DOM tree.
3. **Diffing/reconciliation** → React compares old and new trees.
4. **DOM (or native view) update** → React updates only what changed.
5. **Re-render** → Component functions run again to reflect the new data.

---

---

## **6. Quick Review**

#### React Overview

* React is a **JavaScript library** for building **user interfaces**.
* It’s **declarative**: you describe *what* the UI should look like, and React figures out *how* to render it.
* It’s **component-based**: apps are built from small, reusable pieces.
* **React Native** uses the same principles, but renders to **mobile views** instead of a web browser.

---

#### JSX & Components

* **JSX** = JavaScript + XML-like syntax for describing UI elements.
* Components are just **functions** that return JSX.
* Example:

  ```jsx
  function Welcome() {
    return <h1>Hello!</h1>; // In RN, it’ll be <Text>, not <h1>
  }
  ```
* Components can be **nested**, **reused**, and **composed** together.

---

#### Props

* **Props** are read-only data passed from a parent to a child.
* They make components reusable and dynamic.
* Example:

  ```jsx
  function Greeting({ name }) {
    return <p>Hello, {name}!</p>;
  }
  ```

  In React Native, this becomes:

  ```jsx
  function Greeting({ name }) {
    return <Text>Hello, {name}!</Text>;
  }
  ```

---

#### State (`useState`)

* **State** is internal data that can change over time.
* When state changes, React **re-renders** the component.
* Example:

  ```jsx
  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </>
    );
  }
  ```

---

#### Rendering & Component Tree

* Components form a **tree structure**.
* **Parent → child** data flow through props.
* React maintains a **Virtual DOM** to efficiently update the screen.
* Only the parts of the tree that change are **re-rendered**.

---

### How These Apply to React Native

| React Concept | React Native Equivalent                           | Key Similarities                                                               |
| ------------- | ------------------------------------------------- | ------------------------------------------------------------------------------ |
| JSX           | JSX (same syntax)                                 | Still uses component-based UI.                                                 |
| Components    | Components (e.g., `<View>`, `<Text>`, `<Button>`) | Same structure, different building blocks.                                     |
| Props         | Props                                             | Identical mechanism.                                                           |
| State         | State (`useState`)                                | Works the same.                                                                |
| Rendering     | Native UI updates                                 | React still re-renders efficiently, but via native views instead of DOM nodes. |

---

## **7. Component Composition**

### **7.1 What Is Component Composition?**

Composition means **building complex things from smaller, simpler pieces**.
In React, composition is how you create entire interfaces from small, reusable components.

Think of it like building with LEGO® bricks:

* Each brick (component) is independent.
* You can combine them in different ways to make unique structures.
* If one brick changes, you can replace it without rebuilding the whole thing.

---

### **7.2 Why Use Composition?**

Composition helps you:

1. **Re-use** code instead of copying and pasting.
2. **Organize** large UIs into logical parts.
3. **Make changes safely** — modifying one component doesn’t break others.
4. **Collaborate** better — each developer can work on a different component.

---

### **7.3 Example: Composing Simple Components**

Let’s start with three simple components: `Header`, `Main`, and `Footer`.

```jsx
function Header() {
  return <h1>My App</h1>;
}

function Main() {
  return <p>Welcome to my first React app!</p>;
}

function Footer() {
  return <small>© 2025 My Company</small>;
}
```

We can **compose** them into a full app:

```jsx
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
```

When React renders `<App />`, it also renders everything inside — creating a **component tree**.

```
App
 ├── Header
 ├── Main
 └── Footer
```

**In React Native**, this same pattern applies:

```jsx
function App() {
  return (
    <View>
      <Header />
      <Main />
      <Footer />
    </View>
  );
}
```

Only the UI components (`<View>`, `<Text>`) change — the **composition logic** is identical.

---

### **7.4 Passing Data Between Components**

Composition often involves **passing data** down through props.

Example:

```jsx
function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}
```

Here, `App` is the **parent**, and each `Greeting` is a **child**.
The parent passes **props** (`name`) to each child, making it reusable and dynamic.

---

### **7.5 Example: Combining Data and Structure**

Let’s say we have a `UserCard` component that displays a user profile:

```jsx
function UserCard({ name, age }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}
```

We can compose it inside a `UserList` component that shows multiple users:

```jsx
function UserList() {
  return (
    <div>
      <UserCard name="Alice" age={24} />
      <UserCard name="Bob" age={28} />
      <UserCard name="Charlie" age={32} />
    </div>
  );
}
```

And then include it in `App`:

```jsx
function App() {
  return (
    <div>
      <h1>User Directory</h1>
      <UserList />
    </div>
  );
}
```

**How this maps to React Native:**

```jsx
function UserCard({ name, age }) {
  return (
    <View style={{ margin: 10 }}>
      <Text>{name}</Text>
      <Text>Age: {age}</Text>
    </View>
  );
}
```

→ The component logic (props, hierarchy) stays the same — only presentation changes.

---

### **7.6 Components Inside Components**

You can nest components deeply to organize your UI logically.

Example:

```jsx
function Header() {
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
}

function Logo() {
  return <h2>MyBrand</h2>;
}

function Navigation() {
  return (
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <p>Main content goes here</p>
      </main>
    </div>
  );
}
```

This structure scales naturally as your app grows — just like screen layouts in React Native.

---

### **7.7 Composition vs Inheritance**

In traditional object-oriented programming, you might use **inheritance** to share behavior.
In React, you **compose** components instead.

React’s philosophy:

> “**Composition over inheritance.**”

This means:

* You don’t extend components using `class Child extends Parent`.
* You pass data or even **other components** as props.

Example:

```jsx
function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

function App() {
  return (
    <Card title="Profile">
      <p>Name: Alice</p>
      <p>Age: 25</p>
    </Card>
  );
}
```

Here, the **Card** component wraps whatever content is passed inside it using `{children}` — a very common and powerful composition pattern.

**In React Native**, `{children}` is heavily used to compose screen layouts:

```jsx
<View style={styles.container}>
  <Header />
  <Content />
  <Footer />
</View>
```

---

### **7.8 Organizing Components in a Real Project**

For larger apps, you’ll often separate components into files:

```
src/
 ├── components/
 │    ├── Header.js
 │    ├── Footer.js
 │    ├── UserCard.js
 │    └── UserList.js
 └── App.js
```

Then import them:

```jsx
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserList from "./components/UserList";

function App() {
  return (
    <div>
      <Header />
      <UserList />
      <Footer />
    </div>
  );
}
```

React Native uses the same structure:

* Each screen and UI part can be a separate file.
* You compose screens from smaller components like `<Button>`, `<View>`, `<Image>`, etc.

---

### **7.9 Best Practices for Composition**

| Practice                            | Description                                                                |
| ----------------------------------- | -------------------------------------------------------------------------- |
| **Keep components small**           | One clear purpose per component.                                           |
| **Reuse whenever possible**         | Don’t duplicate UI — reuse and parameterize with props.                    |
| **Use children wisely**             | To pass layout or nested elements.                                         |
| **Organize by feature or function** | Makes projects more maintainable.                                          |
| **Lift state up**                   | Keep data in the closest common ancestor when needed by multiple children. |

---

### **7.11 Why This Matters for React Native**

In React Native:

* **Every screen** is just another composed component.
* You’ll use `<View>` to group elements, `<Text>` for labels, and custom components for buttons or cards.
* You can reuse components across screens to maintain consistency and save time.

Composition is the core skill that makes React Native apps **modular, maintainable, and scalable**.

---

## **8. Conditional Rendering & Lists**

### **8.1 What Is Conditional Rendering?**

In plain terms, **conditional rendering** means:

> Showing different UI elements depending on some condition (state, props, or logic).

Just like `if` statements in JavaScript, but inside React’s JSX.

#### Example:

```jsx
function Welcome({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Welcome back!</h2>;
  } else {
    return <h2>Please log in.</h2>;
  }
}
```

**In React Native**, you’d use the same logic:

```jsx
function Welcome({ isLoggedIn }) {
  return (
    <Text>{isLoggedIn ? "Welcome back!" : "Please log in."}</Text>
  );
}
```

---

### **8.2 Using JavaScript Logic in JSX**

React lets you use any JavaScript expression inside curly braces `{ }`.

You can use:

* **If/else**
* **Ternary operator**
* **Logical AND (`&&`)**

#### Example with ternary:

```jsx
function Status({ online }) {
  return <p>{online ? "User is online ✅" : "User is offline ❌"}</p>;
}
```

#### Example with `&&`:

```jsx
function Alert({ show }) {
  return (
    <div>
      {show && <p style={{ color: "red" }}>Error: Something went wrong!</p>}
    </div>
  );
}
```

> If `show` is `true`, the `<p>` appears. If it’s `false`, React renders nothing.

---

### **8.3 Conditional Rendering with State**

We can control conditions using **state** so that the UI updates automatically.

#### Example:

```jsx
import { useState } from "react";

function ToggleMessage() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Message
      </button>
      {show && <p>Hello! This is a message.</p>}
    </div>
  );
}
```

* When `show` is true → message is displayed.
* When `show` is false → message disappears.
* Each button click toggles the state → triggers a re-render.

**React Native Equivalent:**

```jsx
function ToggleMessage() {
  const [show, setShow] = useState(true);

  return (
    <View>
      <Button
        title={show ? "Hide Message" : "Show Message"}
        onPress={() => setShow(!show)}
      />
      {show && <Text>Hello! This is a message.</Text>}
    </View>
  );
}
```

---

### **8.4 Rendering Lists with `.map()`**

In React, to display a list of items (users, messages, products, etc.), you’ll use the **`.map()`** array method.

#### Example:

```jsx
function UserList() {
  const users = ["Alice", "Bob", "Charlie"];

  return (
    <ul>
      {users.map((user) => (
        <li key={user}>{user}</li>
      ))}
    </ul>
  );
}
```

#### Output:

```
• Alice
• Bob
• Charlie
```

* `.map()` transforms each array item into a JSX element.
* React requires a **unique `key` prop** for each list item (helps React track items efficiently).

**React Native Equivalent:**

```jsx
function UserList() {
  const users = ["Alice", "Bob", "Charlie"];

  return (
    <View>
      {users.map((user) => (
        <Text key={user}>{user}</Text>
      ))}
    </View>
  );
}
```

---

### **8.5 Why Keys Are Important**

The `key` prop helps React identify which items have changed, added, or removed.
Without it, React may re-render incorrectly or inefficiently.

**Good:**

```jsx
users.map((user) => <li key={user.id}>{user.name}</li>)
```

**Bad:**

```jsx
users.map((user, index) => <li key={index}>{user.name}</li>)
```

> Avoid using `index` as a key unless you have no stable unique ID — especially for dynamic lists (where items can change or reorder).

---

### **8.6 Example: Dynamic List with State**

Let’s create a small app that lets users add names to a list.

```jsx
import { useState } from "react";

function NameList() {
  const [names, setNames] = useState(["Alice"]);
  const [newName, setNewName] = useState("");

  const addName = () => {
    if (newName.trim() === "") return;
    setNames([...names, newName]);
    setNewName("");
  };

  return (
    <div>
      <input
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={addName}>Add</button>

      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
```

**React Native Equivalent:**

```jsx
function NameList() {
  const [names, setNames] = useState(["Alice"]);
  const [newName, setNewName] = useState("");

  const addName = () => {
    if (newName.trim() === "") return;
    setNames([...names, newName]);
    setNewName("");
  };

  return (
    <View>
      <TextInput
        value={newName}
        onChangeText={setNewName}
        placeholder="Enter name"
      />
      <Button title="Add" onPress={addName} />

      {names.map((name, index) => (
        <Text key={index}>{name}</Text>
      ))}
    </View>
  );
}
```

Same logic, just with **React Native components** (`TextInput`, `Button`, `Text`, `View`).

---

### **8.7 Combining Conditional Rendering and Lists**

We can mix both techniques to handle *real-world cases*, such as empty lists.

#### Example:

```jsx
function TodoList({ todos }) {
  if (todos.length === 0) {
    return <p>No tasks today 🎉</p>;
  }

  return (
    <ul>
      {todos.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
}

function App() {
  const tasks = ["Buy groceries", "Do laundry"];
  return <TodoList todos={tasks} />;
}
```

**React Native Version:**

```jsx
function TodoList({ todos }) {
  if (todos.length === 0) {
    return <Text>No tasks today 🎉</Text>;
  }

  return (
    <View>
      {todos.map((task, index) => (
        <Text key={index}>{task}</Text>
      ))}
    </View>
  );
}
```

---

### **8.8 Rendering Lists from Objects**

When you have data with properties, map over it the same way.

#### Example:

```jsx
function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Headphones", price: 150 },
  ];

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}
```

**React Native Equivalent:**

```jsx
function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Headphones", price: 150 },
  ];

  return (
    <View>
      {products.map((p) => (
        <View key={p.id}>
          <Text>{p.name}</Text>
          <Text>${p.price}</Text>
        </View>
      ))}
    </View>
  );
}
```


## **9. From React to React Native Mindset**

### **Why We Learned React First**

Learning React first helps you:

1. Master the **component + state** mental model.
2. Understand **props**, **composition**, and **hooks** before jumping to mobile.
3. Make React Native easier — since it’s 80% the same logic, 20% new syntax.

---

### **The Core Idea: React Is the Same Everywhere**

React Native is **still React** — it uses the **same component-based model** and **state-driven UI updates**.

What changes is **how** the UI is rendered.

| Concept          | React (Web)              | React Native (Mobile)         |
| ---------------- | ------------------------ | ----------------------------- |
| Rendering Target | Browser DOM              | Native mobile components      |
| Base UI Elements | `<div>`, `<p>`, `<span>` | `<View>`, `<Text>`, `<Image>` |
| Styling          | CSS, CSS Modules         | JavaScript-based `StyleSheet` |
| Navigation       | React Router             | React Navigation              |
| Deployment       | Web browsers             | iOS & Android devices         |

In short:

> The *logic* stays the same — only the *presentation layer* changes.

---

### **Same React Concepts, Different Components**

Everything you learned in React still applies:

* Components → Reusable building blocks.
* Props → Data passed from parent to child.
* State → Data that changes over time.
* Hooks → Logic for state, effects, and more.
* Composition → Combining UI pieces together.

Example comparison:

| React                    | React Native                            |
| ------------------------ | --------------------------------------- |
| `jsx <div>Hello!</div> ` | `jsx <View><Text>Hello!</Text></View> ` |

React Native simply uses *native mobile* equivalents for web elements.

---

### **What’s Different in Practice**

| Area              | React (Web)            | React Native                                        |
| ----------------- | ---------------------- | --------------------------------------------------- |
| **Styling**       | CSS, class names       | `StyleSheet.create()` or inline styles (JS objects) |
| **Layout**        | CSS box model, flexbox | Flexbox (same concept, no `display: block`)         |
| **Navigation**    | React Router           | React Navigation (stack, tabs)                      |
| **Animations**    | CSS transitions        | React Native Animated / Reanimated                  |
| **Platform APIs** | Browser APIs           | Native APIs (camera, location, sensors)             |

Think of React Native as “React + native mobile capabilities.”

---

### **The “React Native Mindset”**

To succeed in React Native, start thinking:

* **In Components:** screens, cards, buttons are all reusable pieces.
* **In State:** the app’s data defines what’s on screen.
* **In Platform Terms:** there’s no DOM — you’re building real native UIs.
* **In Simplicity:** keep components small, logic clean, and data flow one-directional.

---

**You already know React — you just need to learn React Native’s tools.**
