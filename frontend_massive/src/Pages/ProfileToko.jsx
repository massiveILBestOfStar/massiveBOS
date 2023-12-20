import { useState, useEffect } from "react";
import Navbar from "../Component/Navbar";
import bolaBasket from "../assets/bola_basket.jpeg";
import photoProfile from "../assets/photo_profile.jpeg";
import onlineStore from "../assets/online_store.png";
import Footer from "../Component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";
import { Button5 } from "../Component/Button";
import "../App.css";

const ProfileToko = () => {
  const [profileData, setProfileData] = useState([]);
  const [tokoData, setTokoData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/profile")
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => b.id - a.id);
        setProfileData(sortedData);
      })
      .catch((error) => console.error("Error fetching profile data:", error));

    fetch("http://localhost:3001/api/toko")
      .then((response) => response.json())
      .then((data) => setTokoData(data))
      .catch((error) => console.error("Error fetching toko data:", error));
  }, []);

  const latestProfile = profileData[0];

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

          <div className="profile-data d-flex justify-content-center column-gap-5  ">
            <div className="border border-2 p-3">
              <p>Nama Depan: {latestProfile?.nama_depan}</p>
              <p>Nama Belakang: {latestProfile?.nama_belakang}</p>
              <p>Email: {latestProfile?.email}</p>
              <p>No Telepon: {latestProfile?.no_telepon}</p>
              <p>Alamat: {latestProfile?.address}</p>
              <p>Jenis Kelamin: {latestProfile?.jenis_kelamin}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { ProfileToko };
