const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am child1"),
    React.createElement("h2", {}, "I am child2"),
    React.createElement("h1", {}, "I am child1"),
    React.createElement("h2", {}, "I am child2"),
  ])
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
