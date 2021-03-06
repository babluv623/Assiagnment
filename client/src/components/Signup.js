import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
// import axios from "axios";
function Signup() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  // const api = axios.create({
  //   baseURL: `http://localhost:3300`,
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    // const res = await api.post("/register", {
    //   name,
    //   email,
    //   phone,
    //   work,
    //   password,
    //   cpassword,
    // });
    const data = await res.json();
    if (res.status === 422 || !data) {
      alert("invalid data");
    } else {
      alert("success");
      history.push("/Login");
    }
  };
  return (
    <>
      <div className="signup-form">
        <form method="POST">
          <h2>Sign Up</h2>
          <p>Please fill in this form to create an account!</p>
          <hr />
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span className="fa fa-user"></span>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Username"
                value={user.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-paper-plane"></i>
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email Address"
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-phone"></i>
                </span>
              </div>
              <input
                type="number"
                className="form-control"
                name="phone"
                placeholder="Phone Number"
                value={user.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-briefcase"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="work"
                placeholder="Your Profession"
                value={user.work}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                  <i className="fa fa-check"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="cpassword"
                placeholder="Confirm Password"
                value={user.cpassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-check-label">
              <input type="checkbox" required /> I accept the
              <NavLink to="/login">Terms of Use</NavLink> &amp;
              <NavLink to="/login">Privacy Policy</NavLink>
            </label>
          </div>
          <div className="form-group">
            <input
              type="button"
              onClick={handleSubmit}
              className="btn btn-primary btn-lg"
              value="SIGN UP"
            />
          </div>

          <div className="text-center">
            Already have an account? <NavLink to="/login">Login here</NavLink>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
