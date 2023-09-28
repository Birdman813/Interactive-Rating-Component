import React, { useState } from "react";
import "./Rate.css";
import rateImg from "../../../public/images/icon-star.svg";

function Rate(props) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rate-container">
      <div className="img-container">
        <img src={rateImg} alt="" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="button-container">
        {stars.map((item) => (
          <button
            key={item}
            className="star"
            style={
              props.number == item
                ? { backgroundColor: "#FC7614", color: "#FFF" }
                : {}
            }
            onClick={() => props.setNumber(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <button
        className="submit"
        onClick={() => {
          if (props.number) props.setSubmit(true);
        }}
      >
        SUBMIT
      </button>
    </div>
  );
}

export default Rate;
