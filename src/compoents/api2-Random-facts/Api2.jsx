import React, { useState, useEffect } from "react";
import axios from "axios";
import "./api2.css";

const Api2 = () => {
  const [fact, setFact] = useState("");
  const [number, setNumber] = useState(null);

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://numbersapi.p.rapidapi.com/random/trivia",
      params: {
        min: "10",
        max: "20",
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
      if (response.data && response.data.number && response.data.text) {
        setNumber(response.data.number);
        setFact(response.data.text);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleRefresh = () => {
    fetchData();
  };

  return (
    <div>
      <h1>Random Number Fact</h1>
      {number && fact && (
        <p>
          Number: {number} - {fact}
        </p>
      )}
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default Api2;
