import React, { Component } from "react";
import classNames from "classnames";
import Link from "pawjs/src/components/link";

export default class Lecture extends Component {
  render() {
    return (
      <div>
        <header class="full-width half-height is-signed-in">
          <div class="lecture-left">
            <a
              class="nav-icon-back"
              data-no-turbolink="true"
              href="\curriculum"
            >
              <i class="fa fa-angle-left" />
            </a>
            <div class="dropdown settings-dropdown">
              <a
                href="#"
                class="nav-icon-settings dropdown-toggle"
                id="settings_menu"
                data-toggle="dropdown"
              >
                <i class="fa fa-cog" />
              </a>
              <ul
                class="dropdown-menu left-caret"
                role="menu"
                aria-labelledby="settings_menu"
              >
                <li>
                  <div class="switch" id="switch-autoplay-lectures">
                    <input
                      id="custom-toggle-autoplay"
                      class="custom-toggle custom-toggle-round"
                      type="checkbox"
                      aria-label="Autoplay"
                    />
                    <label for="custom-toggle-autoplay" />
                  </div>Autoplay
                </li>

                <li>
                  <div class="switch" id="switch-autocomplete-lectures">
                    <input
                      id="custom-toggle-autocomplete"
                      class="custom-toggle custom-toggle-round"
                      type="checkbox"
                      aria-label="Autocomplete"
                    />
                    <label for="custom-toggle-autocomplete" />
                  </div>Autocomplete
                </li>

                <li>
                  <div class="pull-right">
                    <div class="switch-toggle well">
                      <input
                        id="toggle_html5"
                        name="custom-toggle-player"
                        type="radio"
                      />
                      <label for="toggle_html5" onclick="">
                        HTML5
                      </label>
                      <input
                        id="toggle_flash"
                        name="custom-toggle-player"
                        type="radio"
                      />
                      <label for="toggle_flash" onclick="">
                        Flash
                      </label>
                      <a class="btn btn-primary" />
                    </div>
                  </div>Player
                </li>

                <li>
                  <div class="pull-right">
                    <div class="playback-speed" />
                  </div>Speed
                </li>

                <li>
                  <div class="pull-right">
                    <div class="switch-toggle switch-3 well">
                      <input id="auto" name="quality" type="radio" checked />
                      <label for="auto" onclick="">
                        Auto
                      </label>
                      <input id="hd" name="quality" type="radio" />
                      <label for="hd" onclick="">
                        HD
                      </label>
                      <input id="sd" name="quality" type="radio" />
                      <label for="sd" onclick="">
                        SD
                      </label>
                      <a class="btn btn-primary" />
                    </div>
                  </div>
                  Quality
                </li>
              </ul>
            </div>
            <a
              class="nav-icon-list show-xs hidden-sm hidden-md hidden-lg collapsed"
              role="button"
              data-toggle="collapse"
              href="#courseSidebar"
              aria-expanded="false"
              aria-controls="courseSidebar"
            >
              <i class="fa fa-list" />
            </a>
          </div>
          <div class="lecture-nav">
            <a class="nav-btn" href="" id="lecture_previous_button">
              <i class="fa fa-arrow-left" />
              &nbsp;
              <span class="nav-text">Previous Lecture</span>
            </a>
            <a class="nav-btn complete" href="" id="lecture_complete_button">
              <span class="nav-text">Complete and continue</span>
              &nbsp;
              <i class="fa fa-arrow-right" />
            </a>
          </div>
        </header>
        <div
          class="course-sidebar lecture-page collapse navbar-collapse navbar-sidebar-collapse"
          id="courseSidebar"
        >
          <h2>
            Video Tutorial: Menjadi Professional Backend Developer dengan Python
            Django
          </h2>

          <div class="course-progress lecture-page is-at-top">
            <div class="progressbar">
              <div class="progressbar-fill" style={{minWidth: "0%"}} />
            </div>
            <div class="small course-progress-percentage">
              <span class="percentage">0%</span>
              COMPLETE
            </div>
          </div>

          <div class="row lecture-sidebar">
            <div class="col-sm-12 course-section">
              <div
                class="section-title"
                data-release-date=""
                data-days-until-dripped="0"
                data-is-dripped-by-date="false"
                data-course-id="304280"
              >
                <span class="section-lock">
                  <i class="fa fa-lock" />&nbsp;
                </span>
                Intro
              </div>
              <ul class="section-list">
                <li
                  data-lecture-id="4681895"
                  data-lecture-url="/courses/django/lectures/4681895"
                  class="section-item incomplete"
                >
                  <a
                    class="item"
                    data-no-turbolink="true"
                    href="/courses/django/lectures/4681895"
                    id="sidebar_link_4681895"
                  >
                    <span class="status-container">
                      <span class="status-icon">&nbsp;</span>
                    </span>
                    <div class="title-container">
                      <span class="lecture-icon">
                        <i class="fa fa-youtube-play" />
                      </span>
                      <span class="lecture-name">1. Intro_ (4:09)</span>
                    </div>
                  </a>
                </li>
                <li
                  data-lecture-id="4681894"
                  data-lecture-url="/courses/django/lectures/4681894"
                  class="section-item incomplete"
                >
                  <a
                    class="item"
                    data-no-turbolink="true"
                    href="/courses/django/lectures/4681894"
                    id="sidebar_link_4681894"
                  >
                    <span class="status-container">
                      <span class="status-icon">&nbsp;</span>
                    </span>
                    <div class="title-container">
                      <span class="lecture-icon">
                        <i class="fa fa-youtube-play" />
                      </span>
                      <span class="lecture-name">2. Setup_ (7:21)</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-sm-12 course-section">
              <div
                class="section-title"
                data-release-date=""
                data-days-until-dripped="0"
                data-is-dripped-by-date="false"
                data-course-id="304280"
              >
                <span class="section-lock">
                  <i class="fa fa-lock" />&nbsp;
                </span>
                Django
              </div>
              <ul class="section-list">
                <li
                  data-lecture-id="4681896"
                  data-lecture-url="/courses/django/lectures/4681896"
                  class="section-item incomplete"
                >
                  <a
                    class="item"
                    data-no-turbolink="true"
                    href="/courses/django/lectures/4681896"
                    id="sidebar_link_4681896"
                  >
                    <span class="status-container">
                      <span class="status-icon">&nbsp;</span>
                    </span>
                    <div class="title-container">
                      <span class="lecture-icon">
                        <i class="fa fa-youtube-play" />
                      </span>
                      <span class="lecture-name">3. First Module_ (10:53)</span>
                    </div>
                  </a>
                </li>
                <li
                  data-lecture-id="4681906"
                  data-lecture-url="/courses/django/lectures/4681906"
                  class="section-item incomplete"
                >
                  <a
                    class="item"
                    data-no-turbolink="true"
                    href="/courses/django/lectures/4681906"
                    id="sidebar_link_4681906"
                  >
                    <span class="status-container">
                      <span class="status-icon">&nbsp;</span>
                    </span>
                    <div class="title-container">
                      <span class="lecture-icon">
                        <i class="fa fa-youtube-play" />
                      </span>
                      <span class="lecture-name">
                        4. Database Setup & Migration_ (4:37)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  data-lecture-id="4681905"
                  data-lecture-url="/courses/django/lectures/4681905"
                  class="section-item incomplete"
                >
                  <a
                    class="item"
                    data-no-turbolink="true"
                    href="/courses/django/lectures/4681905"
                    id="sidebar_link_4681905"
                  >
                    <span class="status-container">
                      <span class="status-icon">&nbsp;</span>
                    </span>
                    <div class="title-container">
                      <span class="lecture-icon">
                        <i class="fa fa-youtube-play" />
                      </span>
                      <span class="lecture-name">
                        5. Models and Migrations_ (9:30)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  data-lecture-id="4681908"
                  data-lecture-url="/courses/django/lectures/4681908"
                  class="section-item incomplete"
                >
                  <a
                    class="item"
                    data-no-turbolink="true"
                    href="/courses/django/lectures/4681908"
                    id="sidebar_link_4681908"
                  >
                    <span class="status-container">
                      <span class="status-icon">&nbsp;</span>
                    </span>
                    <div class="title-container">
                      <span class="lecture-icon">
                        <i class="fa fa-youtube-play" />
                      </span>
                      <span class="lecture-name">
                        6. Basic Query using Django ORM_ (12:23)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  data-lecture-id="4681904"
                  data-lecture-url="/courses/django/lectures/4681904"
                  class="section-item incomplete"
                >
                  <a
                    class="item"
                    data-no-turbolink="true"
                    href="/courses/django/lectures/4681904"
                    id="sidebar_link_4681904"
                  >
                    <span class="status-container">
                      <span class="status-icon">&nbsp;</span>
                    </span>
                    <div class="title-container">
                      <span class="lecture-icon">
                        <i class="fa fa-youtube-play" />
                      </span>
                      <span class="lecture-name">7. Virtualenv_ (4:33)</span>
                    </div>
                  </a>
                </li>
                <li
                  data-lecture-id="4681907"
                  data-lecture-url="/courses/django/lectures/4681907"
                  class="section-item incomplete"
                >
                  <a
                    class="item"
                    data-no-turbolink="true"
                    href="/courses/django/lectures/4681907"
                    id="sidebar_link_4681907"
                  >
                    <span class="status-container">
                      <span class="status-icon">&nbsp;</span>
                    </span>
                    <div class="title-container">
                      <span class="lecture-icon">
                        <i class="fa fa-youtube-play" />
                      </span>
                      <span class="lecture-name">8. Admin Page_ (6:57)</span>
                    </div>
                  </a>
                </li>
                <li
                  data-lecture-id="4681971"
                  data-lecture-url="/courses/django/lectures/4681971"
                  class="section-item incomplete"
                >
                  <a
                    class="item"
                    data-no-turbolink="true"
                    href="/courses/django/lectures/4681971"
                    id="sidebar_link_4681971"
                  >
                    <span class="status-container">
                      <span class="status-icon">&nbsp;</span>
                    </span>
                    <div class="title-container">
                      <span class="lecture-icon">
                        <i class="fa fa-youtube-play" />
                      </span>
                      <span class="lecture-name">
                        9. Django Rest Framework_ (16:22)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  data-lecture-id="4681974"
                  data-lecture-url="/courses/django/lectures/4681974"
                  class="section-item incomplete"
                >
                  <a
                    class="item"
                    data-no-turbolink="true"
                    href="/courses/django/lectures/4681974"
                    id="sidebar_link_4681974"
                  >
                    <span class="status-container">
                      <span class="status-icon">&nbsp;</span>
                    </span>
                    <div class="title-container">
                      <span class="lecture-icon">
                        <i class="fa fa-youtube-play" />
                      </span>
                      <span class="lecture-name">10. POSTMAN_ (5:54)</span>
                    </div>
                  </a>
                </li>
                <li
                  data-lecture-id="4681973"
                  data-lecture-url="/courses/django/lectures/4681973"
                  class="section-item incomplete"
                >
                  <a
                    class="item"
                    data-no-turbolink="true"
                    href="/courses/django/lectures/4681973"
                    id="sidebar_link_4681973"
                  >
                    <span class="status-container">
                      <span class="status-icon">&nbsp;</span>
                    </span>
                    <div class="title-container">
                      <span class="lecture-icon">
                        <i class="fa fa-youtube-play" />
                      </span>
                      <span class="lecture-name">11. Filtering_ (5:01)</span>
                    </div>
                  </a>
                </li>
                <li
                  data-lecture-id="4681972"
                  data-lecture-url="/courses/django/lectures/4681972"
                  class="section-item incomplete"
                >
                  <a
                    class="item"
                    data-no-turbolink="true"
                    href="/courses/django/lectures/4681972"
                    id="sidebar_link_4681972"
                  >
                    <span class="status-container">
                      <span class="status-icon">&nbsp;</span>
                    </span>
                    <div class="title-container">
                      <span class="lecture-icon">
                        <i class="fa fa-youtube-play" />
                      </span>
                      <span class="lecture-name">12. Searching_ (4:19)</span>
                    </div>
                  </a>
                </li>
                <li
                  data-lecture-id="4681975"
                  data-lecture-url="/courses/django/lectures/4681975"
                  class="section-item incomplete"
                >
                  <a
                    class="item"
                    data-no-turbolink="true"
                    href="/courses/django/lectures/4681975"
                    id="sidebar_link_4681975"
                  >
                    <span class="status-container">
                      <span class="status-icon">&nbsp;</span>
                    </span>
                    <div class="title-container">
                      <span class="lecture-icon">
                        <i class="fa fa-youtube-play" />
                      </span>
                      <span class="lecture-name">13. Many to One_ (11:18)</span>
                    </div>
                  </a>
                </li>
                <li
                  data-lecture-id="4701862"
                  data-lecture-url="/courses/django/lectures/4701862"
                  class="section-item incomplete"
                >
                  <a
                    class="item"
                    data-no-turbolink="true"
                    href="/courses/django/lectures/4701862"
                    id="sidebar_link_4701862"
                  >
                    <span class="status-container">
                      <span class="status-icon">&nbsp;</span>
                    </span>
                    <div class="title-container">
                      <span class="lecture-icon">
                        <i class="fa fa-youtube-play" />
                      </span>
                      <span class="lecture-name">
                        15. DRF POST One to Many_ (18:42)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  data-lecture-id="4701860"
                  data-lecture-url="/courses/django/lectures/4701860"
                  class="section-item incomplete"
                >
                  <a
                    class="item"
                    data-no-turbolink="true"
                    href="/courses/django/lectures/4701860"
                    id="sidebar_link_4701860"
                  >
                    <span class="status-container">
                      <span class="status-icon">&nbsp;</span>
                    </span>
                    <div class="title-container">
                      <span class="lecture-icon">
                        <i class="fa fa-youtube-play" />
                      </span>
                      <span class="lecture-name">
                        14. DRF GET One To Many_ (6:50)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  data-lecture-id="4701859"
                  data-lecture-url="/courses/django/lectures/4701859"
                  class="section-item incomplete"
                >
                  <a
                    class="item"
                    data-no-turbolink="true"
                    href="/courses/django/lectures/4701859"
                    id="sidebar_link_4701859"
                  >
                    <span class="status-container">
                      <span class="status-icon">&nbsp;</span>
                    </span>
                    <div class="title-container">
                      <span class="lecture-icon">
                        <i class="fa fa-youtube-play" />
                      </span>
                      <span class="lecture-name">
                        16. Register User_ (11:42)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  data-lecture-id="4701861"
                  data-lecture-url="/courses/django/lectures/4701861"
                  class="section-item incomplete"
                >
                  <a
                    class="item"
                    data-no-turbolink="true"
                    href="/courses/django/lectures/4701861"
                    id="sidebar_link_4701861"
                  >
                    <span class="status-container">
                      <span class="status-icon">&nbsp;</span>
                    </span>
                    <div class="title-container">
                      <span class="lecture-icon">
                        <i class="fa fa-youtube-play" />
                      </span>
                      <span class="lecture-name">
                        17. Login dengan DRF JWT_ (11:07)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  data-lecture-id="4701865"
                  data-lecture-url="/courses/django/lectures/4701865"
                  class="section-item incomplete"
                >
                  <a
                    class="item"
                    data-no-turbolink="true"
                    href="/courses/django/lectures/4701865"
                    id="sidebar_link_4701865"
                  >
                    <span class="status-container">
                      <span class="status-icon">&nbsp;</span>
                    </span>
                    <div class="title-container">
                      <span class="lecture-icon">
                        <i class="fa fa-youtube-play" />
                      </span>
                      <span class="lecture-name">
                        18. Curriculums Module_ (14:18)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  data-lecture-id="4701889"
                  data-lecture-url="/courses/django/lectures/4701889"
                  class="section-item incomplete"
                >
                  <a
                    class="item"
                    data-no-turbolink="true"
                    href="/courses/django/lectures/4701889"
                    id="sidebar_link_4701889"
                  >
                    <span class="status-container">
                      <span class="status-icon">&nbsp;</span>
                    </span>
                    <div class="title-container">
                      <span class="lecture-icon">
                        <i class="fa fa-youtube-play" />
                      </span>
                      <span class="lecture-name">
                        19. Autofill User on POST_ (3:46)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  data-lecture-id="4701890"
                  data-lecture-url="/courses/django/lectures/4701890"
                  class="section-item incomplete"
                >
                  <a
                    class="item"
                    data-no-turbolink="true"
                    href="/courses/django/lectures/4701890"
                    id="sidebar_link_4701890"
                  >
                    <span class="status-container">
                      <span class="status-icon">&nbsp;</span>
                    </span>
                    <div class="title-container">
                      <span class="lecture-icon">
                        <i class="fa fa-youtube-play" />
                      </span>
                      <span class="lecture-name">
                        20. Setting JWT Expiration_ (1:20)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  data-lecture-id="4701956"
                  data-lecture-url="/courses/django/lectures/4701956"
                  class="section-item incomplete"
                >
                  <a
                    class="item"
                    data-no-turbolink="true"
                    href="/courses/django/lectures/4701956"
                    id="sidebar_link_4701956"
                  >
                    <span class="status-container">
                      <span class="status-icon">&nbsp;</span>
                    </span>
                    <div class="title-container">
                      <span class="lecture-icon">
                        <i class="fa fa-youtube-play" />
                      </span>
                      <span class="lecture-name">
                        22. Recursive Fields_ (9:18)
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  data-lecture-id="4701957"
                  data-lecture-url="/courses/django/lectures/4701957"
                  class="section-item incomplete"
                >
                  <a
                    class="item"
                    data-no-turbolink="true"
                    href="/courses/django/lectures/4701957"
                    id="sidebar_link_4701957"
                  >
                    <span class="status-container">
                      <span class="status-icon">&nbsp;</span>
                    </span>
                    <div class="title-container">
                      <span class="lecture-icon">
                        <i class="fa fa-youtube-play" />
                      </span>
                      <span class="lecture-name">
                        21. Accessing HasMany Curriculums on Course_ (7:48)
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="course-mainbar lecture-content">
          <h2
            id="lecture_heading"
            class="section-title"
            data-lecture-id="4681895"
            data-next-lecture-id="4681894"
            data-lecture-url="/courses/304280/lectures/4681895"
            data-next-lecture-url="/courses/304280/lectures/4681894"
            data-previous-lecture-url=""
            data-previous-lecture-id=""
          >
            <i class="fa fa-youtube-play" />
            &nbsp; 1. Intro_
          </h2>

          <div
            class="lecture-attachment lecture-attachment-type-video"
            id="lecture-attachment-9195853"
          >
            <div class="attachment-data" />
            <div class="wistia_responsive_padding">
              <div class="wistia_responsive_wrapper">
                <div
                  id="myElement"
                  class="jwplayer jw-reset jw-state-idle jw-stretch-uniform jw-breakpoint-4 jw-flag-user-inactive"
                  tabindex="0"
                  aria-label="Video Player"
                  role="application"
                  style={{width: "100%", height: "100%"}}
                />
              </div>
            </div>
            <div class="video-options">
              <a
                class="download"
                href="https://www.filepicker.io/api/file/NUBBX2A1SXuV0e1Vbf7D"
                target="_blank"
                download
              >
                <div class="span glyphicon glyphicon-save" />Download
              </a>
              <a href="javascript:jwplayer('myElement').play();">
                <div class="span glyphicon glyphicon-save" />Play
              </a>
              <a href="javascript:jwplayer('myElement').pause();">
                <div class="span glyphicon glyphicon-save" />Pause
              </a>
              <a href="javascript:alert('The volume of the player is: ' + jwplayer('myElement').getVolume());">
                <div class="span glyphicon glyphicon-save" />Report volume
              </a>
            </div>{" "}
            -->
          </div>

          <div id="empty_box" />
        </div>
      </div>
    );
  }
}
