import React, { Component } from "react";
import classNames from "classnames";
import Link from "pawjs/src/components/link";
import * as styles from "./enrolled.scss";

export default class Enrolled extends Component {
  render() {
    return (
      <div>
        <header className="">
          <div
            className="navbar navbar-fedora navbar-fixed-top is-at-top bs-docs-nav is-signed-in"
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

                <a
                  className="navbar-brand header-logo"
                  href="http://dumbways.id?sa=eyJ1c2VyX2lkIjoxMTY4MjYwMCwiZXhwaXJlc19hdCI6MTUzMDcwMDg2NC42OTU1Njc4LCJzY2hvb2xfaWQiOjE0NzM2NCwiYXV0aGVudGljYXRpb25fdG9rZW4iOiJZNEJ6OEhCMmt4dVB3cHdSUllvRTUzM0ExRFA1OVR2NlpnIn0%3D--c5f5246251bf5f385c5a1958d5e5d066cb124d69"
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

                <div className="collapse navbar-collapse navbar-header-collapse">
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <a
                        className="navbar-link fedora-navbar-link"
                        data-no-turbolink="true"
                        href="/admin"
                      >
                        Admin
                      </a>
                    </li>

                    <li>
                      <a
                        className="fedora-navbar-link navbar-link"
                        href="enrolled.html"
                        target="/enrolled"
                      >
                        My Courses
                      </a>
                    </li>
                    <li>
                      <a
                        className="fedora-navbar-link navbar-link current-page"
                        href="/courses"
                        target=""
                      >
                        All Courses
                      </a>
                    </li>

                    <li className="dropdown">
                      <a
                        aria-expanded="false"
                        aria-haspopup="true"
                        className="fedora-navbar-link navbar-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Preview as
                        <i className="caret" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="" data-no-turbolink="true">
                            {" "}
                            Logged in user{" "}
                          </a>
                        </li>
                        <li>
                          <a href="" className="bold" data-no-turbolink="true">
                            Logged out user{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        aria-expanded="false"
                        aria-haspopup="true"
                        className="fedora-navbar-link navbar-link dropdown-toggle open-my-profile-dropdown"
                        data-toggle="dropdown"
                      >
                        <img
                          className="gravatar"
                          src="https://s.gravatar.com/avatar/51a80c53f3a4d048466d0708063b6cd6?d=mm"
                          alt="qorihaidiralam@gmail.com"
                        />
                        <span className="navbar-current-user">
                          Qori Haidir Alam
                        </span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="user-profile">
                          <a href="/current_user/profile">Edit Profile</a>
                        </li>
                        <li>
                          <a href="/current_user/subscriptions">
                            Manage Subscriptions
                          </a>
                        </li>
                        <li>
                          <a href="/current_user/credit_card">
                            Add / Change Credit Card
                          </a>
                        </li>
                        <li>
                          <a href="/current_user/contact">Contact</a>
                        </li>
                        <li className="user-signout">
                          <a href="/sign_out">Log Out</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="view-school">
          <div className="view-directory course-directory signed-in-directory">
            <div className="container">
              <div className="row search">
                <div className="col-lg-12 col-md-12 col-xs-12 pull-right">
                  <form method="get" action="/courses">
                    <div className="input-group">
                      <label for="search-courses" className="sr-only">
                        Find a course
                      </label>
                      <input
                        className="form-control search input-lg"
                        data-list=".list"
                        id="search-courses"
                        name="query"
                        placeholder="Find a course"
                        type="text"
                      />
                      <span className="input-group-btn">
                        <label for="search-course-button" className="sr-only">
                          Search Courses
                        </label>
                        <button
                          id="search-course-button"
                          className="btn search btn-default btn-lg"
                          type="submit"
                        >
                          <i className="fa fa-search" />
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>

              <div className="row course-list list">
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div
                    data-course-id="304280"
                    data-course-url="/courses/enrolled/304280"
                    className="course-listing"
                  >
                    <div className="row">
                      <a
                        href="/courses/enrolled/304280"
                        data-role="course-box-link"
                      >
                        <div className="col-lg-12">
                          <div className="course-box-image-container">
                            <img
                              className="course-box-image"
                              src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/aoIRY7mSWq0D2GXf9XkA"
                              role="presentation"
                            />
                          </div>
                          <div className="course-listing-title">
                            Video Tutorial: Menjadi Professional Backend
                            Developer dengan Python Django
                          </div>

                          <div className="col-xs-12 hidden">
                            <div className="progressbar">
                              <div className="progressbar-fill" />
                            </div>
                          </div>

                          <div className="course-listing-subtitle">
                            Panduan Lengkap untuk Menjadi Professional Backend
                            Developer dengan Python Django
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="course-listing-extra-info col-xs-12">
                      <div className="pull-left">
                        <img
                          align="left"
                          className="img-circle"
                          src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/Tgz3zHTKhX1IGvQiLgSH"
                          alt="Ega Radiegtya"
                        />
                        <div className="small course-author-name">
                          Ega Radiegtya
                        </div>
                      </div>

                      <div className="pull-right hidden">
                        <div className="small course-progress">
                          <span className="percentage" data-course-id="304280">
                            %
                          </span>
                          <br />COMPLETE
                        </div>
                      </div>

                      <div className="pull-right">
                        <div
                          className="small course-price"
                          id="course-box-price-product-593208"
                        >
                          Rp400,000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div
                    data-course-id="211677"
                    data-course-url="/courses/enrolled/211677"
                    className="course-listing"
                  >
                    <div className="row">
                      <a
                        href="/courses/enrolled/211677"
                        data-role="course-box-link"
                      >
                        <div className="col-lg-12">
                          <div className="course-box-image-container">
                            <img
                              className="course-box-image"
                              src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/8sv09hHRQHWaaOemg6Uq"
                              role="presentation"
                            />
                          </div>
                          <div className="course-listing-title">
                            Video Tutorial: Membangun REST API dengan Express.js
                          </div>

                          <div className="col-xs-12 hidden">
                            <div className="progressbar">
                              <div className="progressbar-fill" />
                            </div>
                          </div>

                          <div className="course-listing-subtitle">
                            Panduan Mudah Membangun REST API Backend dengan
                            Express.js
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="course-listing-extra-info col-xs-12">
                      <div className="pull-left">
                        <img
                          align="left"
                          className="img-circle"
                          src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/Tgz3zHTKhX1IGvQiLgSH"
                          alt="Ega Radiegtya"
                        />
                        <div className="small course-author-name">
                          Ega Radiegtya
                        </div>
                      </div>

                      <div className="pull-right hidden">
                        <div className="small course-progress">
                          <span className="percentage" data-course-id="211677">
                            %
                          </span>
                          <br />COMPLETE
                        </div>
                      </div>

                      <div className="pull-right">
                        <div
                          className="small course-price"
                          id="course-box-price-product-401074"
                        >
                          Rp150,000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div
                    data-course-id="310148"
                    data-course-url="/courses/enrolled/310148"
                    className="course-listing"
                  >
                    <div className="row">
                      <a
                        href="/courses/enrolled/310148"
                        data-role="course-box-link"
                      >
                        <div className="col-lg-12">
                          <div className="course-box-image-container">
                            <img
                              className="course-box-image"
                              src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/Uv0NoZPQKakRxEJPoBFy"
                              role="presentation"
                            />
                          </div>
                          <div className="course-listing-title">
                            Membangun Aplikasi Mobile dengan React Native,
                            Redux, & Laravel (Lumen) REST API
                          </div>

                          <div className="col-xs-12 hidden">
                            <div className="progressbar">
                              <div className="progressbar-fill" />
                            </div>
                          </div>

                          <div className="course-listing-subtitle">
                            Jalan Menjadi Mobile Developer Expert
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="course-listing-extra-info col-xs-12">
                      <div className="pull-left">
                        <img
                          align="left"
                          className="img-circle"
                          src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/Tgz3zHTKhX1IGvQiLgSH"
                          alt="Ega Radiegtya"
                        />
                        <div className="small course-author-name">
                          Ega Radiegtya
                        </div>
                      </div>

                      <div className="pull-right hidden">
                        <div className="small course-progress">
                          <span className="percentage" data-course-id="310148">
                            %
                          </span>
                          <br />COMPLETE
                        </div>
                      </div>

                      <div className="pull-right">
                        <div
                          className="small course-price"
                          id="course-box-price-product-602856"
                        >
                          Rp10,000,000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <center />
                </div>
              </div>
              <br />
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
