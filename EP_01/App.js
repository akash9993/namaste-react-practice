//nested elements
/**
 * <div id="parent">
 *  <div id="child">
 *      <h1>I'm h1 tag</h1>
 *  </div>
 * </div>
 *
 * ReactElement(Object) => HTML (browser understands)
 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm H1 tag"),
    React.createElement("h3", {}, "I'm H3 tag"),
  ])
);
console.log(parent); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
