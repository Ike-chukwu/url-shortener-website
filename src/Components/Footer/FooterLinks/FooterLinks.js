import React from "react";
import Fb from "../../../images/icon-facebook.svg";
import Twitter from "../../../images/icon-twitter.svg";
import IG from "../../../images/icon-instagram.svg";
import Pinterest from "../../../images/icon-pinterest.svg";
import FooterLink from "./FooterLink/FooterLink";

const FooterLinks = () => {
  return (
    <div className="links">
      <FooterLink
        heading="Features"
        first="Link Shortening"
        second="Branded Links"
        third="Analytics"
      />
      <FooterLink
        heading="Resources"
        first="Blog"
        second="Developers"
        third="Support"
      />
      <FooterLink
        heading="Company"
        first="About"
        second="Our Team "
        third="Careers"
        fouth=""
      />
      <div className="link-pictures">
        <img src={Fb} alt="" />
        <img src={Twitter} alt="" />
        <img src={Pinterest} alt="" />
        <img src={IG} alt="" />
      </div>
    </div>
  );
};

export default FooterLinks;
