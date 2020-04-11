import React from "react";
import { Box, Typography } from "@material-ui/core";

export default function Input(props) {
  if (props.Licon !== undefined) {
    return (
      <Box
        style={{
          display: "flex",
          width: props.w,
          height: props.h,
          borderRadius: "80px",
          marginBottom: props.mb,
          // zIndex:"100"
        }}
      >
        <Box
          style={{
            border: "1px solid white",
            width: "20%",
            height: "100%",
            borderTopLeftRadius: "80px",
            borderBottomLeftRadius: "80px",
            backgroundColor: "black",
            opacity:"55%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box><Typography style={{color: "white"}} >{props.Licon}</Typography></Box>
        </Box>
        <input
          style={{
            width: "100%",
            height: "100%",
            opacity:"62%",
            backgroundColor: "black",
            fontSize: props.fsize,
            borderTopRightRadius: "80px",
            borderBottomRightRadius: "80px",
            padding: "0px",
            border: "1px solid white",
            color:"white",
            paddingLeft:"10px",
          }}
          onChange={(e) => props.handleSID(e)}
          type={props.type}
          placeholder={props.ph}
        ></input>
      </Box>
    );
  }
  return (
    <input
      style={{
        width: props.w,
        height: props.h,
        border: "1px solid white",
        borderRadius: "80px",
        marginBottom: props.mb,
        fontSize: props.fsize,
        padding: "0px"
      }}
      placeholder={props.ph}
    ></input>
  );
}
