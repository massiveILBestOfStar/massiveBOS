import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import makan3 from "../assets/makan3.png";
import "../App.css";

const ResepSayurCapcay = () => {
  return (
    <div>
      <Navbar />
      <div className="box-resep1">
        <div className="kepala-resep1">
          <div className="judul-resep1">
            <div className="judul-resep2">
              <p>Resep Capcay Goreng</p>
              <p>BY: Sayourku</p>
            </div>
          </div>
          <div className="img-resep1">
            <img src={makan3} alt="" />
          </div>
          <div className="ket-resep1">
            <div className="judul-ket-res1">
              <p>Apa Itu?</p>
            </div>
            <div className="ket-res-desc1">
              <p>
                Capcai atau capcay adalah nama hidangan khas Tionghoa-Indonesia
                berupa banyak macam sayuran yang dimasak dengan cara direbus
                atau digoreng tumis. Capcai asal mulanya merupakan variasi dari
                hidangan khas Fujian. Nama capcai diambil dari dialek Hokkian
                yang secara harfiah berarti "aneka ragam sayur"
              </p>
            </div>
          </div>
        </div>
        <div className="badan-resep1">
          <div className="kotak-resep1">
            <p>Cara Memasak</p>
            <ul>
              <li>
                Tumis bawang putih hingga harum, masukkan ayam aduk rata lalu
                masukkan wortel, baby corn dan tumis hingga setengah layu.
              </li>
              <li>
                Masukkan sayuran lainnya, beri saus tiram, kecap asin, merica,
                dan sedikit gula.
              </li>
              <li>
                Aduk rata lalu tuangi air panas secukupnya, aduk hingga sayuran
                matang, hangan lupa tes rasanya.
              </li>
              <li>
                Jika rasa sudah pas, tuang larutan maizena, aduk hingga
                mengental.
              </li>
              <li>Sajikan</li>
            </ul>
          </div>
          <div className="garis-resep"></div>
          <div className="kotak-resep2">
            <div className="kotak-resep3">
              <p>Bahan - Bahan</p>
              <ul>
                <li>5 buah jamur kancing, potong-potong</li>
                <li>1 kuntum brokoli, potong per kuntum</li>
                <li>3 buah baby corn, potong-potong</li>
                <li> 1 buah wortel, potong-potong</li>
                <li>1 tangkai daun bawang potong-potong</li>
                <li>100 gr fillet dada ayam, iris tipis</li>
              </ul>
            </div>
            <div className="kotak-resep3">
              <p>Bumbu Halus</p>
              <ul>
                <li>6 siung bawang merah</li>
                <li>4 siung bawang putih</li>
                <li>merica</li>
                <li>1 sdt maizena larutkan dalam air</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResepSayurCapcay;
