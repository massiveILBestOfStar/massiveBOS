import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import kebun5 from "../assets/kebun5.png";
import kebun6 from "../assets/kebun7.jpg";
import user1 from "../assets/user.png";
import { Button3 } from "../Component/Button";
import { Link } from "react-router-dom";

const LayananKebun6 = () => {
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
            <p>
              Tata cara pengendalian hama dapat diterapkan dalam budidaya
              pertanian secara efektif
            </p>
            <img src={kebun6} alt="" />
            <p>
              Tata cara pengendalian hama dapat diterapkan dalam budidaya
              pertanian secara efektif melalui pendekatan terpadu yang mencakup
              langkah-langkah seperti pengenalan jenis hama, pemantauan rutin
              terhadap populasi hama, dan penerapan metode kontrol biologis atau
              penggunaan pestisida nabati yang ramah lingkungan.{" "}
            </p>
            <p>
              Selain itu, rotasi tanaman, penggunaan varietas tanaman tahan
              hama, dan penerapan teknologi modern seperti penggunaan feromon
              dapat menjadi bagian integral dari strategi pengendalian yang
              efektif. Pentingnya menjaga keseimbangan ekosistem pertanian dan
              memanfaatkan musuh alami hama juga dapat meningkatkan keberhasilan
              pengendalian hama secara berkelanjutan dalam budidaya pertanian.
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

export default LayananKebun6;
