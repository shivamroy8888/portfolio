/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img className="pic" src="/shivam.png" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Shivam</h6>
            <h3>Full Stack Web Developer</h3>
            <p>
            An inspired team palyer,always curious about new problems and learning new things in order to deliver out of the box solution with complete ownership.
            </p>
            <a className="btn" href="/index.pdf">
              RESUME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
