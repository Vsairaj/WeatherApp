// SetUnits Component
import React from "react";

const SetUnits = (props) => {
  const onChangeInput = (e) => {
    props.setScale(e.target.value.charAt(0));
  };

  return (
    <>
      <div className="set-units">
        <label>UNITS</label>
        <select onChange={onChangeInput} defaultValue="Set Units">
          <option> Celcius</option>
          <option> Farenheit</option>
        </select>
      </div>
    </>
  );
};

export default SetUnits;
