import "./home.css";
import React, { useEffect } from "react";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://numbersapi.p.rapidapi.com/100/math",
        params: {
          fragment: "true",
          json: "true",
        },
        headers: {
          "X-RapidAPI-Key":
            "331e31b9e6msh309144b3b69a4c8p1e50aajsn05414db71f6f",
          "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the async function to fetch data when the component mounts
  }, []); // Empty dependency array means this effect runs once after the first render

  return <div>Home</div>;
};

export default Home;
