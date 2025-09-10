import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

//React.createElement => its an object => when render into dom it becomes => HTMLElement and it will be pushed to the browser
//and whatever is there in index.html will be replaced by heading
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Namaste React!!"
// );
// console.log("🚀 ~ heading:", heading);
//this is the core part of react which just creates te=he h1 element
//and when we need to put this in dom then we use dom libraries and root is the place where all our code will run
//{} means where we can gove attributes to the tags

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "This is namaste react"),
//     React.createElement("h2", {}, "I'm h2 tag"),
//   ],[
//     React.createElement("h1", {}, "I'm h1 tag"),
//     React.createElement("h2", {}, "I'm h2 tag")
//   ])
// );
// console.log(parent);

//JSX = html like syntax , its not HTML in JS
//its developer friendly (transpiled before it reaches the JS Engine) => Parcel => which has babel which is
// responsible for conevrting our code which browser understands

//React element
// const jsxHeading = (
//   <h1 className="head" tabIndex="5">
//     Namaste React using JSX
//   </h1>
// );
// console.log("🚀 ~ jsxHeading:", jsxHeading);

//const RestaurantCard = ({resName, cuisine}) => {
//this is we have done object destructuring

const AppLayout = () => {
  console.log(<Body />);

  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
