/**
 * Created by Yash Thakur
 * Date: 21/12/17
 * Time: 11:19 AM
 */

import React, { Component } from "react";
// import _ from "lodash";
// import { connect } from "react-redux";
// import {decrementCounter, incrementCounter} from "./action";

// @connect((state) => {
//   return {
//     counterValue: _.get(state.counter, "count", 0)
//   };
// })
export default class Curriculum extends Component {
  //   incrementCounter(e) {
  //     if(e && e.preventDefault) {
  //       e.preventDefault();
  //     }
  //     this.props.dispatch(incrementCounter());
  //   }

  //   decrementCounter(e) {
  //     if(e && e.preventDefault) {
  //       e.preventDefault();
  //     }
  //     this.props.dispatch(decrementCounter());
  //   }
  render() {
    return (
      <div>
        <header className="full-width half-height is-signed-in">
          <div className="navbar navbar-fedora">
            <div className="navbar-header">
              <div className="lecture-left">
                <a className="nav-icon-back" href="\courses">
                  <i className="fa fa-angle-left" />
                </a>
              </div>
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
              
              <div className="collapse navbar-collapse navbar-header-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <div className="navbar-enrolled">
                    
                    <li className="selected">
                      <a href="/courses/211677" className="sidebar-nav-link">
                        <span className="lecture-sidebar-icon">
                          <i className="fa fa-list-alt" />
                        </span>
                        Class Curriculum
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="/courses/211677/author_bio"
                        className="sidebar-nav-link"
                      >
                        <span className="lecture-sidebar-icon">
                          <i className="fa fa-user" />
                        </span>
                        Your Instructor
                      </a>
                    </li>
                  </div>
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
        </header>
        <div className="course-sidebar">
         
          <img
            className="course-image"
            src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/aoIRY7mSWq0D2GXf9XkA"
          />
          <h2>
            Video Tutorial: Menjadi Professional Backend Developer dengan Python
            Django
          </h2>
     
          <div className="course-progress">
            <div className="progressbar">
              <div className="progressbar-fill" style={{ minWidth: "0%" }} />
            </div>
            <div className="small course-progress">
              <span className="percentage">0%</span>
              COMPLETE
            </div>
          </div>
          <ul className="sidebar-nav">
         
            <li className="selected">
              <a href="/courses/304280" className="sidebar-nav-link">
                <span className="lecture-sidebar-icon">
                  <i className="fa fa-list-alt" />
                </span>
                Class Curriculum
              </a>
            </li>
            <li className="">
              <a href="/courses/304280/author_bio" className="sidebar-nav-link">
                <span className="lecture-sidebar-icon">
                  <i className="fa fa-user" />
                </span>
                Your Instructor
              </a>
            </li>
          </ul>
        </div>
        <div className="course-mainbar" style={{ display: "block" }}>
          <h2 className="section-title">Class Curriculum</h2>
          <div className="next-lecture-wrapper">
            <a
              className="btn btn-primary start-next-lecture"
              data-no-turbolink="true"
            >
              Start next lecture&nbsp;&nbsp;&#8250;
            </a>
            <span className="next-lecture-name hidden-sm" />
          </div>
        
          <div className="row">
            <div className="col-sm-12 course-section">
              <div
                className="section-title"
                data-release-date=""
                data-days-until-dripped="0"
                data-is-dripped-by-date="false"
                data-course-id="304280"
              >
                <span className="section-lock">
                  <i className="fa fa-lock" />&nbsp;
                </span>
                Intro
                <div className="section-days-to-drip">
                  <div className="section-days-logged-in">
                    Available in
                    <span className="section-days-to-drip-number" />
                    days
                  </div>
                  <div className="section-days-logged-out">
                    <span className="section-days-to-drip-number" />
                    days after you enroll
                  </div>
                </div>
              </div>
              <ul className="section-list">
                <li
                  className="section-item incomplete"
                  data-lecture-id="4681895"
                >
                  <a
                    className="item"
                    data-no-turbolink="true"
                    href="\lecture"
                  >
                    <span className="status-container">
                      <span className="status-icon">&nbsp;</span>
                    </span>
                    <div className="title-container">
                      <div className="btn-primary btn-sm pull-right">Start</div>
                      <span className="lecture-icon">
                        <i className="fa fa-youtube-play" />
                      </span>
                      <span className="lecture-name">1. Intro_ (4:09)</span>
                    </div>
                  </a>
                </li>
                <li
                  className="section-item incomplete"
                  data-lecture-id="4681894"
                >
                  <a
                    className="item"
                    data-no-turbolink="true"
                    href="/courses/304280/lectures/4681894"
                  >
                    <span className="status-container">
                      <span className="status-icon">&nbsp;</span>
                    </span>
                    <div className="title-container">
                      <div className="btn-primary btn-sm pull-right">Start</div>
                      <span className="lecture-icon">
                        <i className="fa fa-youtube-play" />
                      </span>
                      <span className="lecture-name">2. Setup_ (7:21)</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 course-section">
              <div
                className="section-title"
                data-release-date=""
                data-days-until-dripped="0"
                data-is-dripped-by-date="false"
                data-course-id="304280"
              >
                <span className="section-lock">
                  <i className="fa fa-lock" />&nbsp;
                </span>
                Django
                <div className="section-days-to-drip">
                  <div className="section-days-logged-in">
                    Available in
                    <span className="section-days-to-drip-number" />
                    days
                  </div>
                  <div className="section-days-logged-out">
                    <span className="section-days-to-drip-number" />
                    days after you enroll
                  </div>
                </div>
              </div>
              <ul className="section-list">
                <li
                  className="section-item incomplete"
                  data-lecture-id="4681896"
                >
                  <a
                    className="item"
                    data-no-turbolink="true"
                    href="/courses/304280/lectures/4681896"
                  >
                    <span className="status-container">
                      <span className="status-icon">&nbsp;</span>
                    </span>
                    <div className="title-container">
                      <div className="btn-primary btn-sm pull-right">Start</div>
                      <span className="lecture-icon">
                        <i className="fa fa-youtube-play" />
                      </span>
                      <span className="lecture-name">
                        3. First Module_ (10:53)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  className="section-item incomplete"
                  data-lecture-id="4681906"
                >
                  <a
                    className="item"
                    data-no-turbolink="true"
                    href="/courses/304280/lectures/4681906"
                  >
                    <span className="status-container">
                      <span className="status-icon">&nbsp;</span>
                    </span>
                    <div className="title-container">
                      <div className="btn-primary btn-sm pull-right">Start</div>
                      <span className="lecture-icon">
                        <i className="fa fa-youtube-play" />
                      </span>
                      <span className="lecture-name">
                        4. Database Setup & Migration_ (4:37)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  className="section-item incomplete"
                  data-lecture-id="4681905"
                >
                  <a
                    className="item"
                    data-no-turbolink="true"
                    href="/courses/304280/lectures/4681905"
                  >
                    <span className="status-container">
                      <span className="status-icon">&nbsp;</span>
                    </span>
                    <div className="title-container">
                      <div className="btn-primary btn-sm pull-right">Start</div>
                      <span className="lecture-icon">
                        <i className="fa fa-youtube-play" />
                      </span>
                      <span className="lecture-name">
                        5. Models and Migrations_ (9:30)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  className="section-item incomplete"
                  data-lecture-id="4681908"
                >
                  <a
                    className="item"
                    data-no-turbolink="true"
                    href="/courses/304280/lectures/4681908"
                  >
                    <span className="status-container">
                      <span className="status-icon">&nbsp;</span>
                    </span>
                    <div className="title-container">
                      <div className="btn-primary btn-sm pull-right">Start</div>
                      <span className="lecture-icon">
                        <i className="fa fa-youtube-play" />
                      </span>
                      <span className="lecture-name">
                        6. Basic Query using Django ORM_ (12:23)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  className="section-item incomplete"
                  data-lecture-id="4681904"
                >
                  <a
                    className="item"
                    data-no-turbolink="true"
                    href="/courses/304280/lectures/4681904"
                  >
                    <span className="status-container">
                      <span className="status-icon">&nbsp;</span>
                    </span>
                    <div className="title-container">
                      <div className="btn-primary btn-sm pull-right">Start</div>
                      <span className="lecture-icon">
                        <i className="fa fa-youtube-play" />
                      </span>
                      <span className="lecture-name">
                        7. Virtualenv_ (4:33)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  className="section-item incomplete"
                  data-lecture-id="4681907"
                >
                  <a
                    className="item"
                    data-no-turbolink="true"
                    href="/courses/304280/lectures/4681907"
                  >
                    <span className="status-container">
                      <span className="status-icon">&nbsp;</span>
                    </span>
                    <div className="title-container">
                      <div className="btn-primary btn-sm pull-right">Start</div>
                      <span className="lecture-icon">
                        <i className="fa fa-youtube-play" />
                      </span>
                      <span className="lecture-name">
                        8. Admin Page_ (6:57)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  className="section-item incomplete"
                  data-lecture-id="4681971"
                >
                  <a
                    className="item"
                    data-no-turbolink="true"
                    href="/courses/304280/lectures/4681971"
                  >
                    <span className="status-container">
                      <span className="status-icon">&nbsp;</span>
                    </span>
                    <div className="title-container">
                      <div className="btn-primary btn-sm pull-right">Start</div>
                      <span className="lecture-icon">
                        <i className="fa fa-youtube-play" />
                      </span>
                      <span className="lecture-name">
                        9. Django Rest Framework_ (16:22)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  className="section-item incomplete"
                  data-lecture-id="4681974"
                >
                  <a
                    className="item"
                    data-no-turbolink="true"
                    href="/courses/304280/lectures/4681974"
                  >
                    <span className="status-container">
                      <span className="status-icon">&nbsp;</span>
                    </span>
                    <div className="title-container">
                      <div className="btn-primary btn-sm pull-right">Start</div>
                      <span className="lecture-icon">
                        <i className="fa fa-youtube-play" />
                      </span>
                      <span className="lecture-name">10. POSTMAN_ (5:54)</span>
                    </div>
                  </a>
                </li>
                <li
                  className="section-item incomplete"
                  data-lecture-id="4681973"
                >
                  <a
                    className="item"
                    data-no-turbolink="true"
                    href="/courses/304280/lectures/4681973"
                  >
                    <span className="status-container">
                      <span className="status-icon">&nbsp;</span>
                    </span>
                    <div className="title-container">
                      <div className="btn-primary btn-sm pull-right">Start</div>
                      <span className="lecture-icon">
                        <i className="fa fa-youtube-play" />
                      </span>
                      <span className="lecture-name">
                        11. Filtering_ (5:01)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  className="section-item incomplete"
                  data-lecture-id="4681972"
                >
                  <a
                    className="item"
                    data-no-turbolink="true"
                    href="/courses/304280/lectures/4681972"
                  >
                    <span className="status-container">
                      <span className="status-icon">&nbsp;</span>
                    </span>
                    <div className="title-container">
                      <div className="btn-primary btn-sm pull-right">Start</div>
                      <span className="lecture-icon">
                        <i className="fa fa-youtube-play" />
                      </span>
                      <span className="lecture-name">
                        12. Searching_ (4:19)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  className="section-item incomplete"
                  data-lecture-id="4681975"
                >
                  <a
                    className="item"
                    data-no-turbolink="true"
                    href="/courses/304280/lectures/4681975"
                  >
                    <span className="status-container">
                      <span className="status-icon">&nbsp;</span>
                    </span>
                    <div className="title-container">
                      <div className="btn-primary btn-sm pull-right">Start</div>
                      <span className="lecture-icon">
                        <i className="fa fa-youtube-play" />
                      </span>
                      <span className="lecture-name">
                        13. Many to One_ (11:18)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  className="section-item incomplete"
                  data-lecture-id="4701862"
                >
                  <a
                    className="item"
                    data-no-turbolink="true"
                    href="/courses/304280/lectures/4701862"
                  >
                    <span className="status-container">
                      <span className="status-icon">&nbsp;</span>
                    </span>
                    <div className="title-container">
                      <div className="btn-primary btn-sm pull-right">Start</div>
                      <span className="lecture-icon">
                        <i className="fa fa-youtube-play" />
                      </span>
                      <span className="lecture-name">
                        15. DRF POST One to Many_ (18:42)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  className="section-item incomplete"
                  data-lecture-id="4701860"
                >
                  <a
                    className="item"
                    data-no-turbolink="true"
                    href="/courses/304280/lectures/4701860"
                  >
                    <span className="status-container">
                      <span className="status-icon">&nbsp;</span>
                    </span>
                    <div className="title-container">
                      <div className="btn-primary btn-sm pull-right">Start</div>
                      <span className="lecture-icon">
                        <i className="fa fa-youtube-play" />
                      </span>
                      <span className="lecture-name">
                        14. DRF GET One To Many_ (6:50)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  className="section-item incomplete"
                  data-lecture-id="4701859"
                >
                  <a
                    className="item"
                    data-no-turbolink="true"
                    href="/courses/304280/lectures/4701859"
                  >
                    <span className="status-container">
                      <span className="status-icon">&nbsp;</span>
                    </span>
                    <div className="title-container">
                      <div className="btn-primary btn-sm pull-right">Start</div>
                      <span className="lecture-icon">
                        <i className="fa fa-youtube-play" />
                      </span>
                      <span className="lecture-name">
                        16. Register User_ (11:42)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  className="section-item incomplete"
                  data-lecture-id="4701861"
                >
                  <a
                    className="item"
                    data-no-turbolink="true"
                    href="/courses/304280/lectures/4701861"
                  >
                    <span className="status-container">
                      <span className="status-icon">&nbsp;</span>
                    </span>
                    <div className="title-container">
                      <div className="btn-primary btn-sm pull-right">Start</div>
                      <span className="lecture-icon">
                        <i className="fa fa-youtube-play" />
                      </span>
                      <span className="lecture-name">
                        17. Login dengan DRF JWT_ (11:07)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  className="section-item incomplete"
                  data-lecture-id="4701865"
                >
                  <a
                    className="item"
                    data-no-turbolink="true"
                    href="/courses/304280/lectures/4701865"
                  >
                    <span className="status-container">
                      <span className="status-icon">&nbsp;</span>
                    </span>
                    <div className="title-container">
                      <div className="btn-primary btn-sm pull-right">Start</div>
                      <span className="lecture-icon">
                        <i className="fa fa-youtube-play" />
                      </span>
                      <span className="lecture-name">
                        18. Curriculums Module_ (14:18)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  className="section-item incomplete"
                  data-lecture-id="4701889"
                >
                  <a
                    className="item"
                    data-no-turbolink="true"
                    href="/courses/304280/lectures/4701889"
                  >
                    <span className="status-container">
                      <span className="status-icon">&nbsp;</span>
                    </span>
                    <div className="title-container">
                      <div className="btn-primary btn-sm pull-right">Start</div>
                      <span className="lecture-icon">
                        <i className="fa fa-youtube-play" />
                      </span>
                      <span className="lecture-name">
                        19. Autofill User on POST_ (3:46)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  className="section-item incomplete"
                  data-lecture-id="4701890"
                >
                  <a
                    className="item"
                    data-no-turbolink="true"
                    href="/courses/304280/lectures/4701890"
                  >
                    <span className="status-container">
                      <span className="status-icon">&nbsp;</span>
                    </span>
                    <div className="title-container">
                      <div className="btn-primary btn-sm pull-right">Start</div>
                      <span className="lecture-icon">
                        <i className="fa fa-youtube-play" />
                      </span>
                      <span className="lecture-name">
                        20. Setting JWT Expiration_ (1:20)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  className="section-item incomplete"
                  data-lecture-id="4701956"
                >
                  <a
                    className="item"
                    data-no-turbolink="true"
                    href="/courses/304280/lectures/4701956"
                  >
                    <span className="status-container">
                      <span className="status-icon">&nbsp;</span>
                    </span>
                    <div className="title-container">
                      <div className="btn-primary btn-sm pull-right">Start</div>
                      <span className="lecture-icon">
                        <i className="fa fa-youtube-play" />
                      </span>
                      <span className="lecture-name">
                        22. Recursive Fields_ (9:18)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  className="section-item incomplete"
                  data-lecture-id="4701957"
                >
                  <a
                    className="item"
                    data-no-turbolink="true"
                    href="/courses/304280/lectures/4701957"
                  >
                    <span className="status-container">
                      <span className="status-icon">&nbsp;</span>
                    </span>
                    <div className="title-container">
                      <div className="btn-primary btn-sm pull-right">Start</div>
                      <span className="lecture-icon">
                        <i className="fa fa-youtube-play" />
                      </span>
                      <span className="lecture-name">
                        21. Accessing HasMany Curriculums on Course_ (7:48)
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
