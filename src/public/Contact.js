import React from "react";
import NavigationBar from "./components/NavigationBar";

export default function Contact() {
  return (
    <>
      <NavigationBar />
      <div className="my-5 container">
        <h4 style={{ textAlign: "center" }}>Contact Us</h4>
        <br />
        <p>
          If you have questions or comments about this Privacy Policy, please
          contact us at: <br/><br/>
           TAYARI PAYMENTS COMPANY <br />
          Kumbukumbu Block 41, Kinondoni
          <br />
          Dar es Salaam, Tanzania
          <br />
          +255 766 397 171
          <br />
          info@tayari.co.tz
        </p>
      </div>
    </>
  );
}
