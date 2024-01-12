import styles from "../style";
import GetStarted from "./GetStarted";
import "animate.css";
import mainpic from "../../src/assets/mainpic.png";

const Hero = () => {
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
          <h1 className="animate__animated animate__zoomIn flex-1 font-poppins font-semibold ss:text-[52px] text-[52px]  text-gradient ss:leading-[100.8px] leading-[75px]">
            Verify email address
            <br className="sm:block hidden" />{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <div className="ml-90 gap-0 max-w-screen-md relative text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-5-5m-9 0a8 8 0 100-16 8 8 0 000 16z"
                ></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            className="py-3 pl-10 text-sm text-white bg-gray-800 rounded-md focus:outline-none focus:bg-white focus:text-gray-900 w-[450px] h-[50px]"
            placeholder="please enter your email ID"
            autoComplete="off"
          />
        </div>

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
          className="w-[90%] h-[100%] relative z-[5]"
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
