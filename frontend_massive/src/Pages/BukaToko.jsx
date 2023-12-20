import toko from "../assets/toko.png";
import { Button2 } from "../Component/Button";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";

const BukaToko = () => {
  return (
    <div>
      <Navbar />
      <div style={{height: '700px'}}  className="toko-box">
        <div className="toko-card">
          <div className="toko-desc">
            <p>Ingin Membuka Toko?</p>
          </div>
          <div className="garis3"></div>
          <div className="toko-img">
            <img src={toko} alt="" />
          </div>
          <div className="toko-desc">
            <p>Jika ingin membuka toko</p>
            <p>lengkapi laah informasi yang diperlukan</p>
            <p>dibawah ini !</p>
            <Link to='/daftarToko2'><Button2 set="Daftar Sekarang" /></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BukaToko;
