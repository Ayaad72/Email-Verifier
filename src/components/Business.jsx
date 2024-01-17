import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import "animate.css";
import "../components/billing.css";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

import { useState } from "react";

const Business = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="features" className={`${layout.section} text-white `}>
      <div className="MainCardzz flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 space-x-4">
        {[0, 1, 2].map((index) => (
          <div
            id="main-card"
            key={index}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`bg-[black ] text-white p-4 rounded-md shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 flex flex-col justify-center items-center w-[50%] h-[200%] ${
              hoveredCard === index ? "bg-[grey]-300" : "text-[white]-500"
            }`}
            style={{
              boxShadow:
                hoveredCard === index
                  ? "0 4px 8px rgba(255, 0, 0, 0.5)"
                  : "0 4px 8px rgba(255, 0, 0, 0.5)",
              marginLeft:
                index === 0 && window.innerWidth <= 449 ? "40px" : "0",
              marginRight: "10px", // Adjust the margin as needed
            }}
          >
            <i
              className={`fas fa-arrow-up text-2xl mb-2 ${
                hoveredCard === index ? "text-blue-500" : "text-red-500"
              }`}
            ></i>
            <p
              className={`text-red-800 font-bold text-center ${
                hoveredCard === index ? "text-blue-500" : ""
              }`}
            >
              Increase productivity
            </p>

            <p
              className={`text-red-600 text-center ${
                hoveredCard === index ? "text-blue-500" : ""
              }`}
            >
              Save hours of work. Reduce the probability of getting into spam
              lists.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Business;
