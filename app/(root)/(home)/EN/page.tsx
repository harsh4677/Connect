"use client";
import React, { useState } from "react";

export default function EN_page() {
  // State to store the nine numerical values
  const [inputValues, setInputValues] = useState<string[]>(Array(9).fill(""));
  const [result, setResult] = useState<number | string | null>(null);

  // Function to update the input values
  const handleInputChange = (index: number, value: string) => {
    const newValues = [...inputValues];
    newValues[index] = value;
    setInputValues(newValues);
  };

  // Function to calculate the sum of the nine values
  const handleCalculate = () => {
    const nums = inputValues.map((val) => parseFloat(val));
    if (nums.every((val) => !isNaN(val))) {
      const sum = nums.reduce((acc, curr) => acc + curr, 0);
      setResult(sum);
    } else {
      setResult("Invalid input");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3">
      <h1 className="text-2xl font-bold">Sum Calculator</h1>
      <div className="mt-4 flex flex-col gap-7">
        {inputValues.map((value, index) => (
          <div key={index} className="flex items-center gap-2">
            <label className="font-semibold text-white">Number {index + 1}:</label>
            <input
              type="number"
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="border p-2 rounded"
              placeholder={`Number ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleCalculate}
        className="mt-4 bg-blue-500 text-white p-2 rounded"
      >
        Calculate Sum
      </button>
      {result !== null && (
        <div className="mt-4 text-xl font-bold text-white">Sum: {result}</div>
      )}
    </div>
  );
}
