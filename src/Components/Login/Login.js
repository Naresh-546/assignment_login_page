import React from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useState } from "react";

const Login = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  return (
    <>
      <div className="container">
        <div className="container_wrap">
          <div className="title">
            <h1 className="title_name">Welcome To Trello</h1>
            <p className="sub_title_name">Sign in to your account 👇</p>
          </div>

          <div className="login">
            <div className="wrapper">
              <div className="input-field">
                <input
                  type="email"
                  name="email"
                  className="e_input"
                  placeholder="Email"
                  size="60"
                />
                <br />
              </div>
              <a className="email_p" href="#">
                <span className="a_span">Forgot your password?</span>
              </a>
            </div>
            <div className="wrapper">
              <div className="input-field">
                <input
                  type={type}
                  name="password"
                  className="e_input"
                  placeholder="Password"
                  size="60"
                />
                <span onClick={handleToggle}>
                  <Icon icon={icon} size={25} />
                </span>
                <br />
              </div>
              <a className="email_p" href="#">
                <span className="a_span">Forgot your password?</span>
              </a>
            </div>
          </div>
          <div className="btn_div">
            <button className="btn">Login</button>
          </div>
        </div>
        <div className="side_image">
          <img
            src="/Assets/Images/blurish.jpeg"
            alt="background"
            className="side_img"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Login;
