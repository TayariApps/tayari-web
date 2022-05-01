import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const style = {
    fontWeight: "bold",
    textDecoration: "none",
    color: "white",
    fontSize: "14pt",
  };

  return (
    <div className="container-fluid bg-danger py-5 text-white">
      <div className="row">
        <div className="col-md-4 text-center mb-2 col-sm-12 col-xs-12">
          <Link to="/terms" style={style}>
            Terms & Conditions
          </Link>
        </div>
        <div className="col-md-4 text-center mb-2 col-sm-12 col-xs-12">
          <Link to="/privacy" style={style}>
            Privacy Policy
          </Link>
        </div>
        <div className="col-md-4 text-center mb-2 col-sm-12 col-xs-12">
          <Link to="/contact" style={style}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
