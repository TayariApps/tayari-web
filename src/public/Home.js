import React from "react";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import bg from "../assets/smily.jpg";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <div
        className="container-fluid"
        style={{
          height: "80vh",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
          backgroundPosition: "center center",
        }}
      >
        <div
          className="container d-flex flex-row text-white justify-content-center"
          style={{ height: "100%" }}
        >
          <div style={{ marginTop: "10rem" }}>
            <h3 style={{ fontWeight: "700", fontSize: "30pt" }}>
              For a great experience
            </h3>
            <h3 style={{ fontWeight: "600", fontSize: "25pt" }}>Make Your</h3>

            <div className="d-flex mt-4 flex-row justify-content-center">
              <button
                className="btn btn-light text-danger me-4"
                style={{ fontWeight: "600" }}
              >
                Reservation
              </button>
              <button
                className="btn btn-light text-danger"
                style={{ fontWeight: "600" }}
              >
                Order
              </button>
            </div>

            <div className="d-flex mt-4 text-white flex-row justify-content-center">
              <span className="me-3" style={{ fontSize: "19pt" }}>
                @
              </span>
              <input
                className="form-control me-3"
                style={{ width: "50%", background: "transparent" }}
              />
              <span
                className="me-3"
                style={{ fontSize: "15pt", fontWeight: "600" }}
              >
                Restaurant
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
