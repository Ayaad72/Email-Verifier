import { clients } from "../constants";
import styles from "../style";
import "animate.css";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
        ></div>
      ))}
    </div>
  </section>
);

export default Clients;
