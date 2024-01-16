import { useState } from "react";
import * as EmailValidator from "email-validator";
import styles from "../style";
import GetStarted from "./GetStarted";
import "animate.css";
import "../components/billing.css";
import mainpic from "../../src/assets/mainpic.png";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../components/billing.css";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleVerifyEmail = () => {
    const isValid = EmailValidator.validate(email);
    setVerificationResult(isValid);
    console.log(isValid, "ISSS");
  };
  console.log(verificationResult, "TEST");

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          {/* <img src={discount} alt="discount" className="w-[32px] h-[32px]" /> */}
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">
              "Free email verification. Secure now!"
            </span>{" "}
          </p>
        </div>

        <div className="flex flex-row  justify-between items-center w-full">
          <h1
            id="verf"
            className="animate__animated animate__zoomIn flex-1 font-poppins font-semibold ss:text-[52px] text-[52px]  text-gradient ss:leading-[100.8px] leading-[75px]"
          >
            Verify email address
            <br className="sm:block hidden" />{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted onVerifyEmail={handleVerifyEmail} />
          </div>
        </div>

        <div className="ml-90 gap-0 max-w-screen-md relative text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2"></span>
          <input
            id="searchinp"
            type="search"
            onChange={handleChange}
            name="q"
            className="py-3 pl-10 text-sm text-white bg-gray-800 rounded-md focus:outline-none focus:bg-white focus:text-gray-900 w-[450px] h-[50px]"
            placeholder="please enter your email ID"
            autoComplete="off"
          />
        </div>
        <ol className="w-1/2 ml-10 pt-5">
          {verificationResult === true ? (
            <li className="text-[green] pr-79">Email is valid</li>
          ) : verificationResult === false ? (
            <li className="text-[red] pr-79">Invalid Email</li>
          ) : (
            <li className="text-white pr-79"></li>
          )}
        </ol>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          This email verification tool connects to the mail server and checks
          whether the mailbox exists or not.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={mainpic}
          alt="billing"
          className="animated-float animate__animated animate__bounce w-[90%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
