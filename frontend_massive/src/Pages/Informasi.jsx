import React from "react";
import Navbar from "../Component/Navbar";
import "../Styles/Informasi.css";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import imgAdd from "../assets/add.png";

const Informasi = () => {
  return (
    <div>
      <Navbar />
      <section className="judul">
        <Link to="/informasiDiskusi" className="nav">
          Forum Diskusi
        </Link>
      </section>
      <div className="garis"></div>
      <div className="banner"></div>
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">Replies</th>
              <th scope="col">Viewes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tdJudul">
                <Link to="/informasiDiskusi" className="textInfoDiskusi">
                  Apa merk pupuk yang bagus untuk pertumbuhan tanaman?
                </Link>
              </td>
              <td>Andin Rafa</td>
              <td>29</td>
              <td>40</td>
            </tr>
            <tr>
              <td className="tdJudul">
                <Link to="/informasiDiskusi" className="textInfoDiskusi">
                  Apakah sayuran organik lebih sehat?
                </Link>
              </td>
              <td>Andin Rafa</td>
              <td>29</td>
              <td>40</td>
            </tr>
            <tr>
              <td className="tdJudul">
                <Link to="/informasiDiskusi" className="textInfoDiskusi">
                  Apa strategi pemasaran yang paling efektif untuk produk
                  pertanian lokal?
                </Link>
              </td>
              <td>Andin Rafa</td>
              <td>29</td>
              <td>40</td>
            </tr>
            <tr>
              <td className="tdJudul">
                <Link to="/informasiDiskusi" className="textInfoDiskusi">
                  Bagaimana membangun merek dan kehadiran online untuk produk
                  pertanian?
                </Link>
              </td>
              <td>Andin Rafa</td>
              <td>29</td>
              <td>40</td>
            </tr>
            <tr>
              <td className="tdJudul">
                <Link to="/informasiDiskusi" className="textInfoDiskusi">
                  Apa pengalaman Anda dengan inovasi terbaru dalam pupuk atau
                  pestisida?
                </Link>
              </td>
              <td>Andin Rafa</td>
              <td>29</td>
              <td>40</td>
            </tr>
            <tr>
              <td className="tdJudul">
                <Link to="/informasiDiskusi" className="textInfoDiskusi">
                  Bagaimana kita bisa beralih ke metode organik atau ramah
                  lingkungan dalam mengelola hama dan penyakit tanaman?
                </Link>
              </td>
              <td>Andin Rafa</td>
              <td>29</td>
              <td>40</td>
            </tr>
            <tr>
              <td className="tdJudul">
                <Link to="/informasiDiskusi" className="textInfoDiskusi">
                  Apa manfaat kesehatan yang dapat diperoleh dari mengonsumsi
                  sayuran secara teratur?
                </Link>
              </td>
              <td>Andin Rafa</td>
              <td>29</td>
              <td>40</td>
            </tr>
          </tbody>
        </table>
        <Link to="/buatDiskusiBaru" className="addDiskusi">
          Buat Baru
          <img src={imgAdd} alt="add" />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Informasi;
