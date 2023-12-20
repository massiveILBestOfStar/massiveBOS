import { useState, useEffect } from "react";
import { Button6 } from "./ButtonCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import profileTokoIcon from "../assets/profile-toko-icon.jpeg";
import cardBackground from "../assets/background-card.jpeg";
import star from "../assets/star.svg";
import starPolos from "../assets/bintangPolos.svg";
import lokasi from "../assets/lokasi.png";
import { Link } from "react-router-dom";

const CardInfoProfileToko = (props) => {
  const [tokoData, setTokoData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/get/toko")
      .then((response) => response.json())
      .then((data) => setTokoData(data))
      .catch((error) => console.error("Error fetching toko data:", error));
  }, []);

  const namaToko = tokoData.length > 0 ? tokoData[0].nama_toko : "";
  const alamatToko = tokoData.length > 0 ? tokoData[0].alamat_toko : "";
  const idToko = tokoData.length > 0 ? tokoData[0].id : "";

  return (
    <div className="d-flex justify-content-center mt-4">
      <div
        style={{
          background: `url(${cardBackground}`,
          width: "100%",
          border: "2px solid #9A9A9A",
        }}
        className="shadow-sm p-4 rounded-2"
      >
        <div className=" card-body d-flex justify-content-around align-items-center column-gap-3">
          <img
            src={profileTokoIcon}
            alt="profile toko"
            style={{
              width: "120px",
              backgroundColor: "red",
              borderRadius: "50%",
              border: "1px solid #000",
            }}
          />

          <div style={{ marginLeft: "30px" }} className="data-toko me-auto">
            <p
              style={{
                marginBottom: "0",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              {namaToko}
            </p>
            <div className="rating d-flex align-items-center">
              <img src={star} style={{ width: "20px", height: "20px" }} />
              <p
                style={{
                  margin: "0 10px",
                  fontSize: "13px",
                  width: "30px",
                  lineHeight: "15px",
                }}
              >
                Rating 4/5
              </p>
              <p style={{ margin: "0 10px", fontSize: "10px" }}>|</p>
              <p style={{ margin: "0", fontSize: "13px" }}> 20 Pengikut</p>
            </div>
            <div className="rating d-flex align-items-center mt-1">
              <img src={lokasi} style={{ width: "20px", height: "20px" }} />
              <p
                style={{ margin: "0 5px", fontSize: "13px", lineHeight: "8px" }}
              >
                {alamatToko}
              </p>
            </div>
          </div>

          <div className="px-5">
            <Link to={`/ubahtoko/${idToko}`}>
              <Button6 set="Ubah"></Button6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardInfoTextBg = () => {
  return (
    <div>
      <div
        style={{
          border: "2px solid #9A9A9A",
          background: `url(${cardBackground}`,
        }}
        className="p-3 rounded-2 mt-4 "
      >
        <div className="card-body text-center px-5 fw-bolder fs-4 ">Produk</div>
      </div>
    </div>
  );
};

const CardKategori = (props) => {
  return (
    <div>
      <div style={{ width: "100%" }} className="card shadow-sm ">
        <div
          style={{ color: `${props.color}`, fontWeight: "1000" }}
          className="card-body text-center fs-5"
        >
          {props.set}
        </div>
      </div>
    </div>
  );
};

const CardItem = (props) => {
  return (
    <div>
      <div
        style={{ border: "2px solid #9A9A9A", width: "300px", height: "300px", margin: "25px 45px" }}
        className="card d-flex flex-column align-content-center align-items-center shadow-sm rounded-4"
      >
        <img
          src={props.img}
          alt=""
          style={{
            width: "120px",
            height: "120px",
            marginTop: "50px",
            objectFit: "contain",
          }}
        />

        <div className="card-body">
          <h5 className="card-title text-center fw-bold px-4 mt-1">
            {props.set}
          </h5>
          <p
            style={{ fontWeight: "600", fontSize: "18px" }}
            className="card-text mt-2"
          >
            {props.price}
          </p>
          <div
            style={{ marginTop: "-20px", marginBottom: "20px" }}
            className="rating d-flex align-items-center"
          >
            <img src={star} style={{ width: "15px" }} />
            <img src={star} style={{ width: "15px" }} />
            <img src={star} style={{ width: "15px" }} />
            <img src={star} style={{ width: "15px" }} />
            <img src={starPolos} style={{ width: "15px" }} />
            <p
              style={{
                fontSize: "12px",
                marginTop: "18px",
                marginLeft: "20px",
              }}
            >
              100 Terjual
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardDeskripsi = () => {
  const [tokoData, setTokoData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/get/toko")
      .then((response) => response.json())
      .then((data) => setTokoData(data))
      .catch((error) => console.error("Error fetching toko data:", error));
  }, []);
  const desToko = tokoData.length > 0 ? tokoData[0].deskripsi_toko : "";

  return (
    <div>
      <div
        style={{ border: "2px solid #9A9A9A" }}
        className="p-3 shadow-sm rounded-2 mt-4 "
      >
        <div className="card-body w-50 ">
          <h5 className="fw-bolder">Deskripsi Toko</h5>
          <p>{desToko}</p>
        </div>
      </div>
    </div>
  );
};

export {
  CardInfoProfileToko,
  CardKategori,
  CardInfoTextBg,
  CardItem,
  CardDeskripsi,
};
