import React from "react";
import "../App.css";
import google from '../assets/google.png'

const Button = (props) => {
  return (
    <div>
      <button className="tombol" style={{ border: "1px solid black" }}>
        {props.set}
      </button>
    </div>
  );
};

const Button2 = (props) => {
  return (
    <div>
      <button className="tombol" style={{ width: "300px" }}>
        {props.set}
      </button>
    </div>
  );
};

const Button3 = (props) => {
  return (
    <div>
      <button
        className="tombol"
        style={{ width: "150px", borderRadius: "50px" }}
      >
        {props.set}
      </button>
    </div>
  );
};

const Button4 = (props) => {
  return (
    <div>
      <button
        className="tombol"
        style={{
          width: "300px",
          borderRadius: "15px",
          backgroundColor: "white",
          color: "black",
          fontSize: "18px",
          marginTop: "20px",
          border: "1px solid black",
        }}
      >
        <img src={google} alt="" />{props.set}
      </button>
    </div>
  );
};


const Button5 = (props) => {
  return (
    <div>
      <button
        style={{
          padding: "10px 20px",
          color: 'black',
          fontWeight: "700",
          textDecoration: "none",
          borderRadius: "20px",
          border: "2px solid #000",
          background: "rgba(31, 200, 38, 0.99)",
        }}
      >
        {props.set}
      </button>
    </div>
  );
};

const Button7 = (props) => {
  return (
    <div>
      <button className="tombolSukses" style={{ width: "270px" }}>
        {props.set}
      </button>
    </div>
  );
};

const ButtonForm = (props) => {
  return (
    <div>
      <button className="buttonForm" style={{ width: "270px" }}>
        {props.set}
      </button>
    </div>
  );
};


export { Button, Button2, Button3, Button4, Button5, Button7, ButtonForm};
