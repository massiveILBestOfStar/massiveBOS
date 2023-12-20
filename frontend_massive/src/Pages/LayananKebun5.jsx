import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import kebun6 from "../assets/kebun1.png";
import kebun5 from "../assets/kebun6.jpg";
import user1 from "../assets/user.png";
import { Button3 } from "../Component/Button";
import { Link } from "react-router-dom";

const LayananKebun5 = () => {
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
            <p>Kunci Kesuksesan dalam Budidaya Sayuran</p>
            <img src={kebun5} alt="" />
            <p>
              Kunci kesuksesan dalam budidaya sayuran melibatkan kombinasi
              perencanaan matang, perhatian terhadap detail, dan pengelolaan
              dengan bijak. Pertama, pemilihan varietas tanaman yang sesuai
              dengan kondisi iklim dan tanah setempat merupakan langkah awal
              yang krusial. Selanjutnya, penggunaan teknik budidaya yang tepat,
              seperti pemupukan yang seimbang, irigasi yang teratur, dan
              pemantauan terhadap hama dan penyakit, membantu memastikan
              pertumbuhan yang optimal. Pengelolaan lahan yang efisien, termasuk
              rotasi tanaman dan penggunaan tutup tanah, dapat meningkatkan
              produktivitas tanah.{" "}
            </p>
            <p>
              Konsistensi dalam merawat tanaman, memberikan perhatian terhadap
              aspek-aspek mikro seperti penyiangan dan pemangkasan, juga
              memainkan peran penting. Selain itu, pengetahuan dan adaptasi
              terhadap inovasi-inovasi terkini dalam pertanian juga menjadi
              kunci keberhasilan. Terakhir, komitmen terhadap keberlanjutan,
              baik dari segi lingkungan maupun ekonomi, menciptakan pondasi yang
              kokoh untuk kesuksesan jangka panjang dalam budidaya sayuran.
              Dengan merangkum semua aspek ini, petani dapat mencapai hasil yang
              optimal dan berkelanjutan dalam budidaya sayuran mereka.
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
              <img src={kebun6} alt="" />
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
              <img src={kebun6} alt="" />
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

export default LayananKebun5;
