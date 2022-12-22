import React from "react";
import Logo from "../../svg/Logo";
import "./SignInModal.css";
import googleBtn from "../../assets/google_button.png"
import facebookBtn from "../../assets/facebook_button.png"

export default function Register () {
    
    return (

        <div className="signup form">
            <div className="form_content">
                <button className="close-btn">x</button>
                <header><Logo />
                <div>Sign Up</div>
                </header>

                <form>
                    <div className="field input_field">
                        
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email..." className="input" />
                    </div>

                    <div className="field input_field">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your Password..." className="input" />
                        
                    </div>

                    <div className="field input_field">
                        <label>Repeat your password</label>
                        <input type="password" placeholder="Repeat your password..." className="input" />
                        <i className='bx bx-hide eye-icon'></i>
                    </div>

                    <div className="field input_field">
                        <button>Sign up</button>
                    </div>

                </form>
                    <div className="form_link" >
                        <span>Already have an account? <a href="#" className="login_link" >Login Now</a></span>
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
                    <img src={googleBtn} alt="google-icon" className="google-img"/>
                    
                </a>
            </div>
        </div>

)
    

}