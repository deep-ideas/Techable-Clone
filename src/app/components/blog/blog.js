import React, { Component } from "react";
import classNames from "classnames";
import Link from "pawjs/src/components/link";

export default class Blog extends Component {
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
                        href="C:\xampp\htdocs\home\dumbways.id\careers.html"
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
                        href="C:\xampp\htdocs\home\dumbways.id\signup.html"
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
          <div className="homepage-hero blog">
            <div className="container">
              <div className="row text-center">
                <h2 className="headline">
                  <a href="/blog">DumbWays.id Blog</a>
                </h2>
                <h3 className="subtitle">
                  Rahasia Mudah Belajar Pemrograman dengan Teknologi Terkini
                </h3>
              </div>
            </div>
          </div>
          <div className="blog-container">
            <div className="container">
              <div className="row">
                <div className="col-sm-9">
                  <div className="post">
                    <h1>
                      <a href="/blog/1067548/jangan-sampai-isu-lisensi-react-mempengaruhi-produktifitasmu">
                        Jangan Sampai Isu Lisensi React Mempengaruhi
                        Produktifitasmu!
                      </a>
                    </h1>
                    <div className="post-byline">
                      <img src="https://www.filepicker.io/api/file/Tgz3zHTKhX1IGvQiLgSH" />
                      <div className="post-author-name">Ega Radiegtya</div>
                      <div className="post-date">24 August, 2017</div>
                    </div>
                    <div className="post-content">
                      Jangan Sampai Isu Lisensi React Mempengaruhi
                      Produktifitasmu! Baru-baru ini Isu tak sedap tentang
                      Lisensi React muncul kembali ke permukaan dan booming
                      dalam sekejap. Hal itu dikarenakan beberapa artikel...
                      <p className="read-more">
                        <a href="/blog/jangan-sampai-isu-lisensi-react-mempengaruhi-produktifitasmu">
                          READ MORE
                        </a>
                      </p>
                    </div>
                  </div>
                  <center>
                    <br />
                  </center>
                </div>
                <div className="col-sm-3">
                  <div className="sidebar-block">
                    <h2>ABOUT</h2>
                    <div className="content" />
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
