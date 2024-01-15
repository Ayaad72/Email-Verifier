import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import "../components/billing.css";
import "animate.css";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} md:(hidden) flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 id="random-h2" className={styles.heading2}>
        Why to Choose Our <br className="sm:block hidden" /> email verifying
        service?
      </h2>

      <div className="w-full md:mt-0 mt-6">
        <p id="hhh" className={`${styles.paragraph} text-left max-w-[450px]`}>
          "Elevate your email game with our verifier: unparalleled precision,
          seamless integration, and exclusive welcome benefits for satisfaction
          guaranteed."
        </p>
      </div>
    </div>

    <div
      id="random-cards"
      className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]"
    >
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
