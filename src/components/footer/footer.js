import React from 'react';
import SwLogo from '../../assets/images/sw-logo.png';

import './footer.css';

const Footer = () => {
    return(
        <footer className="pt-4 my-md-5 pt-md-5 border-top footer">
          <div className="row pl-3">
            <div className="col-md-6 col-sm-12 col-lg-3">
              <img className="mb-2" src={SwLogo} alt="" width="30" height="30"/>
              <small className="d-block mb-3 text-muted">&copy; 2017-2020</small>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-3">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">Term of Use</a></li>
                <li><a className="text-muted" href="#">Additional Content Information</a></li>
                <li><a className="text-muted" href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-3">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">Children`s online privacy policy</a></li>
                <li><a className="text-muted" href="#">Your California Privacy Rights</a></li>
                <li><a className="text-muted" href="#">StarWars at shopDisney</a></li>
                <li><a className="text-muted" href="#">Final resource</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-3">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">Team</a></li>
                <li><a className="text-muted" href="#">Locations</a></li>
                <li><a className="text-muted" href="#">Privacy</a></li>
                <li><a className="text-muted" href="#">Terms</a></li>
              </ul>
            </div>
          </div>
        </footer>
    )
}

export default Footer;