import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import makan1 from "../assets/makan1.png";
import "../App.css";

const ResepSayurGado = () => {
  return (
    <div>
      <Navbar />
      <div className="box-resep1">
        <div className="kepala-resep1">
          <div className="judul-resep1">
            <div className="judul-resep2">
              <p>Resep Gado-Gado</p>
              <p>BY: Sayourku</p>
            </div>
          </div>
          <div className="img-resep1">
            <img src={makan1} alt="" />
          </div>
          <div className="ket-resep1">
            <div className="judul-ket-res1">
              <p>Apa Itu?</p>
            </div>
            <div className="ket-res-desc1">
              <p>
                Gado-gado merupakan makanan khas Betawi berupa sayur-sayuran
                yang direbus dan dicampur jadi satu, dengan bumbu kacang atau
                saus dari kacang tanah dan yang dihaluskan disertai irisan telur
                dan pada umumnya banyak yang menambahkan kentang rebus yang
                sudah dihaluskan.
              </p>
            </div>
          </div>
        </div>
        <div className="badan-resep1">
          <div className="kotak-resep1">
            <p>Cara Memasak</p>
            <ul>
              <li>
                Aduk rata tempe dan tahu bersama bumbu perendam. Sisihkan.
              </li>
              <li>
                Panaskan minyak, goreng tahu dan tempe hingga garing dan matang.
                Angkat dan tiriskan. Sisihkan.
              </li>
              <li>
                Bumbu kacang: Panaskan 3 sdm minyak, tumis bumbu halus dan daun
                jeruk hingga harum. Masukkan kacang tanah dan Bango Kecap Manis,
                aduk rata. Tambahkan sisa semua bahan, aduk. Masak hingga
                matang. Angkat. Biarkan hingga tidak panas.
              </li>
              <li>
                Tata kentang, tahu, tempe, daun selada, ketimun, taoge, dan kol
                di atas piring saji. Tuang bumbu kacang dan taburi bawang merah
                goreng.
              </li>
              <li>Sajikan dengan pelengkap.</li>
            </ul>
          </div>
          <div className="garis-resep"></div>
          <div className="kotak-resep2">
            <div className="kotak-resep3">
              <p>Bahan - Bahan</p>
              <ul>
                <li>350 gram kentang, kukus, kupas, potong-potong</li>
                <li>350 gram tahu putih</li>
                <li>350 gram tempe</li>
                <li>7 lembar daun selada hijau, sobek-sobek</li>
                <li>2 buah mentimun, iris tipis</li>
                <li>100 g tauge, rebus</li>
                <li>200 g kol, iris kasar, rebus</li>
              </ul>
              <ul>
                <li>6 buah telur rebus, kupas, potong-potong</li>
                <li>2 buah tomat, potong-potong</li>
                <li>3 sdm bawang merah goreng</li>
                <li>kerupuk dan emping</li>
              </ul>
            </div>
            <div className="kotak-resep3">
              <p>Bumbu Halus</p>
              <ul>
                <li>200 g kacang tanah kulit, goreng, haluskan</li>
                <li>3 buah daun jeruk, buang tulang daunnya</li>
                <li>3 sdt gula merah</li>
                <li>5 buah cabai merah besar, buang biji</li>
                <li>3 buah cabai merah keriting</li>
                <li>5 cm kencur</li>
                <li>4 siung bawang putih</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResepSayurGado;
