// Input Component
import React from "react";
import { useState } from "react";

const Input = (props) => {


  const onChangeInput = (e) =>{
    props.fetchCity(e.target.value);
    e.target.value !== "" ? props.setShowSearchResults(true): props.setShowSearchResults(false);
  }


  return (<>
  <span className="input-box">
    <label>LOCATION</label>
    <input onChange={onChangeInput}></input>
  </span>
  {/* <p>{props.location}</p> */}
  </>);
};

export default Input;
