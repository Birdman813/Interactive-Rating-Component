import React from "react";
import "./Result.css";
import resultImg from "../../../public/images/illustration-thank-you.svg";
function Result(props) {
  return (
    <div className="result-container">
      <img src={resultImg} alt="" />
      <div className="result">You selected {props.number} out of 5</div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default Result;
