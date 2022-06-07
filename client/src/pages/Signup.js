import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="login-box">
          <h2 className="">Sign Up</h2>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <div className="user-box">
                <input
                  className="form-input"
                  placeholder="Your First Name"
                  name="firstName"
                  type="firstName"
                  id="firstName"
                  value={formState.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="user-box">
                <input
                  className="form-input"
                  placeholder="Your Last Name"
                  name="lastName"
                  type="lastName"
                  id="lastName"
                  value={formState.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="user-box">
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>

              <div className="user-box">
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  id="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </div>
              <button className="btn d-block w-100" type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Sign Up
              </button>
            </form>

            {error && <div>Signup failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
