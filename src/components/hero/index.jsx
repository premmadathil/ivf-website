import React, { useState } from "react";
import homeImg from "./home_img.jpg";
import "./hero.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../varients";
import BookingForm from "../booking/BookingForm";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const homeText = {
    img: homeImg,
    text: ["Trivandrum", "fertility &", "IVF center"],
    gradientText: "Prims Hospital",
    smallText: "Turning couples into happy family",
  };

  const bookingEvent = () => {
    setVisible(true);
    document.body.classList.add("scroll-prevent");
  };

  const formHeader = "Book a free Consultation";

  return (
    <section className="hero-section position-relative">
      <motion.figure
        variants={fadeIn("down", 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
      >
        <img className="img-fluid" src={homeText.img} alt="home_img" />
      </motion.figure>
      <div className="container">
        <motion.figcaption
          variants={fadeIn("left", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <h3>{homeText.text[0]}</h3>
          <h3>{homeText.text[1]}</h3>
          <h3>{homeText.text[2]}</h3>
          <motion.h3
            className="gradient-text"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            {homeText.gradientText}
          </motion.h3>
          <motion.p
            className="small-text"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            {homeText.smallText}
          </motion.p>
          <motion.button
            className="btn btn-primary btn-sm mt-2 ps-3 pe-3"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            onClick={bookingEvent}
          >
            <i className="ri-calendar-event-line"></i> {formHeader}
          </motion.button>
        </motion.figcaption>
      </div>

      {visible && (
        <BookingForm
          visible={visible}
          setVisible={setVisible}
          header={formHeader}
        />
      )}
    </section>
  );
};

export default HeroSection;
