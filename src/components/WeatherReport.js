// WeatherReport Component
import React from "react";
import { useState, useEffect } from "react";
import { Component } from "react";

const WeatherReport = ({data, isLoading}) => {

  if (data.location === undefined || data.location === null) {
    return (
      <div className="please-type"></div>
    )
  }


  else if (isLoading===false){
  return (
    <>
      <div className="weather-report">
        <h2 className="big">{data.location}</h2>
        <h3 className="conditions">{data.conditions}</h3>
        <img src= {data.icon} alt="showing the conditions"></img>
        <div className="temperature">
          <div>
            <p>CURRENT TEMPERATURE</p>
            <h2>{data.temp}</h2>
          </div>
          <div>
            <p>MAXIMUM TEMPERATURE</p>
            <h2>{data.temp_max}</h2>
          </div>
          <div>
            <p>MINIMUM TEMPERATURE</p>
            <h2>{data.temp_min}</h2>
          </div>
        </div><br></br>
        {/* this is not rendered, not sure why */}
        <div className="wind">
          <div>
            <p>WIND SPEED</p>
            <h2>{data.wind_speed} m/s </h2>
          </div>
          <div>
            <p>WIND DIRECTION</p>
            <h2>{data.wind_direction} degrees</h2>
          </div>
        </div>
        <div className="pressure">
          <div>
            <p>PRESSURE</p>
            <h2>{data.pressure}hPa</h2>
          </div>
          <div>
            <p>HUMIDITY</p>
            <h2>{data.humidity} %</h2>
          </div>
        </div><br></br>
      </div>
    </>
  );
}
else return (<div className="is-loading"></div>)

};

export default WeatherReport;
