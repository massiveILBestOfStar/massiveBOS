import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import makan2 from "../assets/makan2.png";
import "../App.css";

const ResepSayurAsem = () => {
  return (
    <div>
      <Navbar />
      <div className="box-resep1">
        <div className="kepala-resep1">
          <div className="judul-resep1">
            <div className="judul-resep2">
              <p>Resep Sayur Asem</p>
              <p>BY: Sayourku</p>
            </div>
          </div>
          <div className="img-resep1">
            <img src={makan2} alt="" />
          </div>
          <div className="ket-resep1">
            <div className="judul-ket-res1">
              <p>Apa Itu?</p>
            </div>
            <div className="ket-res-desc1">
              <p>
                Sayur Asem adalah masakan sejenis sup yang berisi sayur-sayuran
                lokal khas Indonesia. Masakan ini memiliki cita rasa pedas dan
                asam manis yang khas. Biasanya rasa asam tersebut berasal dari
                penggunaan asam jawa.
              </p>
            </div>
          </div>
        </div>
        <div className="badan-resep1">
          <div className="kotak-resep1">
            <p>Cara Memasak</p>
            <ul>
              <li>
                Di dalam panci, didihkan air. Masukkan bumbu halus, lengkuas,
                dan daun salam.
              </li>
              <li>
                Tambahkan melinjo, masak hingga lunak. Tambahkan jagung dan
                asam, masak hingga jagung matang.
              </li>
              <li>Tambahkan sisa bahan, masak hingga semua bahan matang.</li>
              <li>Sajikan segera ditemani nasi putih.</li>
            </ul>
          </div>
          <div className="garis-resep"></div>
          <div className="kotak-resep2">
            <div className="kotak-resep3">
              <p>Bahan - Bahan</p>
              <ul>
                <li>1 buah labu siam, kupas, potong dadu</li>
                <li>50 g kacang panjang, potong 3 cm</li>
                <li>1 buah jagung manis, potong-potong</li>
                <li>100 g ubi merah, kupas, potong dadu</li>
                <li>50 g daun melinjo</li>
                <li>5 cm lengkuas, memarkan</li>
                <li>3 lembar daun salam</li>
                <li>6 buah asam, memarkan</li>
                <li>2 L air</li>
              </ul>
            </div>
            <div className="kotak-resep3">
              <p>Bumbu Halus</p>
              <ul>
                <li>6 siung bawang merah</li>
                <li>4 siung bawang putih</li>
                <li>5 buah cabai merah</li>
                <li>4 buah kemiri</li>
                <li>1/2 sdm terasi, sangrai</li>
                <li>1 sdm gula merah</li>
                <li>3 sdm minyak</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResepSayurAsem;
