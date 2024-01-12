import styles from "../style";
import "animate.css";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} animate__animated animate__zoomInU hover:scale-105  w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer group`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div
        className={`${styles.flexStart} flex-row group-hover:text-hover-color transition-all`}
      >
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="p text-gradient transition-transform">Verify</span>
        </p>
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23.4px] group-hover:text-hover-color transition-all">
        <span className="text-gradient">now</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
