import "./header.css";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [rainbowText, setRainbowText] = useState("");

  useEffect(() => {
    const headerText = "Get Math facts and Random Math Facts";
    const rainbowColors = ["white", "black"]; //  colors
    let colorIndex = 0;

    const interval = setInterval(() => {
      setRainbowText(
        headerText.split(" ").map((word, index, words) => (
          <span key={index}>
            {word.split("").map((char, charIndex) => (
              <span
                key={charIndex}
                style={{
                  color:
                    rainbowColors[
                      (colorIndex + charIndex) % rainbowColors.length
                    ],
                }}
              >
                {char}
              </span>
            ))}
            {index !== words.length - 1 && " "}{" "}
            {/* Add space after each word except for the last word */}
          </span>
        ))
      );
      colorIndex++;
    }, 1000); // Adjust speed of color change here

    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <div className="rainbow-header">{rainbowText}</div>
    </header>
  );
};

export default Header;
