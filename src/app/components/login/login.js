import React, { Component } from "react";
import classNames from "classnames";
import Link from "pawjs/src/components/link";
import axios from "axios";

import { connect } from "react-redux";

import { getToken } from "./action";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isChecked: false
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePasswd = this.handleChangePasswd.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleChangePasswd(event) {
    this.setState({ password: event.target.value });
  }
  handleCheckbox(event) {
    this.setState({ isChecked: event.target.checked });
  }
  handleSubmit() {
    axios({
      method: "post",
      url: "http://192.168.0.6:8000/api/authentication/",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        username: this.state.email,
        password: this.state.password
      }
    }).then(function(response) {
      console.log(response);
      const token = response.data.token;
      localStorage.setItem("token", token);
      //this.props.dispatch(getToken(token));
    });
    !this.state.isChecked
      ? this.setState({ email: "", password: "", isChecked: false })
      : "";
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <header className="">
          <div
            className="navbar navbar-fedora navbar-fixed-top is-at-top bs-docs-nav is-not-signed-in is-homepage hide-nav-background-color"
            id="navbar"
            role="navigation"
          >
            <div className="container">
              <div className="navbar-header navbar-header-courses">
                <button
                  className="navbar-toggle"
                  data-target=".navbar-header-collapse"
                  data-toggle="collapse"
                  type="button"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>

                <a className="navbar-brand header-logo" href="\">
                  <span className="sr-only">
                    DumbWays.id - Screencast Pemrograman dengan Teknologi
                    Terkini
                  </span>
                  <img
                    src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/mWcP190oTCqiAo5VjrE8"
                    alt="DumbWays.id - Screencast Pemrograman dengan Teknologi Terkini"
                    srcset="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:120/https://www.filepicker.io/api/file/mWcP190oTCqiAo5VjrE8 2x"
                  />
                </a>

                <div className="collapse navbar-collapse navbar-header-collapse">
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <a
                        className="fedora-navbar-link navbar-link"
                        href="\bootcamp"
                        target=""
                      >
                        Bootcamp
                      </a>
                    </li>
                    <li>
                      <a
                        className="fedora-navbar-link navbar-link"
                        href="\blog"
                        target=""
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="fedora-navbar-link navbar-link"
                        href="\careers"
                        target=""
                      >
                        Careers
                      </a>
                    </li>

                    <li>
                      <a
                        className="navbar-link fedora-navbar-link"
                        href="\login"
                      >
                        Login
                      </a>
                    </li>
                    <li>
                      <a
                        className="btn btn-primary pull-right btn-lg"
                        href="\register"
                      >
                        Sign Up
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="view-school">
          <div class="gray-layout">
            <div class="container on-a-school-layout">
              <div class="row">
                <div class="col-lg-6 col-lg-offset-3 col-sm-8 col-sm-offset-2 text-center">
                  <div class="content-box">
                    <h1 class="text-center">
                      Log In to DumbWays.id - Screencast Pemrograman dengan
                      Teknologi Terkini
                    </h1>
                    <div class="row">
                      <div class="col-sm-10 col-sm-offset-1">
                        <form
                          class="new_user"
                          id="new_user"
                          action="/secure/147364/users/sign_in?flow_school_id=147364"
                          accept-charset="UTF-8"
                          method="post"
                        >
                          <input name="utf8" type="hidden" value="&#x2713;" />
                          <input
                            type="hidden"
                            name="authenticity_token"
                            value="NuPb0jc3GgrxtSleca8nYF0BaHIqGxOHnlxLLUvNBvmZz2GiGG8IfRiY/Y4fXuIg4aCXWNHIo8Y08f81fPa4/Q=="
                          />
                          <input
                            value="147364"
                            type="hidden"
                            name="user[school_id]"
                            id="user_school_id"
                          />
                          <div class="form-group">
                            <label class="control-label" for="user_email">
                              Email Address
                            </label>
                            <div class="control-input">
                              <input
                                autofocus="autofocus"
                                class="form-control input-hg"
                                type="email"
                                value=""
                                name="user[email]"
                                id="user_email"
                              />
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="control-label" for="user_password">
                              Password
                            </label>
                            <div class="control-input">
                              <input
                                autocomplete="off"
                                class="form-control input-hg"
                                type="password"
                                name="user[password]"
                                id="user_password"
                              />
                            </div>
                          </div>
                          <br />
                          <div class="form-group text-center">
                            <input
                              type="submit"
                              name="commit"
                              value="Log In"
                              class="btn btn-primary btn-md login-button"
                            />
                          </div>
                          <br />
                          <center>
                            <a
                              class="link-below-button"
                              href="/secure/147364/users/password/new"
                            >
                              Forgot Password?
                            </a>
                          </center>
                        </form>
                      </div>
                    </div>
                    <div class="box-footer">
                      <a
                        class="box-half"
                        href="/secure/147364/users/sign_up?flow_school_id=147364"
                      >
                        <img
                          src="https://www.filepicker.io/api/file/eOvxLIb4TL61u3FeBhxP"
                          alt="Eovxlib4tl61u3febhxp"
                        />Create an Account
                      </a>
                      <a
                        class="box-half teachable-branded"
                        href="/secure/teachable_accounts/sign_in?flow_school_id=147364"
                      >
                        <img
                          src="https://d2oz8i5n9se8ej.cloudfront.net/assets/teachable-icon-green-915a054a0b8a7fe8981bcbbf1a3d7d177e8b016502cb0e2dbfacd39ed75845cf.svg"
                          alt="Teachable icon green"
                        />Log In with myTeachable
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bottom-menu bottom-menu-inverse">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-4 col-md-4 footer-column">
                <p>
                  &copy; DumbWays.id - Screencast Pemrograman dengan Teknologi
                  Terkini
                </p>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 footer-column">
                <ul className="list-unstyled">
                  <li>
                    <a href="/p/terms">Terms of Use</a>
                  </li>
                  <li>
                    <a href="/p/privacy">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 footer-column">
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://www.facebook.com/ega.sdr/?fref=ts"
                      target="_blank"
                    >
                      Ega Software Development Review
                    </a>
                  </li>
                  <li>
                    <a href="https://www.idrails.com/" target="_blank">
                      IDRails
                    </a>
                  </li>
                  <li>
                    <a href="http://kawankoding.com/" target="_blank">
                      Kawan Koding
                    </a>
                  </li>
                  <li>
                    <a
                      className="powered-by"
                      href="https://teachable.com/?src=school_footer"
                      style={{ visibility: "visible" }}
                    >
                      Powered by
                      <img
                        src="https://d2oz8i5n9se8ej.cloudfront.net/assets/footer/teachable-logo-white-efd32576079839534d5b6e87bf4424e99b12624f854b2c500a4d3f0b6e2af46b.svg"
                        className="powered-by-logo"
                        alt="Teachable"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    login: state.tokenReducer
  };
};
export default connect(mapStateToProps)(Login);
