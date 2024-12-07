import React from "react";
import { Button } from "bootstrap";

function Welcome({ activateComponent }) {
  return (
    <div className="welcomeContainer">
      <h3 className="display-1">Welcome to training timer!</h3>
      <button
        onClick={() => activateComponent("setupcomponent")}
        type="button"
        className="btn btn-primary btn-lg"
        style={{ marginTop: "70px" }}
      >
        {" "}
        <b>Next</b>
      </button>
    </div>
  );
}

export default Welcome;
