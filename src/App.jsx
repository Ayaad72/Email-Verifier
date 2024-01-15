import styles from "./style";
import "animate.css";
import {
  Billing,
  Business,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import Bulk from "./components/Bulk/App.jsx";
import LoginPage from "./components/login/App";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
        <Bulk />
        <LoginPage />
        <Bulk />
      </div>
    </div>
  </div>
);

export default App;
