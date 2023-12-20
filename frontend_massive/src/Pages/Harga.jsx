import React from 'react'
import "../App.css";
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import PageButton from '../Component/PageButton';
import selada from '../assets/selada.png';
import sawih from '../assets/sawi_hijau.png';
import kangkung from '../assets/kangkung.png';
import bayam from '../assets/bayam.png';
import brokoli from '../assets/brokoli.png';
import kol from '../assets/kol.png';
import { Link } from 'react-router-dom';

const Harga = () => {
  return (
    <div>
        <Navbar />
        <section className="judul">
        <Link to='/blog' style={{textDecoration: 'none'}}><p>Resep Makanan</p></Link>
          <Link to='/harga' style={{textDecoration: 'none'}}><p>Update Harga</p></Link>
        </section>
        <div className="box-harga">
        <div className="text-harga">
            <p>UPDATE HARGA DARI TOKO KAMI</p>
        </div>
        <div className="judul-harga">
            <p>Sayuran Segar</p>
            <p>Sayuran Rempah</p>
            <p>Paket Masak</p>
        </div>
        <div className="item-harga">
            <div className="card-harga">
                <div className="img-harga">
                    <img src={selada} alt="" />
                </div>
                <div className="harga-desc">
                    <p>Selada</p>
                    <p>Mulai Dari :</p>
                    <p>Rp.19.500/KG</p>
                </div>
            </div>
            <div className="card-harga">
                <div className="img-harga">
                    <img src={sawih} alt="" />
                </div>
                <div className="harga-desc">
                    <p>Sawi Hijau</p>
                    <p>Mulai Dari :</p>
                    <p>Rp.4.000/KG</p>
                </div>
            </div>
            <div className="card-harga">
                <div className="img-harga">
                    <img src={kangkung} alt="" />
                </div>
                <div className="harga-desc">
                    <p>Kankung</p>
                    <p>Mulai Dari :</p>
                    <p>Rp.16.000/KG</p>
                </div>
            </div>
            <div className="card-harga">
                <div className="img-harga">
                    <img src={bayam} alt="" />
                </div>
                <div className="harga-desc">
                    <p>Bayam</p>
                    <p>Mulai Dari :</p>
                    <p>Rp.12.000/KG</p>
                </div>
            </div>
            <div className="card-harga">
                <div className="img-harga">
                    <img src={brokoli} alt="" />
                </div>
                <div className="harga-desc">
                    <p>Brokoli</p>
                    <p>Mulai Dari :</p>
                    <p>Rp.31.000/KG</p>
                </div>
            </div>
            <div className="card-harga">
                <div className="img-harga">
                    <img src={kol} alt="" />
                </div>
                <div className="harga-desc">
                    <p>Kol</p>
                    <p>Mulai Dari :</p>
                    <p>Rp.12.000/KG</p>
                </div>
            </div>
        </div>
    </div>
        <PageButton />
        <Footer />
    </div>
  )
}

export default Harga