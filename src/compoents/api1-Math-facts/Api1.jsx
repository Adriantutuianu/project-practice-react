import React, { useState } from "react";
import axios from "axios";
import "./api1.css";

const Api1 = () => {
  const [number, setNumber] = useState(""); // State to hold the user-entered number
  const [fact, setFact] = useState(""); // State to hold the fetched fact
  const [isLoading, setIsLoading] = useState(false); // State to track loading state
  const [enteredNumber, setEnteredNumber] = useState(""); // State to hold the entered number

  const fetchFact = async () => {
    if (!number.trim()) {
      alert("Please enter a valid number.");
      return;
    }

    setIsLoading(true); // Set loading state to true

    try {
      const response = await axios.get(
        `https://numbersapi.p.rapidapi.com/${number}/math`,
        {
          params: {
            fragment: "true",
            json: "true",
          },
          headers: {
            "X-RapidAPI-Key":
              "331e31b9e6msh309144b3b69a4c8p1e50aajsn05414db71f6f",
            "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
          },
        }
      );

      setFact(response.data.text); // Update state with the fetched fact
      setEnteredNumber(number); // Store the entered number
    } catch (error) {
      console.error(error);
      alert("Failed to fetch data. Please try again.");
    } finally {
      setIsLoading(false); // Set loading state back to false
      setNumber(""); // Clear the input field by resetting the number state
    }
  };

  const handleInputChange = (event) => {
    setNumber(event.target.value); // Update the number state as user types
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    fetchFact(); // Call fetchFact when the form is submitted
  };

  return (
    <div className="api1">
      <h1
        className="
      api1-title"
      >
        Math Fact
      </h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="number"
          value={number}
          onChange={handleInputChange}
          placeholder="Enter a number"
        />
        <button className="api1-button" type="submit">
          Get Fact
        </button>
      </form>

      {isLoading ? (
        <p>Loading...</p>
      ) : fact ? (
        <div>
          <p>You entered: {enteredNumber}</p>
          <p className="fact-result">{fact}</p>
        </div>
      ) : null}
    </div>
  );
};
export default Api1;
