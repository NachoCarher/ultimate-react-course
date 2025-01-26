import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [rat, setRat] = useState(0);
  return (
    <div>
      <StarRating maxRating={3} onSetRating={setRat} />
      <p>The rating is {rat}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      className="test"
      defaultRating={2}
    />
    <Test /> */}
  </React.StrictMode>
);
