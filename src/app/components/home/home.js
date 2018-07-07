import React, { Component } from "react";
// import * as styles from "./program.scss";
import Link from "pawjs/src/components/link";

// import jQuery from "../../../resources/js/jquery.min.js";
// import FirstPanel from "./sections/first-panel";
// import FloatDiv from "./sections/float-div";
// import Service from "./sections/service";
// import HireTab from "./sections/hire-tab";
// import OurProgram from "./sections/our-program";
// import Team from "./sections/team";
// import HiringPatner from "./sections/hiring-patner";
// import Testimonal from "./sections/testimonial";
// import Schedule from "./sections/schedule";
// import ProgramTulition from "./sections/program-tulition";
// import CompanyPatner from "./sections/company-patner";

export default class Home extends Component {
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

                <a
                  className="navbar-brand header-logo"
                  href="http://dumbways.id"
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

        <div className="view-school">
          <div
            className="blocks-page blocks-page-homepage "
            id="blocks-page-1053850"
          >
            <div
              className="course-block block homepage_hero "
              id="block-3970101"
            >
              <div className="homepage-hero">
                <div className="container">
                  <div className="row text-center">
                    <h2 className="headline">
                      Screencast Pemrograman Zaman Now
                    </h2>
                    <h3 className="subtitle">
                      Rahasia Mudah Belajar Pemrograman dengan Teknologi Terkini
                    </h3>
                    <br />
                    <br />
                    <a
                      className="btn-primary btn-hg text-center"
                      href="\register"
                    >
                      Sign Up Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="course-block block featured_courses "
              id="block-3970102"
            >
              <div className="container">
                <h2>Featured Courses</h2>

                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div
                    data-course-id="208904"
                    data-course-url="/p/ebook-react-native-dan-laravel"
                    className="course-listing"
                  >
                    <div className="row">
                      <a
                        href="/p/ebook-react-native-dan-laravel"
                        data-role="course-box-link"
                      >
                        <div className="col-lg-12">
                          <div className="course-box-image-container">
                            <img
                              className="course-box-image"
                              src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/byjMh2jRkqS1fMVrr0YY"
                              role="presentation"
                            />
                          </div>
                          <div className="course-listing-title">
                            Ebook: React Native dan Laravel
                          </div>

                          <div className="col-xs-12 hidden">
                            <div className="progressbar">
                              <div className="progressbar-fill" />
                            </div>
                          </div>

                          <div className="course-listing-subtitle">
                            React Native dan Laravel untuk Masa Depan Mobile
                            Development
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
                          <span className="percentage" data-course-id="208904">
                            %
                          </span>
                          <br />COMPLETE
                        </div>
                      </div>

                      <div className="pull-right">
                        <div
                          className="small course-price"
                          id="course-box-price-product-389351"
                        >
                          Rp350,000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div
                    data-course-id="304280"
                    data-course-url="/p/django"
                    className="course-listing"
                  >
                    <div className="row">
                      <a href="/p/django" data-role="course-box-link">
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
                    data-course-id="209045"
                    data-course-url="/p/react-native-redux"
                    className="course-listing"
                  >
                    <div className="row">
                      <a
                        href="/p/react-native-redux"
                        data-role="course-box-link"
                      >
                        <div className="col-lg-12">
                          <div className="course-box-image-container">
                            <img
                              className="course-box-image"
                              src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/cP7RA8HgRi1FkVA20Zxg"
                              role="presentation"
                            />
                          </div>
                          <div className="course-listing-title">
                            Video Tutorial: React Native dan Redux
                          </div>

                          <div className="col-xs-12 hidden">
                            <div className="progressbar">
                              <div className="progressbar-fill" />
                            </div>
                          </div>

                          <div className="course-listing-subtitle">
                            Panduan Lengkap untuk Membuat Aplikasi Mobile dengan
                            React Native dan Redux
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
                          <span className="percentage" data-course-id="209045">
                            %
                          </span>
                          <br />COMPLETE
                        </div>
                      </div>

                      <div className="pull-right">
                        <div
                          className="small course-price"
                          id="course-box-price-product-390118"
                        >
                          Rp350,000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div
                    data-course-id="275081"
                    data-course-url="/p/python-untuk-pemula"
                    className="course-listing"
                  >
                    <div className="row">
                      <a
                        href="/p/python-untuk-pemula"
                        data-role="course-box-link"
                      >
                        <div className="col-lg-12">
                          <div className="course-box-image-container">
                            <img
                              className="course-box-image"
                              src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/7FfC8N1PQeVONV9DGFGg"
                              role="presentation"
                            />
                          </div>
                          <div className="course-listing-title">
                            Video Tutorial: Python untuk Pemula
                          </div>

                          <div className="col-xs-12 hidden">
                            <div className="progressbar">
                              <div className="progressbar-fill" />
                            </div>
                          </div>

