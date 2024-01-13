// Billing.jsx
import { apple, google } from "../assets";
import styles, { layout } from "../style";
import FAQ from "../assets/FAQ.png";

import "../components/billing.css";
import "animate.css";

const Billing = () => (
  <div id="none" className="w-full h-30 bg-opacity-5 bg-[rgb(0 4 15)] ">
    <section id="product" className={`${layout.sectionReverse} h-full`}>
      <section
        id="nnn"
        className="w-full h-screen flex items-center justify-center  text-white transition-all duration-500 ease-in-out hover:bg-#172554-600"
      >
        <div
          id="nnn"
          className="w-10%  p-8 bg-black-900 transition-all duration-500 ease-in-out hover:bg-black-800"
        >
          <h2 id="nnn" className="text-5xl font-bold mb-4 pb-3">
            Frequently Asked Questions:
          </h2>

          <div id="nnn" className="mb-4 space-y-2">
            <h3 id="nnn" className=" text-3xl font-bold text-cyan-500">
              ➣ How does our email verification service work?
            </h3>

            <p id="nnn" className=" text-xl  text-1d4ed8-500">
              Mail-verif email verification service verifies a list of one or
              more emails using multiple rigorous checks. The results of email
              verification tell you which addresses are undeliverable so that
              you can remove them. In other words, it gives you peace of mind by
              narrowing your focus to much better leads.shedy melvinshyysaj
            </p>
          </div>
          <div id="nnn" className="flex flex-col gap-2 mb-4">
            <h3 className="text-3xl font-semibold text-cyan-500">
              ➣ What is the purpose of email verification?
            </h3>
            <p className="text-xl ">
              Email verification helps ensure the accuracy and security of user
              email addresses, preventing fraudulent activities and enhancing
              communication reliability.
            </p>
          </div>

          <div id="nnn" className="mb-4 space-y-2">
            <h3 className="text-xl text-3xl font-semibold text-cyan-500">
              ➣ How do you verify Gmail accounts?
            </h3>
            <p className="mt-2 text-xl ">
              We use a precise and secure process to verify Gmail accounts,
              ensuring that the provided information is accurate and reliable.
            </p>
          </div>

          <div className="mb-4  text-blder  letter spabceinf \\ space-y-2">
            <h3
              id="nnn"
              className="text-xl text-3xl font-semibold text-cyan-500"
            >
              ➣ Is my email information safe with your service?
            </h3>
            <p id="nnn" className="text-xl  text-93c5fd">
              Yes, we prioritize the security and privacy of your email
              information. Our verification process is designed to be secure and
              confidential.
            </p>
          </div>

          {/* Add more FAQ items as needed */}
        </div>
        <div className="w-full h-full hidden md:block">
          <img className="animated-float w-full h-full" src={FAQ} alt="" />
        </div>
      </section>
    </section>
  </div>
);

export default Billing;
