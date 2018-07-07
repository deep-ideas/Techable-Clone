import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "pawjs/src/components/link";

class Header extends Component {

  // state = {
  //   offsetTop : window.scrollY,
  //   display : "",
  //   token : localStorage.getItem('token'),
  // }
  // constructor(props){
  //   super(props)
  //    this.handleSignOut = this.handleSignOut.bind(this);
  // }
  // handleSignOut(event){
  //   localStorage.clear();
  //   console.log('token dihapus');
  //   this.setState({token:null});
  //   window.location.pathname("/login")
  //   event.preventDefault();
  // }
  render() {

    // window.onscroll = (event)=>{
    //     const offsetTop = window.scrollY;
    //     if (this.state.offsetTop < offsetTop && offsetTop > 86 ) {
    //       this.setState({
    //         display : "active"
    //       })

    //     }else{
    //       this.setState({
    //         display : ""
    //       })
    //     }
    //     this.setState({
    //       offsetTop : offsetTop
    //     })
    // }
    return (

      <div>
        <header className=''>

          <div className="navbar navbar-fedora navbar-fixed-top is-at-top bs-docs-nav is-signed-in show-nav-background-color" id='navbar'
            role='navigation'>
            <div className='container'>
              <div className='navbar-header navbar-header-courses'>
                <button className='navbar-toggle' data-target='.navbar-header-collapse' data-toggle='collapse' type='button'>
                  <span className='sr-only'>
                    Toggle navigation
                        </span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                </button>

                <a className='navbar-brand header-logo' href='http://dumbways.id?sa=eyJ1c2VyX2lkIjoxMTY4MjYwMCwiZXhwaXJlc19hdCI6MTUzMDcxMzIzOC4yOTIzMjYsInNjaG9vbF9pZCI6MTQ3MzY0LCJhdXRoZW50aWNhdGlvbl90b2tlbiI6Ilk0Qno4SEIya3h1UHdwd1JSWW9FNTMzQTFEUDU5VHY2WmcifQ%3D%3D--6830d8035e11db5beea05152513f683d695aae95'>
                  <span className="sr-only">DumbWays.id - Screencast Pemrograman dengan Teknologi Terkini</span>
                  <img src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/mWcP190oTCqiAo5VjrE8"
                    alt="DumbWays.id - Screencast Pemrograman dengan Teknologi Terkini" srcset="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:120/https://www.filepicker.io/api/file/mWcP190oTCqiAo5VjrE8 2x"
                  />
                </a>

                <div className='collapse navbar-collapse navbar-header-collapse'>
                  <ul className='nav navbar-nav navbar-right'>

                    <li>
                      <a className='fedora-navbar-link navbar-link' href='enrolled.html' target=''>
                        My Courses
                                </a>
                    </li>
                    <li>
                      <a className='fedora-navbar-link navbar-link' href='courses.html' target=''>
                        All Courses
                                </a>
                    </li>
                    <li>
                      <a className='fedora-navbar-link navbar-link current-page' href='/bootcamp' target=''>
                        Bootcamp
                                </a>
                    </li>
                    <li>
                      <a className='fedora-navbar-link navbar-link' href='blog.html'
                        target=''>
                        Blog
                                </a>
                    </li>
                    <li>
                      <a className='fedora-navbar-link navbar-link' href='careers.html' target=''>
                        Careers
                                </a>
                    </li>


                    <li className='dropdown'>
                      <a aria-expanded='false' aria-haspopup='true' className='fedora-navbar-link navbar-link dropdown-toggle open-my-profile-dropdown'
                        data-toggle='dropdown'>
                        <img className='gravatar' src='https://s.gravatar.com/avatar/51a80c53f3a4d048466d0708063b6cd6?d=mm' alt="qorihaidiralam@gmail.com" />
                        <span className='navbar-current-user'>Qori Haidir Alam</span>
                      </a>
                      <ul className='dropdown-menu'>
                        <li className='user-profile'>
                          <a href='/current_user/profile'>
                            Edit Profile
                                        </a>
                        </li>
                        <li>
                          <a href='/current_user/subscriptions'>
                            Manage Subscriptions
                                        </a>
                        </li>
                        <li>
                          <a href='/current_user/credit_card'>
                            Add / Change Credit Card
                                        </a>
                        </li>
                        <li>
                          <a href='/current_user/contact'>
                            Contact
                                        </a>
                        </li>
                        <li className='user-signout'>
                          <a href='/sign_out'>
                            Log Out
                                        </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

    );
  }
};

export default Header;
