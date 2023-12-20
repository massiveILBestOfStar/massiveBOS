import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import kebun5 from "../assets/kebun5.png";
import kebun1 from "../assets/kebun1.png";
import user1 from "../assets/user.png";
import { Button3 } from "../Component/Button";
import { Link } from "react-router-dom";

const LayananKebun = () => {
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
            <p>Begini cara merawat tanaman sayuran yang benar</p>
            <img src={kebun1} alt="" />
            <p>
              Merawat tanaman sayur dengan benar melibatkan beberapa langkah
              penting untuk memastikan pertumbuhan yang sehat dan hasil panen
              yang melimpah. Pertama, pilihlah lokasi tanam yang mendapatkan
              sinar matahari yang cukup dan memiliki drainase yang baik.
              Pastikan tanah terpenuhi kebutuhan nutrisi dengan menambahkan
              pupuk organik atau bahan organik lainnya. Saat menanam, perhatikan
              jarak tanam yang sesuai untuk memberikan ruang yang cukup bagi
              tanaman untuk berkembang. Berikan air secara teratur, terutama
              pada saat-saat kering, dan hindari genangan air yang dapat merusak
              akar.{" "}
            </p>
            <p>
              Selain itu, pantau tanda-tanda serangan hama atau penyakit, dan
              lakukan tindakan pencegahan atau penanganan segera. Lakukan
              pemangkasan secara teratur untuk merangsang pertumbuhan yang sehat
              dan pastikan untuk melakukan pemanenan pada waktu yang tepat untuk
              memastikan kualitas dan rasa sayuran yang optimal. Dengan merawat
              tanaman sayur dengan cermat sesuai dengan kebutuhannya, Anda dapat
              memaksimalkan hasil panen dan memastikan keberlanjutan
              keberlanjutan pertumbuhan tanaman Anda.
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

export default LayananKebun;
