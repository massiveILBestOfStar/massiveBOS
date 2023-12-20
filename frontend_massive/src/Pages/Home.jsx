import React from "react";
import "../App.css";
import Navbar from "../Component/Navbar";
import sayur from "../assets/sayur1.png";
import sayur2 from "../assets/sayur2.png";
import promo1 from "../assets/promo1.png";
import promo2 from "../assets/promo2.png";
import { Button, Button2 } from "../Component/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="home_box">
        <div className="home">
          <p>"Inovasi di Setiap Jerami: Petani Digital, Hasil Berkualitas!"</p>
          <Button set="Buy Now" />
        </div>
        <img className="pic" src={sayur} alt="" />
      </section>
      <section className="box_promo">
        <div className="promosi">
          <img src={promo1} alt="Karya Seni 1" />
        </div>
        <div className="promosi">
          <img src={promo2} alt="Karya Seni 2" />
        </div>
      </section>
      <section className="box_layanan">
        <div className="button-layanan">
          <div className="layanan">
            <Link to="/layanan">
              <Button2 set="Budidaya Perkebunan" />
            </Link>
            <Link to="/blog">
              <Button2 set="Resep Makanan" />
            </Link>
          </div>
          <div className="layanan">
            <Link to="/login">
              <Button2 set="Buka Toko" />
            </Link>
            <Link to="/informasiDiskusi">
              <Button2 set="Forum Diskusi" />
            </Link>
          </div>
        </div>
        <div className="button-center">
          <Link to="/">
            <Button2 set="Explore Now" />
          </Link>
        </div>
        <img className="pic2" src={sayur2} alt="Karya Seni 2" />
      </section>
    </div>
  );
};

export default Home;
