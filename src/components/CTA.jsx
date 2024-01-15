import styles from "../style";
import Button from "./Button";
import "../components/billing.css";
import "animate.css";
import { Link } from "react-router-dom";

const CTA = () => (
  <section
    id="CTA-sec"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        "Revolutionize your emails today! Join now for unparalleled accuracy
        with our Email Verification service."
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Link to="/bulk">
        <Button />
      </Link>
    </div>
  </section>
);

export default CTA;
