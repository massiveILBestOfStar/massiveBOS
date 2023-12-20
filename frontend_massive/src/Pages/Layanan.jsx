import React from "react";
import Navbar from "../Component/Navbar";
import kebun1 from "../assets/kebun1.png";
import kebun2 from "../assets/kebun2.png";
import kebun3 from "../assets/kebun3.png";
import kebun4 from "../assets/kebun4.png";
import kebun5 from "../assets/kebun6.jpg";
import kebun6 from "../assets/kebun7.jpg";
import user1 from "../assets/user.png";
import Footer from "../Component/Footer";
import PageButton from "../Component/PageButton";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Button3 } from "../Component/Button";
import "../App.css";
import { Link } from "react-router-dom";

const Layanan = () => {
  return (
    <div>
      <Navbar />
      <section className="judul">
        <p>Budidaya Perkebunan</p>
      </section>
      <div className="garis"></div>
      <section className="card-box">
        <div style={{ borderRadius: "22px" }} className="card">
          <div className="card-img">
            <img src={kebun1} className="card-img-top" alt="..." />
            <div className="card-body"></div>
          </div>
          <div className="card-desc">
            <p>Begini Cara Merawat Tanaman Sayuran yang benar</p>
            <p>
              <img src={user1} alt="" />
              GABRIELLA ABIGAIL
            </p>
            <p>Monday | December 19, 2022</p>
          </div>
          <Link to="/lkebun">
            <Button3 set="Detail" />
          </Link>
        </div>
        <div style={{ borderRadius: "22px" }} className="card">
          <div className="card-img">
            <img src={kebun2} sty className="card-img-top" alt="..." />
            <div className="card-body"></div>
          </div>
          <div className="card-desc">
            <p>Begini Cara Merawat Tanaman Sayuran yang benar</p>
            <p>
              <img src={user1} alt="" />
              GABRIELLA ABIGAIL
            </p>
            <p>Monday | December 19, 2022</p>
          </div>
          <Link to="/2kebun">
            <Button3 set="Detail" />
          </Link>
        </div>
        <div style={{ borderRadius: "22px" }} className="card">
          <div className="card-img">
            <img src={kebun3} className="card-img-top" alt="..." />
            <div className="card-body"></div>
          </div>
          <div className="card-desc">
            <p>Inovasi dalam Budidaya Sayuran di Ruang Terbatas</p>
            <p>
              <img src={user1} alt="" />
              MUTIARA AZZAHRA
            </p>
            <p>Monday | December 19, 2022</p>
          </div>
          <Link to="/3kebun">
            <Button3 set="Detail" />
          </Link>
        </div>
        <div style={{ borderRadius: "22px" }} className="card">
          <div className="card-img">
            <img src={kebun4} className="card-img-top" alt="..." />
            <div className="card-body"></div>
          </div>
          <div className="card-desc">
            <p>Langkah-langkah Menuju Kebun Sehat Tanpa Pestisida</p>
            <p>
              <img src={user1} alt="" />
              Christy
            </p>
            <p>Monday | December 19, 2022</p>
          </div>
          <Link to="/4kebun">
            <Button3 set="Detail" />
          </Link>
        </div>
        <div style={{ borderRadius: "22px" }} className="card">
          <div className="card-img">
            <img src={kebun5} className="card-img-top" alt="..." />
            <div className="card-body"></div>
          </div>
          <div className="card-desc">
            <p>Kunci Kesuksesan dalam Budidaya Sayuran</p>
            <p>
              <img src={user1} alt="" />
              KATHARINA
            </p>
            <p>Monday | December 19, 2022</p>
          </div>
          <Link to="/5kebun">
            <Button3 set="Detail" />
          </Link>
        </div>
        <div style={{ borderRadius: "22px" }} className="card">
          <div className="card-img">
            <img src={kebun6} className="card-img-top" alt="..." />
            <div className="card-body"></div>
          </div>
          <div className="card-desc">
            <p> Cara pengendalian hama secara efektif</p>
            <p>
              <img src={user1} alt="" />
              GABRIELLA ABIGAIL
            </p>
            <p>Monday | December 19, 2022</p>
          </div>
          <Link to="/6kebun">
            <Button3 set="Detail" />
          </Link>
        </div>
      </section>
      <PageButton />
      <Footer />
    </div>
  );
};

export default Layanan;
