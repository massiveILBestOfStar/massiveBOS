import { useState, useEffect } from "react";
import Navbar from "../Component/Navbar";
import bolaBasket from "../assets/bola_basket.jpeg";
import photoProfile from "../assets/photo_profile.jpeg";
import Footer from "../Component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";
import "../App.css";
import onlineStore from "../assets/online_store.png";
import { Button5 } from "../Component/Button";

const Profile = () => {
  const [latestProfile, setLatestProfile] = useState(null);
  const [tokoData, setTokoData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/get/user"); // Sesuaikan dengan endpoint yang benar
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setLatestProfile(data.data[0]); // Misalnya, di sini kita mengambil data pengguna pertama
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetch("http://localhost:3001/api/toko")
      .then((response) => response.json())
      .then((data) => setTokoData(data))
      .catch((error) => console.error("Error fetching toko data:", error));

    fetchUserData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="header-profile">
        <img
          src={bolaBasket}
          alt="header-profile"
          style={{ height: "200px" }}
          className="w-100 object-fit-cover position-relative "
        />
        <div
          className="container mt-3 profile-content"
          style={{ height: "300px" }}
        >
          <img
            src={photoProfile}
            alt="photo-profile"
            className="position-absolute  rounded-circle object-fit-cover"
            style={{
              width: "12.5rem",
              height: "12.5rem",
              top: "200px",
              right: "80%",
            }}
          />

          {/* Display jika gak ada data toko */}
          {!tokoData.length && (
            <div
              style={{ top: "200px", right: "200px" }}
              className="call-to-action d-flex align-items-center position-absolute "
            >
              <img
                src={onlineStore}
                alt=""
                style={{ width: "60px", marginBottom: "15px" }}
              />
              <p>
                <Link to="/buka-toko">
                  <Button5 set="Buka Toko" color="black"></Button5>
                </Link>
              </p>
            </div>
          )}

          {/* Display jika ada data toko */}
          {!!tokoData.length && (
            <div
              style={{ top: "200px", right: "200px" }}
              className="call-to-action d-flex align-items-center position-absolute "
            >
              <img src={onlineStore} alt="" style={{ width: "60px" }} />
              <Link to="/status-toko">
                <Button5 set="Toko anda"></Button5>
              </Link>
            </div>
          )}

          <div className="c-profile">
            <div className=" profile">
              <p className="fw-bold">Nama Depan</p>
              <p style={{width: "200px"}}>{latestProfile?.firstName}</p>
              <p className="fw-bold">Nama Panjang</p>
              <p style={{width: "200px"}}>{latestProfile?.firstName} {latestProfile?.lastName}</p>
              <p className="fw-bold">Email/No.Hp</p>
              <p>{latestProfile?.emailOrPhone}</p>
            </div>
            <div className=" profile">
              <p style={{width: "200px"}} className="fw-bold">Nama Belakang</p>
              <p>{latestProfile?.lastName} </p>
            </div>
            <div className=" profile">
              <p className="fw-bold">Jenis Kelamin</p>
              <p>{latestProfile?.gender}</p>
              <p className="fw-bold">Tanngal Lahir</p>
              <p>{latestProfile?.birthdate}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
