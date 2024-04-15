import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [number, setNumber] = useState(""); // State to hold the user-entered number
  const [fact, setFact] = useState(""); // State to hold the fetched fact
  const [isLoading, setIsLoading] = useState(false); // State to track loading state

  const fetchFact = async () => {
    if (!number.trim()) {
      alert("Please enter a valid number.");
      return;
    }

    setIsLoading(true); // Set loading state to true

    const options = {
      method: "GET",
      url: `https://numbersapi.p.rapidapi.com/${number}/math`,
      params: {
        fragment: "true",
        json: "true",
      },
      headers: {
        "X-RapidAPI-Key": "331e31b9e6msh309144b3b69a4c8p1e50aajsn05414db71f6f",
        "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setFact(response.data.text); // Update state with the fetched fact
    } catch (error) {
      console.error(error);
      alert("Failed to fetch data. Please try again.");
    } finally {
      setIsLoading(false); // Set loading state back to false
    }
  };

  const handleInputChange = (event) => {
    setNumber(event.target.value); // Update the number state as user types
  };

  const handleButtonClick = () => {
    fetchFact(); // Call fetchFact when the button is clicked
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetchFact(); // Call fetchFact when the "Enter" key is pressed
    }
  };

  return (
    <div>
      <h1>Math Fact</h1>
      <input
        type="number"
        value={number}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} // Call handleKeyPress on key press
        placeholder="Enter a number"
      />
      <button onClick={handleButtonClick}>Get Fact</button>

      {isLoading ? <p>Loading...</p> : fact ? <p>{fact}</p> : null}
    </div>
  );
};

export default Home;
