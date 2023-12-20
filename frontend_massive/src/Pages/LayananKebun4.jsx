import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import kebun5 from "../assets/kebun5.png";
import kebun4 from "../assets/kebun4.png";
import user1 from "../assets/user.png";
import { Button3 } from "../Component/Button";
import { Link } from "react-router-dom";

const LayananKebun4 = () => {
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
            <p>Langkah-langkah Menuju Kebun Sehat Tanpa Pestisida</p>
            <img src={kebun4} alt="" />
            <p>
              Langkah-langkah menuju kebun sehat tanpa pestisida merupakan upaya
              yang proaktif dalam menjaga kesehatan tanaman, tanah, dan juga
              manusia. Pertama, pilihlah varietas tanaman yang tahan terhadap
              hama dan penyakit, mengurangi ketergantungan pada pestisida kimia.
              Selanjutnya, praktikkan rotasi tanaman untuk menghambat
              perkembangan hama tertentu dan meningkatkan kesuburan tanah.
              Penggunaan kompos dan pupuk organik dapat memperkuat pertahanan
              tanaman secara alami.{" "}
            </p>
            <p>
              Menerapkan metode-metode agroekologi, seperti penggunaan
              insektisida nabati, seperti neem oil atau ekstrak bawang putih,
              dapat menjadi alternatif yang ramah lingkungan. Tanaman penutup
              tanah juga dapat membantu mengendalikan gulma dan mempertahankan
              kelembaban tanah. Dengan mempraktikkan pola hidup seimbang,
              seperti menjaga kebersihan kebun dan memberikan ruang bagi musuh
              alami hama, seperti burung dan serangga pemangsa, kita dapat
              mencapai kebun sehat tanpa mengandalkan pestisida yang berpotensi
              merugikan. Inilah langkah-langkah holistik menuju kebun yang tidak
              hanya subur, tetapi juga ramah lingkungan dan bermanfaat bagi
              ekosistem sekitar.
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

export default LayananKebun4;
