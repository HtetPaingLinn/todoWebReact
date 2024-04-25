import { createElement } from "react";
import { createRoot } from "react-dom/client";
const rootElement = document.querySelector("#root");

const tasks = [
  "Read Js Book",
  "Eat Less",
  "Sleep Well",
  "Learn N3 and N2 Japanese",
];
const x = tasks.map((el) => console.log(el));
const root = createRoot(rootElement);
root.render(
  createElement(
    "div",
    null,
    createElement("h1", null, "Todo App"),
    createElement(
      "Form",
      null,
      createElement("input", null, null),
      createElement("button", null, "Add New")
    ),
    createElement(
      "ul",
      null,
      tasks.map((task,index) => createElement("li", {key: index}, task))
    )
  )
);
