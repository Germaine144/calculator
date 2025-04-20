import React, { useState } from "react";

function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const a = Number(firstNumber);
    const b = Number(secondNumber);

    if (!Number(a) || !Number(b)) {
      setError("please enter valid number");
      setResult(false);
    } else {
      alert("Get result");
      setResult(true);
    }

    if (!operation) {
      setError("Please select an operation.");
      return;
    }
    if (operation === "divide" && b === 0) {
      setError("Cannot divide by zero.");
      setResult(null);
      return;
    }
    const res = Operation(a, b, operation);
    setResult(res);
  };

  const Operation = (a, b, opera) => {
    switch (opera) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
        case "/":
            return a / b;
            default:
              return null;
    }
  };

  return (
    <div>
      <h2 className="font-bold mb-10 from-neutral-950 shadow-2xl">
        Calculator
      </h2>
      <form onSubmit={handleSubmit} className="flex justify-center items-center  mb-10 w-70">
        <div className="border border-black w-fit px-20 py-15 ">
          <div className="flex flex-col gap-30 w-[470px]">
            <input className="border border-gray-400 rounded-lg shadow-2xl p-2 text-xl w-full mt-11 mb-12" type="number" value={firstNumber} placeholder="Pls Enter Your First Number"   onChange={(e) => setFirstNumber(e.target.value)}></input>
            <input className="border border-gray-400 rounded-lg shadow-2xl p-2 text-xl w-full mb-12"type="number"value={secondNumber}placeholder="Pls Enter Your Second Number" onChange={(e) => setSecondNumber(e.target.value)}></input>
          </div>
          <div>
            <h2 className="font-bold mb-10 from-neutral-950 shadow-2xl">
              Select An Operation
            </h2>
            <select className="border border-gray-400 rounded-lg shadow-2xl p-2 text-xl w-full mb-12" onChange={(e) => setOperation(e.target.value)}>
              <option value="">Select an Option</option>
              <option value="+">Add (+)</option>
              <option value="-">Subtract (−)</option>
              <option value="*">Multiply (×)</option>
              <option value="/">Divide (÷)</option>
            </select>
          </div>
          <div>
            <button className="p-2 m-11 bg-green-400 px-4 py-2 rounded-lg" type="submit">
              Calculator
            </button>
          </div>
        </div>
      </form>
      {error && <p className="text-red-600 text-center">{error}</p>}
      {result !== null && !error && (
        <p className="mt-4 mx-auto  px-2 py-2 text-center text-xl bg-green-400 text-white font-bold w-72 rounded-xl">
          Result Is : {result}
        </p>
      )}
    </div>
  );
}
export default Calculator;
