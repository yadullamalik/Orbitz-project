import { useEffect, useState } from "react";
import "./Footer.css";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div>
      <div className="footer-container" onClick={scrollToTop}>
        <div className="footer-box">
          <div className="footer-img">
            <div>
              <img
                src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg"
                height="50%"
                width="50%"
              ></img>
            </div>
          </div>
          <div>
            <h3>Company</h3>
            <p>About</p>
            <p>Jobs </p>
            <p>List your property</p>
            <p>Partnerships</p>
            <p>Newsroom</p>
            <p>Investor Relations</p>
            <p>Site Map</p>
            <p>Orbitz Rewards</p>
            <p>Advertising</p>
          </div>
          <div>
            <h3>Explore</h3>
            <p>Hotels in United States</p>
            <p>Vacation Rentals in United States</p>
            <p>Car Rentals in United States</p>
            <p>Domestic Flights</p>
            <p>Vacation Packages in United States</p>
            <p>Orbitz Reviews</p>
            <p>Orbitz Coupons</p>
            <p>LGBTQ Travel</p>
            <p>Unique Accommodations</p>
            <p>Travel Blog</p>
          </div>
          <div>
            <h3>Policies</h3>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Vrbo terms and conditions</p>
            <p>Orbitz Rewards Terms</p>
            <p>Do not sell my personal information</p>
          </div>
          <div>
            <h3>Help</h3>
            <p>Support</p>
            <p>Cancel your hotel or vacation rental booking</p>
            <p>Cancel your flight</p>
            <p>Refund timelines, policies & processes</p>
            <p>Use an Orbitz Coupon</p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="footer-copywrite">
        <p>
          © 2022 Orbitz, LLC, an Expedia Group Company. All rights reserved.
          <br></br>
          Orbitz, Orbitz.com, and the Orbitz logo are trademarks or registered
          trademarks of Orbitz, LLC. CST# 2083930-50.
        </p>
      </div>
    </div>
  );
};
