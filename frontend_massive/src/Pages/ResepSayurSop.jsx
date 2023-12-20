import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import makan5 from "../assets/makan5.png";
import "../App.css";

const ResepSayurSop = () => {
  return (
    <div>
      <Navbar />
      <div className="box-resep1">
        <div className="kepala-resep1">
          <div className="judul-resep1">
            <div className="judul-resep2">
              <p>Resep Sayur Sop</p>
              <p>BY: Sayourku</p>
            </div>
          </div>
          <div className="img-resep1">
            <img src={makan5} alt="" />
          </div>
          <div className="ket-resep1">
            <div className="judul-ket-res1">
              <p>Apa Itu?</p>
            </div>
            <div className="ket-res-desc1">
              <p>
                Sayur sop adalah sup sayuran Indonesia yang dibuat dari sayuran
                dalam kaldu ayam atau sapi. Ini populer di Indonesia, disajikan
                sebagai sarapan atau makan siang.
              </p>
            </div>
          </div>
        </div>
        <div className="badan-resep1">
          <div className="kotak-resep1">
            <p>Cara Memasak</p>
            <ul>
              <li>
                Tumis bawang merah dan bawang putih hingga harum, lalu tambahkan
                bumbu irisan cabai rawit dan air secukupnya.
              </li>
              <li>
                Tunggu hingga air mendidih, lalu masukkan sayur-sayuran dimulai
                dari yang paling lama matang terlebih dahulu, yaitu kentang dan
                wortel, 5 menit kemudian buncis, lalu disusul kembang kol.
              </li>
              <li>
                Biarkan hingga sayur-sayurannya lembut, setelah lembut tambahkan
                kol, daun bawang, seledri, gula garam, lada, dan gula.
              </li>
              <li>
                Kemudian koreksi rasa, bila rasa sudah pas, matikan apinya,
                resep sayur sop pun siap disajikan dan tambahkan taburan bawang
                goreng agar resep sayur sop ini lebih enak.
              </li>
              <li>Sajikan</li>
            </ul>
          </div>
          <div className="garis-resep"></div>
          <div className="kotak-resep2">
            <div className="kotak-resep3">
              <p>Bahan - Bahan</p>
              <ul>
                <li>1 buah wortel</li>
                <li>7 buah buncis</li>
                <li>1 buah kentang</li>
                <li>1/4 kembang kol</li>
                <li>1/4 kol atau kubis</li>
                <li>1 batang daun bawang</li>
                <li>2 siung bawang putih</li>
                <li>5 buah cabai rawit</li>
              </ul>
            </div>
            <div className="kotak-resep3">
              <p>Bumbu Seasoning</p>
              <ul>
                <li>1/2 sdm garam</li>
                <li>1/4 sdt gula</li>
                <li>1/2 sdt lada</li>
                <li>3 sdm minyak goreng</li>
                <li>2 Liter air</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResepSayurSop;
