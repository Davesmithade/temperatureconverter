import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [temperatureValue, SetTemperatureValue] = useState(10);
  const [temperatureColor, SetTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    const newTemperature = temperatureValue + 1;
    if (newTemperature > 16) {
      SetTemperatureColor("hot");
    } else if (newTemperature > 30) {
      alert("hello can you cope");
    }
    SetTemperatureValue(newTemperature);
  };

  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1;
    if (newTemperature < 17) {
      SetTemperatureColor("cold");
    }
    SetTemperatureValue(temperatureValue - 1);
  };

  // const getInputCelcius = ()=>{
  //   const input = document.querySelector("input")
  //   if (input) {
  //     alert("vxyhjcx")
  //   }
  // }

  return (
    <div className="box">
      <h1 className="txth1">TEMPERATURE CONVERTER</h1>

      <div className="tempcontrollerr">
        <div className="cold">Cold</div>

        <div className="hot">Hot</div>
      </div>

      <div className="temperatureBgbox">
        <div className={`temproundcounter ${temperatureColor}`}>
          <h1>
            {temperatureValue}
            <sup className="deg">o</sup>C
          </h1>
        </div>
        <div className="tempcontroller">
          <div>
            <button onClick={() => increaseTemperature()}>+</button>
          </div>
          <div>
            <button onClick={() => decreaseTemperature()}>-</button>
          </div>
        </div>

        <div className="input">
          <input type="text" placeholder="Input a celcius here...." />
        </div>
      </div>
    </div>
  );
};

export default App;
