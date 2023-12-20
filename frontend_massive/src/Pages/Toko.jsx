import Navbar from "../Component/Navbar";
import { CardInfoProfileToko } from "../Component/CardToko";
import { CardDeskripsi } from "../Component/CardToko";
import { CardInfoTextBg } from "../Component/CardToko";
import { CardKategori } from "../Component/CardToko";
import { CardItem } from "../Component/CardToko";
import onlineStore from "../assets/online_store_green.png";
import { Button7 } from "../Component/ButtonCard";
import PageButton from "../Component/PageButton";
import Footer from "../Component/Footer";
import sawiHijau from "../assets/sawi_hijau.png";
import kangkung from "../assets/kangkung.png";
import brokoli from "../assets/brokoli.png";
import kol from "../assets/kol.png";
import "../App.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Toko = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/get/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="cta d-flex mt-4 align-items-center ">
          <img src={onlineStore} alt="" className="me-3" />
          <Link to="/status-toko">
            <Button7 set="Status Pesanan" />
          </Link>
        </div>
        <CardInfoProfileToko />
        <CardDeskripsi />
        <CardInfoTextBg />
        <div className="d-flex justify-content-between align-content-center align-items-center  ">
          <div className="box-contain-toko">
            <div className="judul-content-toko">
            <CardKategori set="Sayuran Rempah" color="#000" />
            <CardKategori set="Sayuran Rempah" color="#000" />
            <CardKategori set="Paket Masak" color="#000" />
            </div>
            <div className="content-toko">
              <div className="items">
                {products.map((product) => (
                  <CardItem
                    key={product.id}
                    img={`http://localhost:3001/uploads/${product.image}`}
                    set={product.nama_product}
                    price={`Rp. ${product.harga_kg}`}
                  />
                ))}
                <CardItem img={kangkung} set="kangkung" price="Rp. 15.000"/>
                <CardItem img={kol} set="kol" price="Rp. 15.000"/>
                <CardItem img={sawiHijau} set="sawi" price="Rp. 15.000" />
                <CardItem img={brokoli} set="brokoli" price="Rp. 15.000"/>
              </div>
            </div>
          </div>
        </div>
        <PageButton />
      </div>
      <Footer />
    </div>
  );
};

export { Toko };
