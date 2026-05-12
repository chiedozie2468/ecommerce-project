import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [mood, setMood] = useState("login");
  const [error, setError] = useState(null);
  const { signUp, user, logout, login } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    setError(null); // Clear previous errors at start
    let result;

    if (mood === "signup") {
      result = signUp(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }

    if (result.success) {
      navigate("/");
    } else {
      setError(result.error || "Invalid email or password");
    }
  }

  return (
    <div className="page">
      <div className="container">
        {user && <p style={{ fontSize: "14px" }}>Welcome, {user.email}!</p>}
        <button type="button" onClick={logout}>
          logout
        </button>
        <div className="page-title">
          {mood === "login" ? "Login" : "Sign Up"}

          <form
            action=""
            className="auth-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            {error && <p className="error">{error}</p>}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+\.\S+$/,
                })}
              />

              {errors.email && (
                <span className="error">
                  Please enter a valid email address
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                })}
              />
              {errors.password && (
                <span className="error">
                  Password must be between 6 and 12 characters
                </span>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              {mood === "login" ? "Login" : "Sign Up"}
            </button>
          </form>
        </div>
        <div className="auth-switch">
          {mood === "signup" ? (
            <p>
              Already have an account?{" "}
              <span
                className="auth-link"
                style={{ color: "blue" }}
                onClick={() => setMood("login")}
              >
                Login
              </span>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <span
                className="auth-link"
                style={{ color: "blue" }}
                onClick={() => setMood("signup")}
              >
                SignUp
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
