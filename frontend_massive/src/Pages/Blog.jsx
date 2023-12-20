import React from "react";
import "../App.css";
import makan1 from "../assets/makan1.png";
import makan2 from "../assets/makan2.png";
import makan3 from "../assets/makan3.png";
import makan4 from "../assets/makan4.png";
import makan5 from "../assets/makan5.png";
import makan6 from "../assets/makan6.png";
import clock from "../assets/clock.png";
import Navbar from "../Component/Navbar";
import PageButton from "../Component/PageButton";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <section className="judul">
        <Link to="/blog" style={{ textDecoration: "none" }}>
          <p>Resep Makanan</p>
        </Link>
        <Link to="/harga" style={{ textDecoration: "none" }}>
          <p>Update Harga</p>
        </Link>
      </section>
      <div className="garis"></div>
      <div className="box-r">
        <Link
          to="/resepsayurGado"
          style={{ color: "black", textDecoration: "none" }}
        >
          <div className="cardr">
            <div className="image-container">
              <img src={makan1} alt="Card Image" className="card-image" />
            </div>
            <div className="description-container">
              <div className="card-description">
                <p>Resep Gado-gado</p>
                <div className="garis2"></div>
                <p>
                  <img src={clock} alt="" /> 30 - 45 Menit
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="/resepsayurasem"
          style={{ color: "black", textDecoration: "none" }}
        >
          <div className="cardr">
            <div className="image-container">
              <img src={makan2} alt="Card Image" className="card-image" />
            </div>
            <div className="description-container">
              <div className="card-description">
                <p>Resep Sayur Asem</p>
                <div className="garis2"></div>
                <p>
                  <img src={clock} alt="" /> 40 - 50 Menit
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="/resepsayurcapcay"
          style={{ color: "black", textDecoration: "none" }}
        >
          <div className="cardr">
            <div className="image-container">
              <img src={makan3} alt="Card Image" className="card-image" />
            </div>
            <div className="description-container">
              <div className="card-description">
                <p>Resep Capcay goreng</p>
                <div className="garis2"></div>
                <p>
                  <img src={clock} alt="" /> 30 - 40 Menit
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="/resepsayursalad"
          style={{ color: "black", textDecoration: "none" }}
        >
          <div className="cardr">
            <div className="image-container">
              <img src={makan4} alt="Card Image" className="card-image" />
            </div>
            <div className="description-container">
              <div className="card-description">
                <p>Resep Salad Sayur</p>
                <div className="garis2"></div>
                <p>
                  <img src={clock} alt="" /> 15 - 25 Menit
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="/resepsayursop"
          style={{ color: "black", textDecoration: "none" }}
        >
          <div className="cardr">
            <div className="image-container">
              <img src={makan5} alt="Card Image" className="card-image" />
            </div>
            <div className="description-container">
              <div className="card-description">
                <p>Resep Sayur Sop</p>
                <div className="garis2"></div>
                <p>
                  <img src={clock} alt="" /> 30 - 45 Menit
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="/resepsayur"
          style={{ color: "black", textDecoration: "none" }}
        >
          <div className="cardr">
            <div className="image-container">
              <img src={makan6} alt="Card Image" className="card-image" />
            </div>
            <div className="description-container">
              <div className="card-description">
                <p>Resep Sayur Lodeh</p>
                <div className="garis2"></div>
                <p>
                  <img src={clock} alt="" /> 30 - 45 Menit
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <PageButton />
      <Footer />
    </div>
  );
};

export default Blog;
