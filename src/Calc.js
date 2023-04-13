import React, { useState } from "react";
import './Cal.css'

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    const value = e.target.value;

    switch (value) {
      case "C":
        setInput("");
        setResult("");
        break;
      case "=":
        calculate();
        break;
      default:
        setInput(input + value);
    }
  };

  const calculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Invalid input");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} placeholder="Enter Values Here" />
      <input type="text" value={result} disabled  className="Blue" placeholder="OutPut"/>
      <button value="1" onClick={handleClick}>1</button>
      <button value="2" onClick={handleClick}>2</button>
      <button value="3" onClick={handleClick}>3</button>
      <button value="+" onClick={handleClick} className="Blue">+</button>
      <button value="4" onClick={handleClick}>4</button>
      <button value="5" onClick={handleClick}>5</button>
      <button value="6" onClick={handleClick}>6</button>
      <button value="-" onClick={handleClick} className="Blue">-</button>
      <button value="7" onClick={handleClick}>7</button>
      <button value="8" onClick={handleClick}>8</button>
      <button value="9" onClick={handleClick}>9</button>
      <button value="*" onClick={handleClick} className="Blue">*</button>
      <button value="C" onClick={handleClick} className="Blue">C</button>
      <button value="0" onClick={handleClick} >0</button>
      <button value="/" onClick={handleClick} className="Blue">/</button>
      <button value="=" onClick={handleClick} className="Blue">=</button>
    </div>
  );
}

export default Calculator;
