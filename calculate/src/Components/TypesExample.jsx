import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TypesExample = () => {
  const [result, setResult] = useState(0);

  const handleButtonClick = (operator) => {
    let newResult;

    switch (operator) {
      case '+':
        newResult = result + 1;
        break;
      case '-':
        newResult = result - 1;
        break;
      case '*':
        newResult = result * 2;
        break;
      case '/':
        newResult = result / 2;
        break;
      default:
        newResult = result;
    }

    setResult(newResult);
  };

  return (
    <div className="container">
      <h1>TypesExample</h1>
      <h2>Result: {result}</h2>

      <div className="btn-group">
        <button className="btn btn-primary" onClick={() => handleButtonClick('+')}>
          Add 1
        </button>
        <button className="btn btn-primary" onClick={() => handleButtonClick('-')}>
          Subtract 1
        </button>
        <button className="btn btn-primary" onClick={() => handleButtonClick('*')}>
          Multiply by 2
        </button>
        <button className="btn btn-primary" onClick={() => handleButtonClick('/')}>
          Divide by 2
        </button>
      </div>
    </div>
  );
};

export default TypesExample;
