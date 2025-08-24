const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React!!"
);
//this is the core part of react which just creates te=he h1 element
//and when we need to put this in dom then we use dom libraries and root is the place where all our code will run
//{} means where we can gove attributes to the tags

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h1", {}, "I'm h1 tag"),
  ])
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
