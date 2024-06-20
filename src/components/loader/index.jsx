import React from "react";
import LoaderImg from "../../assets/images/loader/loader.gif";

const Loader = () => {
  const loaderStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const textBold = { fontWeight: "bold" };
  return (
    <div style={loaderStyle}>
      <img
        style={{ width: "120px" }}
        src={LoaderImg}
        className="loader"
        alt="#"
      />
      <p style={textBold}>Loading...</p>
    </div>
  );
};

export default Loader;
