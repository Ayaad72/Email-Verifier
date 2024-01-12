import { apple, google } from "../assets";
import styles, { layout } from "../style";
import darkimg from "../../src/assets/dark.png";
import "animate.css";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={darkimg}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5] animate-floating"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily verify your <br className="sm:block hidden" /> Gmail account ID
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We're here to ensure your email security and provide a seamless
        experience. By sharing your Gmail ID, we'll verify its accuracy with
        precision and care. Your trust means everything to us, and your
        satisfaction is our priority.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <button className="w-44 h-16 cursor-pointer text-white text-lg rounded-full relative bg-gradient-to-br from-pink-500 to-blue-400 transition-transform duration-100">
          Get started
          <span className="absolute inset-0 bg-gradient-to-br from-pink-500 to-blue-400 blur-[15px] z-[-1]"></span>
        </button>
      </div>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <button>Hold that</button>
      </div>
    </div>
  </section>
);

export default Billing;
