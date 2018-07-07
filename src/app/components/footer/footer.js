import React from "react";
// import "./footer.css";

const Footer = () => {
  return (
    <footer className='bottom-menu bottom-menu-inverse'>
    <div className='container'>
      <div className='row'>
        <div className='col-xs-12 col-sm-4 col-md-4 footer-column'>
          <p>&copy; DumbWays.id - Screencast Pemrograman dengan Teknologi Terkini</p>
        </div>
        <div className='col-xs-12 col-sm-4 col-md-4 footer-column'>
          <ul className='list-unstyled'>
            <li>
              <a href="/p/terms">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="/p/privacy">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className='col-xs-12 col-sm-4 col-md-4 footer-column'>
          <ul className='list-unstyled'>
            <li>
              <a href='https://www.facebook.com/ega.sdr/?fref=ts' target='_blank'>
                Ega Software Development Review
              </a>
            </li>
            <li>
              <a href='https://www.idrails.com/' target='_blank'>
                IDRails
              </a>
            </li>
            <li>
              <a href='http://kawankoding.com/' target='_blank'>
                Kawan Koding
              </a>
            </li>
            <li>
              <a className='powered-by' href='https://teachable.com/?src=school_footer' style={{visibility: "visible" }}>Powered by
                <img src="https://d2oz8i5n9se8ej.cloudfront.net/assets/footer/teachable-logo-white-efd32576079839534d5b6e87bf4424e99b12624f854b2c500a4d3f0b6e2af46b.svg"
                  className='powered-by-logo' alt="Teachable"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;