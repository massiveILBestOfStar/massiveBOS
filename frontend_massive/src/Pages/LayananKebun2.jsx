import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import kebun5 from "../assets/kebun5.png";
import kebun2 from "../assets/kebun2.png";
import user1 from "../assets/user.png";
import { Button3 } from "../Component/Button";
import { Link } from "react-router-dom";

const LayananKebun2 = () => {
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
            <p>Begini cara sayuran tetap terlihat segar</p>
            <img src={kebun2} alt="" />
            <p>
              Untuk menjaga agar tanaman sayuran selalu terlihat segar, penting
              untuk memberikan perawatan yang cermat dan teratur. Mulailah
              dengan menyediakan pasokan air yang cukup sesuai kebutuhan
              tanaman, memastikan tanah selalu lembab tetapi tidak terlalu
              basah. Pemupukan yang seimbang dengan nutrisi esensial juga
              menjadi kunci untuk mendukung pertumbuhan dan keberlanjutan
              tanaman. Selain itu, perhatikan ekosistem di sekitar tanaman
              dengan memastikan tidak adanya gulma dan memberikan cukup ruang
              agar sinar matahari dapat mencapai daun tanaman secara optimal.{" "}
            </p>
            <p>
              Praktikkan pemangkasan yang tepat untuk menghilangkan daun atau
              cabang yang mati atau sakit. Terakhir, perhatikan tanda-tanda
              penyakit atau serangan hama dan segera ambil langkah-langkah
              pengendalian yang diperlukan untuk mencegah penyebarannya. Dengan
              kombinasi perawatan ini, tanaman sayuran dapat tetap segar dan
              sehat, menciptakan hasil panen yang optimal.
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

export default LayananKebun2;
