import React from "react";
import { Link } from "react-router-dom";
import instagram from "../assets/icon/Instagram.png";
import linkedin from "../assets/icon/LinkedIn.png";
import twitterx from "../assets/icon/TwitterX.png";
import facebook from "../assets/icon/Facebook.png";
import placeMarker from "../assets/icon/placeMarker.png";
import telephone from "../assets/icon/phone.png"
import email from "../assets/icon/Email.png"
import "../Styles/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SosialMediaHeading, SosialMediaContent} from "./FooterContent";


const Footer = () => {
  return (
    <div>
      <div className="footer">
          <div className="d-flex justify-content-between align-items-center ">
            <div className="content1">
          <SosialMediaHeading heading="Follow Us"/>
          <SosialMediaContent img={instagram} set="Nama Website"/>
          <SosialMediaContent img={linkedin} set="Nama Website"/>
          <SosialMediaContent img={twitterx} set="Nama Website"/>
          <SosialMediaContent img={facebook} set="Nama Website"/>
          </div>
          <p style={{fontSize: '20px'}}>Nama Website © 2023 All Right Reserved</p>
          <div className="content2">
          <SosialMediaHeading heading="Address"/>
          <SosialMediaContent img={placeMarker} set="Jl.Masa Depan, No.11, DKI.Jakarta"/>
          <SosialMediaContent img={email} set="+62 1278865478"/>
          <SosialMediaContent img={email} set="namawebsite@gmail.com"/>
          <SosialMediaContent/>
          </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
