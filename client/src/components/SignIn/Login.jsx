import React from "react";
import Logo from "../../svg/Logo";
import "./SignInModal.css";
import googleBtn from "../../assets/google_button.png";
import facebookBtn from "../../assets/facebook_button.png";

export default function Login() {
  return (
    <div className="login form">
      <div className="form_content">
        <header>
          <Logo />
          <div>Login</div>
        </header>

        <form>
          <div className="field input_field">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email..."
              className="input"
            />
          </div>

          <div className="field input_field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your Password..."
              className="input"
            />
            <i className="bx bx-hide eye-icon"></i>
          </div>

          <div className="form_link">
            <span>
              <label>
                <input
                  type="checkbox"
                  id="remember_user"
                  name="remember_user"
                />
                Remember me
              </label>
              <a href="#" className="forgot_pass">
                Forgot Password?
              </a>
            </span>
          </div>

          <div className="field button_field">
            <button>Login</button>
          </div>
        </form>
        <div className="form_link">
          <span>
            Don't have an account?{" "}
            <a href="#" className="signup_link">
              Signup
            </a>
          </span>
        </div>
      </div>

      <div className="line"></div>

      <div className="media_options">
        <a href="#" className="field facebook">
          <img src={facebookBtn} alt="facebook-img" className="facebook-img" />
        </a>
      </div>

      <div className="media_options">
        <a href="#" className="field google">
          <img src={googleBtn} alt="google-icon" className="google-img" />
        </a>
      </div>
    </div>
  );
}
