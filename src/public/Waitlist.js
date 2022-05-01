import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import NavigationBar from "./components/NavigationBar";

export default function Waitlist() {

  const [values, setValues] = useState({
    name: "",
    restaurant: "",
    phone: "",
    email: "",
    role: "",
    comment: "",
    country: ""
  });

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(`https://edufund.lyfplus.com/api/countries`).then((value) => {
      setCountries(value.data);
    });
  })

  const handleNameChange = (e) => {
    e.persist();
    setValues({
      ...values,
      name: e.target.value,
    });
  };

  const handleCountryChange = (e) => {
    e.persist();
    setValues({
      ...values,
      country: e.target.value,
    });
  };

  const handleRestaurantChange = (e) => {
    e.persist();
    setValues({
      ...values,
      restaurant: e.target.value,
    });
  };

  const handlePhoneChange = (e) => {
    e.persist();
    setValues({
      ...values,
      phone: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    e.persist();
    setValues({
      ...values,
      email: e.target.value,
    });
  };

  const handleRoleChange = (e) => {
    e.persist();
    setValues({
      ...values,
      role: e.target.value,
    });
  };

  const handleCommentChange = (e) => {
    e.persist();
    setValues({
      ...values,
      comment: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);

    if(values.name == "" || 
      values.country == "" ||
      values.email == "" ||
      values.phone == "" ||
      values.role == "" ||
      values.restaurant == ""
    ){
      return toast.error('Please fill all details')
    }

    axios
      .post("https://waitlist.tayari.co.tz/api/sendMail", values)
      .then(() => {
        toast.success(
          "Thank you for registering with us your form is successfully submitted. One of our members will contact you within 24 hours."
        );
        e.target.reset();
      })
      .catch((err) => {
        toast.error("An error has occurred");
      });
  };

  return (
    <>
      <NavigationBar />
      <div className="my-5 container">
        <h1 style={{ fontSize: "30pt", color: "#1f4072", fontWeight: "700" }}>
          Join our Waitlist
        </h1>
        <br />

        <div className="d-flex flex-row justify-content-center">
          <div className="card shadow p-4" style={{ width: "70%" }}>
            <div className="card-body" style={{ textAlign: "left" }}>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label>Restaurant's name</label>
                  <input
                    onChange={handleRestaurantChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Contact person name</label>
                  <input onChange={handleNameChange} className="form-control" />
                </div>
                <div className="form-group mb-3">
                  <label>Contact number</label>
                  <input
                    onChange={handlePhoneChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Email address</label>
                  <input
                    onChange={handleEmailChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Your role</label>
                  <input onChange={handleRoleChange} className="form-control" />
                </div>
                <div className="form-group mb-3">
                  <label>Your country</label>
                  <select
                    className="form-control"
                    onChange={handleCountryChange}
                  >
                    {countries.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group mb-4">
                  <label>Any other comment</label>
                  <textarea
                    onChange={handleCommentChange}
                    className="form-control"
                  ></textarea>
                </div>
                <div className="form-group mb-3 d-grid">
                  <button
                    type="submit"
                    className="btn text-white"
                    style={{ background: "#1f4072", fontWeight: "800" }}
                  >
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
