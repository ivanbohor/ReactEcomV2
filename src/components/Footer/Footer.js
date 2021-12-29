import React from "react";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-dark fixed-bottom p-2 ">
      <p className="text-center m-0 text-muted">
        <BsGithub />
        <BsTwitter />
        <BsLinkedin />
      </p>
    </footer>
  );
};

export default Footer;
