import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
const params = [
  {
    id: 1,
    name: "Назначение",
  },
  {
    id: 2,
    name: "Длинна",
  },
];

const model = {
  paramValues: [
    {
      paramId: 1,
      value: "повседневное",
    },
    {
      paramId: 2,
      value: "макси",
    },
  ],
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App params={params} model={model} />);
