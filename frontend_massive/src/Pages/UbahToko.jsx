import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../App.css";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Button2 } from "../Component/Button";
import { Link } from "react-router-dom";

const UbahToko = () => {
  const { id } = useParams(); // Get the id from URL parameter

  
  const [formData, setFormData] = useState({
    nama_toko: '',
    alamat_toko: '',
    email: '',
    no_telepon: '',
    sistem_pembayaran: '',
    diskripsi_toko:"",
  });

  useEffect(() => {
    // Fetch toko data based on the id
    fetch(`http://localhost:3001/api/toko/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // Update the form data with the fetched data
        setFormData({
          nama_toko: data.nama_toko,
          alamat_toko: data.alamat_toko,
          email: data.email,
          no_telepon: data.no_telepon,
          sistem_pembayaran:data.sistem_pembayaran ,
          diskripsi_toko:data.diskripsi_toko,
        });
      })
      .catch((error) => console.error('Error fetching toko data:', error));
  }, [id]);

  const handleInputChange = (e) => {
    // Update the form data as the user types
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Send a request to update the toko data
    fetch(`http://localhost:3001/api/toko/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((updatedData) => {
        alert('Toko updated successfully:', updatedData);
        window.location.href = "/status-toko";
      })
      .catch((error) => alert('Error updating toko data:', error));
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
              placeholder="nama toko"
              className="input-toko"
              name="nama_toko"
              value={formData.nama_toko}
              onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  className="input-toko3"
                  name="deskripsi_toko"
                  value={formData.deskripsi_toko}
                  onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
          </div>
          <div className="submit-toko1">
            <Link to="/tambah-produk" onClick={handleFormSubmit}>
              <Button2 set="Ubah" />
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UbahToko;
