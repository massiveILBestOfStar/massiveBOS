import { useState } from "react";
import "../App.css";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Button2 } from "../Component/Button";
import { Link } from "react-router-dom";

const DaftarToko2 = () => {
  const [formData, setFormData] = useState({
    nama_toko: "",
    alamat_toko: "",
    email: "",
    sistem_pembayaran: "",
    deskripsi_toko: "",
    no_telepon: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Kirim data ke API
      const response = await fetch("http://localhost:3001/api/toko", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Success:", data);
        // Lakukan sesuatu setelah berhasil seperti redirect atau menampilkan pesan
        alert("Register buka toko berhasil");
        window.location.href = "/status-toko";
      } else {
        console.error("Error:", data);
        // Tangani kesalahan, mungkin menampilkan pesan kesalahan kepada pengguna
        alert("Register buka toko gagal");
      }
    } catch (error) {
      console.error("Error:", error);
      // Tangani kesalahan umum, mungkin menampilkan pesan kesalahan kepada pengguna
      alert("Terjadi kesalahan saat melakukan registrasi profile");
    }
  };
  return (
    <div>
      <Navbar />
      <section className="judul">
        <p>Atur Informasi Toko</p>
      </section>
      <div className="garis"></div>
      <div className="box-form-toko">
        <form className="login-toko1">
          <div className="dalamftoko1">
            <label htmlFor="nama-t1" className="label-toko1">
              Nama Toko
            </label>
            <input
              type="text"
              placeholder="Nama Toko"
              className="input-toko"
              name="nama_toko"
              value={formData.nama_toko}
              onChange={handleChange}
            />
            <div className="form-dua">
            <div className="formtambah2">
              <div className="tambahan-form">
                <label htmlFor="alamat1" className="label-toko1">
                  Alamat Toko
                </label>
                <input
                  type="text"
                  placeholder="Alamat Toko"
                  className="input-toko2"
                  name="alamat_toko"
                  value={formData.alamat_toko}
                  onChange={handleChange}
                />
              </div>
              <div className="tambahan-form">
                <label htmlFor="bayar1" className="label-toko1">
                  Sistem Pembayaran
                </label>
                <input
                  type="text"
                  placeholder="Sistem Pembayaran"
                  className="input-toko"
                  name="sistem_pembayaran"
                  value={formData.sistem_pembayaran}
                  onChange={handleChange}
                />
              </div>
              </div>
              <div className="tambahan-form">
                <label htmlFor="destoko1" className="label-toko1">
                  Deskripsi Toko
                </label>
                <input
                  type="text"
                  placeholder="Deskripsi Toko"
                  className="input-toko3 mb-5"
                  name="deskripsi_toko"
                  value={formData.deskripsi_toko}
                  onChange={handleChange}
                />
              </div>
            </div>
            <label htmlFor="emailtoko1" className="label-toko1">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input-toko"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="hptoko1" className="label-toko1">
              Nomor Telepon
            </label>
            <input
              type="text"
              placeholder="Nomor Telepon"
              className="input-toko"
              name="no_telepon"
              value={formData.no_telepon}
              onChange={handleChange}
            />
          </div>
          <div className="submit-toko1">
            <Link to="/status-toko" onClick={handleSubmit}>
              <Button2 set="Submit" />
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default DaftarToko2;
