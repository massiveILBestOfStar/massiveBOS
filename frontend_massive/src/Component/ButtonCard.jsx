import React from "react";

const Button6 = (props) => {
  return (
    <div>
      <button
        style={{
          padding: "5px 20px",
          color: 'white',
          fontWeight: "700",
          textDecoration: "none",
          borderRadius: "10px",
         border: 'none',
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
      <button
        style={{
          padding: "5px 10px",
          color: 'white',
          fontWeight: "700",
          textDecoration: "none",
          borderRadius: "20px",
         border: '2px solid #000',
          background: "rgba(31, 200, 38, 0.99)",
        }}
      >
        {props.set}
      </button>
    </div>
  );
};

const Button8 = (props) => {
  return(
    <div>
      <button style={{
        width: '179px',
        height: '47px',
        borderRadius: '20px',
        border: '3px solid #9A9A9A',
        background: '#FFF',
        fontWeight: '700',
        fontSize: '20px',
        color: `${props.color || '#274C5B'}`,
      }}>{props.set}</button>
    </div>
  )
}

const Button9 = (props) => {
  return (
    <div>
      <button
      className="p-3"
        style={{ width: "300px", borderRadius: "20px", backgroundColor: "#62C73E", fontSize: '20px', fontWeight: '700', color: '#FFF' }}
      >
        {props.set}
      </button>
    </div>
  );
};


export {Button6, Button7, Button8, Button9}