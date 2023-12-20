import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import makan6 from "../assets/makan6.png";
import "../App.css";

const ResepSayur = () => {
  return (
    <div>
      <Navbar />
      <div className="box-resep1">
        <div className="kepala-resep1">
          <div className="judul-resep1">
            <div className="judul-resep2">
              <p>Resep Sayur Lodeh</p>
              <p>BY: Sayourku</p>
            </div>
          </div>
          <div className="img-resep1">
            <img src={makan6} alt="" />
          </div>
          <div className="ket-resep1">
            <div className="judul-ket-res1">
              <p>Apa Itu?</p>
            </div>
            <div className="ket-res-desc1">
              <p>
                Sayur Lodeh adalah masakan sayur yang berkuah santan khas
                Indonesia, terutama di daerah Jawa Tengah dan DI Yogyakarta.
                Sayur lodeh mempunyai berbagai macam variasi terutama pada
                bumbunya, ada yang santannya berwarna putih dan ada juga yang
                santannya berwarna kuning kemerahan.
              </p>
            </div>
          </div>
        </div>
        <div className="badan-resep1">
          <div className="kotak-resep1">
            <p>Cara Memasak</p>
            <ul>
              <li>
                Haluskan bumbu halus menggunakan blender, lalu tumis dalam panci
                hingga harum
              </li>
              <li>
                Masukkan lengkuas dan daun salam. Masukkan potongan tempe, masak
                hingga harum
              </li>
              <li>
                Masukkan labu siam, melinjo dan terong ungu. Tambahkan kacang
                panjang, aduk hingga merata
              </li>
              <li>
                Masukkan santan kental, garam, gula merah dan gula pasir, serta
                air. Masak hingga mendidih
              </li>
              <li>Sajikan</li>
            </ul>
          </div>
          <div className="garis-resep"></div>
          <div className="kotak-resep2">
            <div className="kotak-resep3">
              <p>Bahan - Bahan</p>
              <ul>
                <li>1 buah labu siam, potong dadu</li>
                <li>100 gram kacang panjang, potong 5 cm</li>
                <li>100 gram tempe, potong dadu</li>
                <li>50 gram melinjo</li>
                <li>1 buah terong ungu, potong dadu</li>
                <li>3 buah cabai hijau, potong 2 cm</li>
                <li>2 buah cabai merah, potong 2 cm</li>
              </ul>
              <ul>
                <li>3 sdm minyak goreng</li>
                <li>1 sdm garam</li>
                <li>50 gram gula merah</li>
                <li>1 sdm gula pasir</li>
                <li>1/2 sdt merica</li>
                <li>150 ml santan</li>
                <li>air secukupnya</li>
              </ul>
            </div>
            <div className="kotak-resep3">
              <p>Bumbu Halus</p>
              <ul>
                <li>6 siung bawang merah</li>
                <li>4 siung bawang putih</li>
                <li>3 buah kemiri</li>
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

export default ResepSayur;
