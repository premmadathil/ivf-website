import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../varients";
import BookingForm from "../booking/BookingForm";

const ExploreNewCard = ({ data, index }) => {
  const { image, content = [], heading } = data;
  const [visible, setVisible] = React.useState(false);

  const sechduleEvent = () => {
    setVisible(true);
  };

  return (
    <Fragment>
      <motion.div
        className="col-lg-6 mb-4 d-flex"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        transition={index * 0.1}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="explore-card p-4 d-flex flex-column align-items-start">
          <div className="mb-4">
            <img src={image} alt="" />
            <h4>{heading}</h4>
            <div className="mb-3">
              {content.map((list, index) => {
                return (
                  <Fragment key={index}>
                    <p className="m-0">{list}</p>
                  </Fragment>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            className="btn btn-sm btn-outline-primary mt-auto"
            onClick={() => sechduleEvent(heading)}
          >
            Shedule Appointment →
          </button>
        </div>
      </motion.div>
      {visible && (
        <BookingForm
          visible={visible}
          setVisible={setVisible}
          header={heading}
        />
      )}
    </Fragment>
  );
};

export default ExploreNewCard;