                          <div className="course-listing-subtitle">
                            Panduan Lengkap untuk mempelajari Python Fundamental
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
                          <span className="percentage" data-course-id="275081">
                            %
                          </span>
                          <br />COMPLETE
                        </div>
                      </div>

                      <div className="pull-right">
                        <div
                          className="small course-price"
                          id="course-box-price-product-569021"
                        >
                          Rp100,000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div
                    data-course-id="211677"
                    data-course-url="/p/video-tutorial-membangun-rest-api-dengan-express-js"
                    className="course-listing"
                  >
                    <div className="row">
                      <a
                        href="/p/video-tutorial-membangun-rest-api-dengan-express-js"
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
                    data-course-id="214082"
                    data-course-url="/p/javascript-untuk-pemula"
                    className="course-listing"
                  >
                    <div className="row">
                      <a
                        href="/p/javascript-untuk-pemula"
                        data-role="course-box-link"
                      >
                        <div className="col-lg-12">
                          <div className="course-box-image-container">
                            <img
                              className="course-box-image"
                              src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/2hUjHGiQHaZFSoOOU5pA"
                              role="presentation"
                            />
                          </div>
                          <div className="course-listing-title">
                            Javascript untuk Pemula
                          </div>

                          <div className="col-xs-12 hidden">
                            <div className="progressbar">
                              <div className="progressbar-fill" />
                            </div>
                          </div>

                          <div className="course-listing-subtitle">
                            Panduan Lengkap Javascript Fundamental
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
                          <span className="percentage" data-course-id="214082">
                            %
                          </span>
                          <br />COMPLETE
                        </div>
                      </div>

                      <div className="pull-right">
                        <div
                          className="small course-price"
                          id="course-box-price-product-569024"
                        >
                          Rp100,000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div
                    data-course-id="225695"
                    data-course-url="/p/react-untuk-pemula"
                    className="course-listing"
                  >
                    <div className="row">
                      <a
                        href="/p/react-untuk-pemula"
                        data-role="course-box-link"
                      >
                        <div className="col-lg-12">
                          <div className="course-box-image-container">
                            <img
                              className="course-box-image"
                              src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/UbPJZK2wQJ2bMNUYGBLb"
                              role="presentation"
                            />
                          </div>
                          <div className="course-listing-title">
                            Video Tutorial: React Js untuk Pemula
                          </div>

                          <div className="col-xs-12 hidden">
                            <div className="progressbar">
                              <div className="progressbar-fill" />
                            </div>
                          </div>

                          <div className="course-listing-subtitle">
                            Panduan Lengkap untuk Membuat Aplikasi Web Frontend
                            dengan React Js untuk Pemula
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
                          <span className="percentage" data-course-id="225695">
                            %
                          </span>
                          <br />COMPLETE
                        </div>
                      </div>

                      <div className="pull-right">
                        <div
                          className="small course-price"
                          id="course-box-price-product-428041"
                        >
                          FREE
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div
                    data-course-id="223362"
                    data-course-url="/p/video-tutorial-react-dan-graphql"
                    className="course-listing"
                  >
                    <div className="row">
                      <a
                        href="/p/video-tutorial-react-dan-graphql"
                        data-role="course-box-link"
                      >
                        <div className="col-lg-12">
                          <div className="course-box-image-container">
                            <img
                              className="course-box-image"
                              src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/25bDRxlYRgaBsIqmmzbX"
                              role="presentation"
                            />
                          </div>
                          <div className="course-listing-title">
                            Video Tutorial: React dan GraphQL
                          </div>

                          <div className="col-xs-12 hidden">
                            <div className="progressbar">
                              <div className="progressbar-fill" />
                            </div>
                          </div>

                          <div className="course-listing-subtitle">
                            Panduan Lengkap untuk Membuat Aplikasi Web dengan
                            React dan GraphQL untuk Investasi Masa Depan
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
                          <span className="percentage" data-course-id="223362">
                            %
                          </span>
                          <br />COMPLETE
                        </div>
                      </div>

                      <div className="pull-right">
                        <div
                          className="small course-price"
                          id="course-box-price-product-422619"
                        >
                          Rp350,000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div
                    data-course-id="240601"
                    data-course-url="/p/ultimate-react-native-course"
                    className="course-listing"
                  >
                    <div className="row">
                      <a
                        href="/p/ultimate-react-native-course"
                        data-role="course-box-link"
                      >
                        <div className="col-lg-12">
                          <div className="course-box-image-container">
                            <img
                              className="course-box-image"
                              src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/L5PD2aBfSGOevvLOcFUZ"
                              role="presentation"
                            />
                          </div>
                          <div className="course-listing-title">
                            Ultimate React Native Course
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
                          <span className="percentage" data-course-id="240601">
                            %
                          </span>
                          <br />COMPLETE
                        </div>
                      </div>

                      <div className="pull-right">
                        <div
                          className="small course-price"
                          id="course-box-price-product-485141"
                        >
                          Rp2,000,000
                        </div>
                      </div>
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
