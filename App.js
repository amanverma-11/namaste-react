/*

    <div id="parent">
        <div id="child1">
            <h1>I am an H1 Tag</h1>
            <h2>I am an H2 Tag</h2>
        </div>
        <div id="child2">
            <h1>I am an H1 Tag</h1>
            <h2>I am an H2 Tag</h2>
        </div>
    </div>

*/

// CREATING NESTED STRUCTURE USING REACT
const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "I am an H1 Tag"),
      React.createElement("h2", {}, "I am an H2 Tag"),
    ]),
  ],
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an H1 Tag"),
    React.createElement("h2", {}, "I am an H2 Tag"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" }, // use to give attributes to the element
  "Hello World from React!"
);

console.log(heading); // Object, not a h1 element

const root = ReactDOM.createRoot(document.getElementById("root"));

// This converts ReactElement(Object) => HTML Element (Browser Understands)
root.render(heading);
root.render(parent);
