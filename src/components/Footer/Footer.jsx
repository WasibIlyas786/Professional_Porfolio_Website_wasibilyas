import React, { useState } from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
// import styles from "../../styles";
import { socialMedia } from "../../constants";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setloading] = useState(false);

  // const [username, email, message] = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
  };

  const contact = {
    _type: "contact",
    name: formData.username,
    email: formData.email,
    message: formData.message,
  };

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <h2 className="primaryText">
            Let's make something amazing together.
          </h2>
          <p className="primaryText">
            Start by <a href="mailto:wasibilyas786@gmail.com">saying hi</a>
          </p>
        </div>

        {!isFormSubmitted ? (
          <div className={css.right}>
            <h2>Get in Touch...</h2>
            <div className="divNameField">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="username"
                // value={username}
                onChange={handleChangeInput}
              />
            </div>
            <div className="divEmailField">
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="email"
                // value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div className="divMsgField">
              <textarea
                className="p-text"
                placeholder="Your Message"
                // value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>
              {!loading ? "Send Message" : "Sending"}
            </button>
          </div>
        ) : (
          <div className="head-text">
            <h3>Thank you for getting in touch!</h3>
          </div>
        )}
      </motion.div>

      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
          <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
            Design and Created by Wasib Ilyas. All Rights Reserved.
          </p>

          <div className="flex flex-row md:mt-0 mt-6">
            {socialMedia.map((social, index) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
                onClick={() => window.open(social.link)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
