import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";
import "../mainPage.css";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);

      navigate("/home");
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main className="flex-row">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header">Login Here</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now save <Link to="/home">your pet.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button className="btn btn-block" type="submit">
                  Submit
                </button>
              </form>
            )}

            {error && <div className="my-3 p-3 bg-danger">{error.message}</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
