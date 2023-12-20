import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import kebun5 from "../assets/kebun5.png";
import kebun3 from "../assets/kebun3.png";
import user1 from "../assets/user.png";
import { Button3 } from "../Component/Button";
import { Link } from "react-router-dom";

const LayananKebun3 = () => {
  return (
    <div>
      <Navbar />
      <section className="judul">
        <p>Budidaya Perkebunan</p>
      </section>
      <div className="garis"></div>
      <div className="box-sayur">
        <div className="layanan-sayur">
          <div className="contain-sayur">
            <p>Inovasi dalam Budidaya Sayuran di Ruang Terbatas</p>
            <img src={kebun3} alt="" />
            <p>
              Inovasi dalam budidaya sayuran di ruang terbatas semakin menjadi
              fokus utama dalam menghadapi urbanisasi dan keterbatasan lahan
              pertanian. Metode hidroponik, vertikultur, dan aquaponik telah
              menjadi solusi efektif untuk memaksimalkan penggunaan ruang yang
              terbatas, memungkinkan pertumbuhan tanaman sayuran secara efisien
              tanpa memerlukan lahan yang luas. Teknologi canggih seperti sensor
              suhu dan kelembaban otomatis, serta penerapan pencahayaan LED yang
              disesuaikan, turut mendukung pertumbuhan optimal tanaman di dalam
              ruang terbatas.{" "}
            </p>
            <p>
              Selain itu, konsep pertanian perkotaan dan keberlanjutan menjadi
              bagian integral dari inovasi ini, mengurangi jejak karbon dan
              mempromosikan produksi pangan lokal. Dengan demikian, inovasi
              dalam budidaya sayuran di ruang terbatas tidak hanya memberikan
              solusi terhadap keterbatasan lahan, tetapi juga menciptakan sistem
              pertanian yang lebih efisien, berkelanjutan, dan responsif
              terhadap kebutuhan perkotaan yang terus berkembang.
            </p>
          </div>
          <div className="sayur-button">
            <Link to="/layanan">
              <Button3 set="sebelumnya" />
            </Link>
            <Button3 set="selanjutnya" />
          </div>
        </div>
        <div className="layan-lain">
          <p className="p-lain">Lainnya</p>
          <div className="card-lain">
            <div className="lain-img">
              <img src={kebun5} alt="" />
            </div>
            <div className="lain-desc">
              <p>Kunci Kesuksesan dalam Budidaya Sayuran</p>
              <p>
                <img src={user1} alt="" />
                KATHARINA
              </p>
              <p>Monday | December 19, 2022</p>
            </div>
            <Button3 set="Detail" />
          </div>
          <div className="card-lain">
            <div className="lain-img">
              <img src={kebun5} alt="" />
            </div>
            <div className="lain-desc">
              <p>Kunci Kesuksesan dalam Budidaya Sayuran</p>
              <p>
                <img src={user1} alt="" />
                KATHARINA
              </p>
              <p>Monday | December 19, 2022</p>
            </div>
            <Button3 set="Detail" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LayananKebun3;
