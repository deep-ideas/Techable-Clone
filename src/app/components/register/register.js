import React, { Component } from "react";
import classNames from "classnames";
import Link from "pawjs/src/components/link";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
      sign_up_as: false,
      isChecked: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFistName = this.handleChangeFistName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeSignUp = this.handleChangeSignUp.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }
  //onchange event handler
  handleChangeFistName(event) {
    this.setState({ first_name: event.target.value });
  }
  handleChangeLastName(event) {
    this.setState({ last_name: event.target.value });
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }
  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }
  handleChangeSignUp(event) {
    this.setState({ sign_up_as: event.target.value });
  }
  handleCheckbox(event) {
    this.setState({ isChecked: event.target.checked });
    console.log(event.target.checked);
  }

  //submit handler
  handleSubmit(event) {
    alert(
      "nama: " +
        this.state.first_name +
        " " +
        this.state.last_name +
        " email :" +
        this.state.email +
        " passwd " +
        this.state.isChecked
    );
    this.setState({ isChecked: false });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <header className="">
          <div
            className="navbar navbar-fedora navbar-fixed-top is-at-top bs-docs-nav is-not-signed-in"
            id="navbar"
            role="navigation"
          >
            <div className="container">
              <div className="navbar-header">
                <a
                  className="navbar-brand header-logo"
                  href="\"
                >
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
              </div>
            </div>
          </div>
        </header>
        <div className="view-school">
          <div className="gray-layout">
            <div className="container on-a-school-layout">
              <div className="row">
                <div className="col-lg-6 col-lg-offset-3 col-sm-8 col-sm-offset-2 text-center">
                  <div className="content-box">
                    <h1>
                      Sign Up to DumbWays.id - Screencast Pemrograman dengan
                      Teknologi Terkini
                    </h1>
                    <div className="row">
                      <div className="col-sm-10 col-sm-offset-1">
                        <form
                          className="new_user"
                          id="new_user"
                          action="/secure/147364/users?flow_school_id=147364"
                          accept-charset="UTF-8"
                          method="post"
                        >
                          <input name="utf8" type="hidden" value="&#x2713;" />
                          <input
                            type="hidden"
                            name="authenticity_token"
                            value="yrl6W91bjkAxOWDxY1sZ1GZqFRbdSwiqzhCQuPfbyEcoxgLvfUiIjuA26zRslH2RS3aocyxSBo1FCCLJbq9GSQ=="
                          />
                          <input
                            value="147364"
                            type="hidden"
                            name="user[school_id]"
                            id="user_school_id"
                          />
                          <div className="form-group">
                            <div className="control-input">
                              <input
                                value="147364"
                                type="hidden"
                                name="user[school_id]"
                                id="user_school_id"
                              />
                              <label className="control-label" for="user_name">
                                Full Name
                              </label>
                              <input
                                autofocus="autofocus"
                                className="form-control input-hg"
                                type="text"
                                name="user[name]"
                                id="user_name"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label" for="user_email">
                              Email Address
                            </label>
                            <div className="control-input">
                              <input
                                className="form-control input-hg"
                                type="email"
                                name="user[email]"
                                id="user_email"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <label
                                className="control-label"
                                for="user_password"
                              >
                                Password
                              </label>
                              <div className="control-input form-group">
                                <input
                                  autocomplete="off"
                                  className="form-control input-hg"
                                  type="password"
                                  name="user[password]"
                                  id="user_password"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <label
                                className="control-label"
                                for="user_password_confirmation"
                              >
                                Confirm Password
                              </label>
                              <div className="control-input form-group">
                                <input
                                  autocomplete="off"
                                  className="form-control input-hg"
                                  type="password"
                                  name="user[password_confirmation]"
                                  id="user_password_confirmation"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group text-left">
                            <label className="control-label agree-to-terms">
                              <input
                                name="user[unsubscribe_from_marketing_emails]"
                                type="hidden"
                                value="true"
                              />
                              <input
                                type="checkbox"
                                value="false"
                                name="user[unsubscribe_from_marketing_emails]"
                                id="user_unsubscribe_from_marketing_emails"
                              />&nbsp;&nbsp;I agree to receive instructional and
                              promotional emails
                            </label>
                          </div>
                          <div className="form-group text-left">
                            <label className="control-label agree-to-terms">
                              <input
                                name="user[agreed_to_terms]"
                                type="hidden"
                                value="false"
                              />
                              <input
                                default="default"
                                type="checkbox"
                                value="true"
                                name="user[agreed_to_terms]"
                                id="user_agreed_to_terms"
                              />&nbsp;&nbsp; I agree to
                              <strong>Teachable's</strong>
                              <a
                                target="_blank"
                                href="https://teachable.com/terms-of-service/"
                                target="_blank"
                              >
                                Terms of Use
                              </a>{" "}
                              &
                              <a
                                target="_blank"
                                href="https://teachable.com/privacy-policy/"
                                target="_blank"
                              >
                                Privacy Policy
                              </a>
                              <br />and
                              <strong>
                                DumbWays.id - Screencast Pemrograman dengan
                                Teknologi Terkini's
                              </strong>
                              <a
                                href="http://dumbways.id/p/terms"
                                target="_blank"
                              >
                                Terms of Use
                              </a>{" "}
                              &
                              <a
                                href="http://dumbways.id/p/privacy"
                                target="_blank"
                              >
                                Privacy Policy
                              </a>
                            </label>
                          </div>
                          <center>
                            <input
                              type="submit"
                              name="commit"
                              value="Sign Up"
                              className="btn btn-primary btn-md signup-button"
                            />
                          </center>
                        </form>
                      </div>
                    </div>
                    <div className="box-footer">
                      <a
                        className="box-half login-button"
                        href="/secure/147364/users/sign_in?flow_school_id=147364"
                      >
                        <img
                          src="https://www.filepicker.io/api/file/eOvxLIb4TL61u3FeBhxP"
                          alt="Eovxlib4tl61u3febhxp"
                        />Log In with a School Account
                      </a>
                      <a
                        className="box-half login-button"
                        href="/secure/teachable_accounts/sign_in?flow_original_intention=school_sign_up&amp;flow_school_id=147364"
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
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
