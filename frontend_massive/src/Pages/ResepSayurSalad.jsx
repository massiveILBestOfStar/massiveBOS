import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import makan4 from "../assets/makan4.png";
import "../App.css";

const ResepSayurSalad = () => {
  return (
    <div>
      <Navbar />
      <div className="box-resep1">
        <div className="kepala-resep1">
          <div className="judul-resep1">
            <div className="judul-resep2">
              <p>Resep Salad Sayur</p>
              <p>BY: Sayourku</p>
            </div>
          </div>
          <div className="img-resep1">
            <img src={makan4} alt="" />
          </div>
          <div className="ket-resep1">
            <div className="judul-ket-res1">
              <p>Apa Itu?</p>
            </div>
            <div className="ket-res-desc1">
              <p>
                Salad sayur merupakan makanan yang terdiri dari berbagai macam
                sayuran yang dicampur dengan minyak zaitun atau mayonaise. Salad
                ini menyehatkan, banyak serat, kaya nutrisi, rendah kalori yang
                tentunta baik untuk tubuh. Salad sayuran terkenal di kalangan
                orang-orang vegetarian.
              </p>
            </div>
          </div>
        </div>
        <div className="badan-resep1">
          <div className="kotak-resep1">
            <p>Cara Memasak</p>
            <ul>
              <li>
                Cuci bersih semua bahan sayur dan buah. Potong-potong
                secukupnya.
              </li>
              <li>
                Tata semua bahan sayur dan buah di piring. Tambahkan irisan keju
                dan bawang bombay.
              </li>
              <li>Campur semua bahan dressing. Aduk rata.</li>
              <li>Siramkan dressing ke salad. Aduk rata.</li>
              <li>Sajikan</li>
            </ul>
          </div>
          <div className="garis-resep"></div>
          <div className="kotak-resep2">
            <div className="kotak-resep3">
              <p>Bahan - Bahan</p>
              <ul>
                <li>1 bonggol selada</li>
                <li>1 buah mentimun</li>
                <li>1 buah wortel</li>
                <li>2 buah tomat</li>
                <li>5 buah blueberry</li>
                <li>1/4 butir bawang bombay</li>
                <li>keju sesuai selera</li>
              </ul>
            </div>
            <div className="kotak-resep3">
              <p>Bahan Dressing</p>
              <ul>
                <li>3 sdm minyak zaitun</li>
                <li>1 sdt oregano kering</li>
                <li>1/4 sdt garam</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResepSayurSalad;
