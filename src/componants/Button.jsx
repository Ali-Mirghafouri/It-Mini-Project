import React from "react";

export default function Button(props) {
  return (
    <button
      style={{
        width: props.w,
        height: props.h,
        color: "white",
        backgroundColor: "#00000050",
        border: "1px solid white",
        borderRadius: "80px",
        fontSize: "35px",
        marginBottom: props.mb,
        marginTop: props.mt
      }}
      onClick={() => props.checkPass()}
    >
      {props.ph}
    </button>
  );
}
