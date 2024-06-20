import React, { Fragment, useEffect, useState, useRef } from "react";
import { Dialog } from "primereact/dialog";
import { ToastContainer, toast } from "react-toastify";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import emailjs from "@emailjs/browser";
import moment from "moment";
import Loader from "../loader";

const BookingForm = ({ visible, setVisible, header }) => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: null,
  });
  const [errors, setErrors] = useState({ name: false, phone: false });
  const [isLoading, setIsLoading] = useState(false);

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const form = useRef();

  const mailFetch = async () => {
    const { name, phone, message, time } = values;

    const serviceId = "service_0519ufe";
    const templateId = "template_ibkv9gz";
    const publicKey = "iEbVv8UVhq0H_UoAd";

    const formattedTime = time ? moment(time).format("hh:mm A") : "";
    const templateParams = {
      to_email: "prem@gbs-plus.com",
      to_name: "PRIMS Hospital",
      header: header,
      name: name,
      phone: phone,
      time: formattedTime,
      message: message,
    };

    await emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Thank you for your booking.");
          setTimeout(() => {
            setIsLoading(false);
            setVisible(false);
          }, 1500);
        }
        // console.log("Email sent successfully!", response);
        setValues({
          name: "",
          email: "",
          message: "",
          phone: "",
          time: null,
        });
      })
      .catch((error) => {
        if (error) {
          setIsLoading(false);
          toast.error("Error sending email!");
        }
        console.log("Error sending email", error);
      });
  };

  const fomSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: !values.name,
      time: !values.time,
      message: !values.message,
      phone: !validatePhoneNumber(values.phone),
    };
    if (
      !newErrors.name &&
      !newErrors.phone &&
      !newErrors.message &&
      !newErrors.time
    ) {
      // console.log("form submitted", values);
      // toast.success("Thank you");
      setIsLoading(true);
      mailFetch();
      setValues({ name: "", phone: "", email: "", message: "", time: null });
      setErrors({ name: false, phone: false });
      document.body.classList.remove("scroll-prevent");
    } else {
      if (values.name === "") {
        toast.error("Please Enter Name.");
      } else if (values.phone === "" || newErrors.phone) {
        toast.error("Enter Phone Number. (Must be 10 digits)");
      } else if (values.message === "") {
        toast.error("Please Enter Message.");
      } else if (values.time === "") {
        toast.error("Please add time");
      }
      setErrors(newErrors);
    }
  };

  const formChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleTimeChange = (e) => {
    setValues({ ...values, time: e.value });
  };

  return (
    <Fragment>
      <ToastContainer position="top-center" autoClose={1500} theme="dark" />

      <Dialog
        header={header}
        visible={visible}
        style={{ width: "340px" }}
        onHide={() => {
          setVisible(false), document.body.classList.remove("scroll-prevent");
        }}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <form className="form-group journey-form" onSubmit={fomSubmit}>
            <div className="input-group mb-2">
              <div
                className="input-group-text"
                style={
                  errors.name
                    ? {
                        background: "orangered",
                        border: "1px solid orangered",
                        height: "45px",
                        color: "rgba(255, 255, 255, 0.57)",
                      }
                    : { height: "45px" }
                }
              >
                <span>
                  <i className="ri-user-line"></i>
                </span>
              </div>
              <input
                type="text"
                placeholder="Name (Required)"
                className={
                  errors.name
                    ? "form-control mb-2 is-error"
                    : "form-control mb-2"
                }
                name="name"
                value={values.name}
                onChange={formChange}
              />
            </div>
            <div className="input-group mb-2">
              <div
                className="input-group-text"
                style={
                  errors.phone
                    ? {
                        background: "orangered",
                        border: "1px solid orangered",
                        height: "45px",
                        color: "rgba(255, 255, 255, 0.57)",
                      }
                    : { height: "45px" }
                }
              >
                <span>
                  <i className="ri-phone-line"></i>
                </span>
              </div>
              <input
                type="Phone"
                placeholder="Phone (Required)"
                className={
                  errors.phone
                    ? "form-control mb-2 is-error"
                    : "form-control mb-2"
                }
                name="phone"
                value={values.phone}
                onChange={formChange}
              />
            </div>
            <div className="input-group mb-2 flex-auto">
              <div
                className="input-group-text"
                style={
                  errors.time
                    ? {
                        background: "orangered",
                        border: "1px solid orangered",
                        height: "47px",
                        color: "rgba(255, 255, 255, 0.57)",
                      }
                    : { height: "45px" }
                }
              >
                <span>
                  <i className="ri-timer-line"></i>
                </span>
              </div>
              <Calendar
                value={values.time}
                name="time"
                onChange={handleTimeChange}
                timeOnly
                hourFormat="12"
                showTime
                className={errors.time && "is-error"}
                placeholder="Select Time (Required)"
                style={{
                  width: "calc(100% - 42px)",
                  marginBottom: "0.5rem",
                }}
              />
            </div>

            <div className="input-group mb-2">
              <div className="input-group-text" style={{ height: "45px" }}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
              </div>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                name="email"
                value={values.email}
                onChange={formChange}
              />
            </div>

            <textarea
              placeholder="Add Your message (Required)"
              className={
                errors.message
                  ? "form-control mb-2 is-error"
                  : "form-control mb-2"
              }
              name="message"
              value={values.message}
              onChange={formChange}
            />

            <div>
              <button className="btn w-100 btn-sm btn-primary mt-4 ps-3 pe-3">
                Submit
              </button>
            </div>
          </form>
        )}
      </Dialog>
    </Fragment>
  );
};

export default BookingForm;
