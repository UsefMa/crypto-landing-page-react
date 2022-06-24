import React from "react";
import "./SupportStyle.css";

const Support = () => {
  return (
    <>
      <div className="support-container" id="support">
        <div className="support-info">
          <p>
            You Will Get All What You Need To Start
            <br />
            <span> Unlimited Support </span>
          </p>
          <input type="text" placeholder="Put Your Email" />
          <br />
          <button>Send a Message</button>
        </div>
      </div>
    </>
  );
};

export default Support;
