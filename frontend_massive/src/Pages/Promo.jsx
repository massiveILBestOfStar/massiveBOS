import React from 'react'
import '../App.css';
import Navbar from '../Component/Navbar';
import promo4 from '../assets/promo4.png';
import date from '../assets/date.png';
import { Button3 } from '../Component/Button';
import PageButton from '../Component/PageButton';
import Footer from '../Component/Footer'
import { Link } from "react-router-dom";

const Promo = () => {
  return (
    <div>
      <Navbar />
      <section className='judul'>
      <Link to='/promo' style={{textDecoration: 'none'}}><p>Promo</p></Link>
      </section>
      <div className="garis"></div>
      <div className="banner"></div>
      <div className="pro-box">
        <div className="promo-card">
            <div className="promo-img">
                <img src={promo4} alt="" />
            </div>
            <div className="promo-desc">
                <p>SPECIAL PROMO</p>
                <p>Dapatkan promo spesial sayuran kangkung di Minimarket terdekat!</p>
                <p><img src={date} alt="" />10 November 2023 - 21 November 2023</p>
                <div className="pro-button">
                  <Link to='/promo1'><Button3 set="Detail" /></Link>
                </div>
            </div>
        </div>
        <div className="promo-card">
            <div className="promo-img">
                <img src={promo4} alt="" />
            </div>
            <div className="promo-desc">
                <p>SPECIAL PROMO</p>
                <p>Dapatkan promo spesial sayuran kangkung di Minimarket terdekat!</p>
                <p><img src={date} alt="" />10 November 2023 - 21 November 2023</p>
                <div className="pro-button">
                  <Link to='/promo1'><Button3 set="Detail" /></Link>
                </div>
            </div>
        </div>
        <div className="promo-card">
            <div className="promo-img">
                <img src={promo4} alt="" />
            </div>
            <div className="promo-desc">
                <p>SPECIAL PROMO</p>
                <p>Dapatkan promo spesial sayuran kangkung di Minimarket terdekat!</p>
                <p><img src={date} alt="" />10 November 2023 - 21 November 2023</p>
                <div className="pro-button">
                  <Link to='/promo1'><Button3 set="Detail" /></Link>
                </div>
            </div>
        </div>
        <div className="promo-card">
            <div className="promo-img">
                <img src={promo4} alt="" />
            </div>
            <div className="promo-desc">
                <p>SPECIAL PROMO</p>
                <p>Dapatkan promo spesial sayuran kangkung di Minimarket terdekat!</p>
                <p><img src={date} alt="" />10 November 2023 - 21 November 2023</p>
                <div className="pro-button">
                  <Link to='/promo1'><Button3 set="Detail" /></Link>
                </div>
            </div>
        </div>
      </div>
      <PageButton />
      <Footer />
    </div>
  )
}

export default Promo