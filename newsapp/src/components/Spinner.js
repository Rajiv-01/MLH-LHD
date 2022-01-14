import React from "react";
import loader from "./Bean Eater.gif";
function Spinner() {
  return (
    <div className="spinner">
      <img src={loader} alt="Loading..." height="100px" width="100" />
    </div>
  );
}

export default Spinner;
