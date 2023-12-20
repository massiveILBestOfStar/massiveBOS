import React from 'react'
import "../App.css";
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import date from '../assets/date.png';
import loc from '../assets/lokasi.png';
import promo4 from '../assets/promo4.png'
import promo5 from '../assets/promo5.png'
import promo6 from '../assets/promo6.png'
import { Link } from 'react-router-dom';

const Promo1 = () => {
  return (
    <div>
        <Navbar />
        <section className='judul'>
          <Link to='/promo' style={{textDecoration: 'none'}}><p>Promo</p></Link>
        </section>
        <div className="garis"></div>
        <div className="box-sayur">
            <div className="layanan-sayur">
                <div className="contain-pr">
                    <p>HARGA SPESIAL</p>
                    <img src={promo5} alt="" />
                    <p>**PROMO HARGA SPESIAL SAYURAN DI TOKO X** </p>
                    <p>Hai pelanggan setia Toko X!</p>
                    <p>Kami punya kabar baik untuk Anda! Nikmati diskon harga spesial untuk berbagai jenis sayuran segar di Toko X. </p>
                    <p>**Detail Promo:**</p>
                    <p>**Periode Promo:** [10 November 2023] - [21 November 2023]</p>
                    <p>**Daftar Sayuran dan Diskon:**</p>
                    <ol>
                        <li>Sayur A: Diskon [Persentase]%!</li>
                        <li>Jagung Manis: Harga Spesial Rp [Harga] per kg!</li>
                        <li>Tomat Segar: Beli 2 Kg, Gratis 0.5 Kg!</li>
                    </ol>
                    <p>**Syarat & Ketentuan:**</p>
                    <ul>
                        <li>Promo berlaku untuk semua pembelian di Toko X selama periode promo.</li>
                        <li>Diskon tidak dapat digabungkan dengan promosi atau potongan harga lainnya.</li>
                        <li>Ketersediaan stok berlaku selama persediaan masih ada.</li>
                        <li>Pembelian minimal untuk diskon khusus tertentu berlaku sesuai ketentuan di atas.</li>
                        <li>Promo tidak berlaku untuk pedagang grosir.</li>
                    </ul>
                    <p>Jangan lewatkan kesempatan istimewa ini untuk mendapatkan sayuran segar dengan harga terbaik di Toko X. Segera kunjungi toko kami dan sebarkan kabar baik ini kepada teman dan keluarga Anda!</p>
                    <p>Terima kasih atas dukungan Anda. Happy shopping!</p>
                    <p>Salam,</p>
                    <p>Toko X</p>
                </div>
                <div className="kode-promo">
                    <p>KODE PROMO</p>
                    <div className="k-pro">
                        <p>XYZ123</p>
                    </div>
                </div>
                <div className="lebih">
                    <p><img src={date} alt="" />10 November 2023 - 21 November 2023</p>
                    <p><img src={loc} alt="" />Toko X Terdekat!</p>
                </div>
            </div>
            <div className="layan-lain">
                <p className="pr1">PROMO LAINNYA</p>
                <div className="cardpr-lain">
                    <div className="lainpr-img">
                        <img src={promo4} alt="" />
                    </div>
                    <div className="lainpr-desc">
                        <p>SUPER PROMO!  20-25 November 2023</p>
                    </div>
                </div>
                <div className="cardpr-lain">
                    <div className="lainpr-img">
                        <img src={promo6} alt="" />
                    </div>
                    <div className="lainpr-desc">
                        <p>PROMO GAJIAN! 20-25 November 2023</p>
                    </div>
                </div>
                <div className="cardpr-lain">
                    <div className="lainpr-img">
                        <img src={promo4} alt="" />
                    </div>
                    <div className="lainpr-desc">
                        <p>SUPER PROMO!  20-25 November 2023</p>
                    </div>
                </div>
                <div className="cardpr-lain">
                    <div className="lainpr-img">
                        <img src={promo6} alt="" />
                    </div>
                    <div className="lainpr-desc">
                        <p>PROMO GAJIAN! 20-25 November 2023</p>
                    </div>
                </div>
                <div className="cardpr-lain">
                    <div className="lainpr-img">
                        <img src={promo4} alt="" />
                    </div>
                    <div className="lainpr-desc">
                        <p>SUPER PROMO!  20-25 November 2023</p>
                    </div>
                </div>
                <div className="cardpr-lain">
                    <div className="lainpr-img">
                        <img src={promo6} alt="" />
                    </div>
                    <div className="lainpr-desc">
                        <p>PROMO GAJIAN! 20-25 November 2023</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Promo1