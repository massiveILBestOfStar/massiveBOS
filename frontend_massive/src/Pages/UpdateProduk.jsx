import Navbar from "../Component/Navbar";
import selada from "../assets/selada.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import backgroundCard from "../assets/background-card.jpeg";
import sell from "../assets/Sell.png";
import Footer from "../Component/Footer";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const UpdateProduk = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    nama_product: '',
    min_order: '',
    max_order: '',
    harga_kg: '',
    deskripsi_product: '',
    kategori: '',
    stok: '',
    toko_id: "",
    image: null,
  });

  const [tokoData, setTokoData] = useState([]);

  useEffect(() => {
    const fetchTokoData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/get/toko");
        if (!response.ok) {
          throw new Error("Failed to fetch toko data");
        }

        const data = await response.json();
        setTokoData(data);

        // Set nilai toko_id ke nilai id toko pertama (jika ada)
        if (data.length > 0) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            toko_id: data[0].id.toString(), // Sesuaikan dengan tipe data yang diharapkan
          }));
        }
      } catch (error) {
        console.error("Error fetching toko data:", error.message);
      }
    };

    fetchTokoData();
  }, []);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }

        const data = await response.json();
        setFormData(data.data);
      } catch (error) {
        console.error('Error fetching product data:', error.message);
      }
    };

    fetchProductData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch(`http://localhost:3001/api/products/${id}`, {
        method: 'PUT',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Error updating product');
      }

      const responseData = await response.json();
      console.log(responseData);

      alert('Produk berhasil diperbarui!');
      // Redirect atau navigasi ke halaman produk atau halaman lain yang diinginkan
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Terjadi kesalahan saat memperbarui produk.');
    }
  };


  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="content-informasi-produk mt-5">
          <p style={{ color: "#4D9028", textDecoration: "none" }}>
            Update Produk
          </p>
          <div className="mt-4 border-bottom"></div>
          <img
            src={selada}
            alt=""
            style={{
              width: "250px",
              border: " 3px solid #9A9A9A",
              borderRadius: "8px",
            }}
            className="mt-4 p-2"
          />
          <div
            style={{
              background: `url(${backgroundCard})`,
              borderRadius: "20px",
              border: "3px solid #9A9A9A",
              padding: "20px 50px",
              height: "646px",
            }}
            className="formProduk mt-4"
          >
            <div className="row">
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="toko_id" value={formData.toko_id} />
                <div className="col-12 mt-5 mb-3">
                  <label htmlFor="productImage" className="form-label">
                    Foto Produk
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="productImage"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
                <div className="col-12 d-flex justify-content-between ">
                  <div className="col-4">
                    <label htmlFor="productImage" className="form-label">
                      Nama Produk
                    </label>
                    <input
                      type="text"
                      label="Nama Produk"
                      placeholder="Masukan Nama Produk"
                      name="nama_product"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-4 d-flex column-gap-3 ">
                    <label htmlFor="productImage" className="form-label">
                      Min
                    </label>
                    <input
                      type="number"
                      label="Min Pesanan"
                      placeholder="Min"
                      name="min_order"
                      onChange={handleInputChange}
                    />
                    <label htmlFor="productImage" className="form-label">
                      Max
                    </label>
                    <input
                      type="number"
                      label="Max Pesanan"
                      placeholder="Max"
                      name="max_order"
                      onChange={handleInputChange}
                    />
                    <label htmlFor="productImage" className="form-label">
                      Harga Satuan
                    </label>
                    <input
                      type="number"
                      label="Harga Satuan"
                      placeholder="Harga/kg"
                      name="harga_kg"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="productImage" className="form-label mt-3">
                    Deskripsi Produk
                  </label>
                  <input
                    type="text"
                    label="Deskripsi Produk"
                    placeholder="Masukan Deskripsi"
                    name="deskripsi_product"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="kategori-produk mt-3 ">
                  <div className="d-flex column-gap-4 ">
                    <div className="form-group">
                      <label htmlFor="category" className="form-label">
                        Kategori Produk
                      </label>
                      <select
                        className="form-select"
                        id="category"
                        name="kategori"
                        onChange={handleInputChange}
                      >
                        <option value="">Pilih Kategori</option>
                        <option value="paket_masak">Paket Masak</option>
                        <option value="sayuran_segar">Sayuran Segar</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-between mt-5 ">
                  <div className="col-4 d-flex column-gap-3 align-items-center ">
                    <img
                      src={sell}
                      style={{ width: "36px", height: "39px" }}
                      alt=""
                    />
                    <p className="mt-3">Stok</p>
                  </div>
                  <div className="col-3">
                    <input
                      type="number"
                      placeholder="Bobot"
                      name="stok"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div
                  style={{ marginTop: "200px", marginBottom: "100px" }}
                  className="d-flex column-gap-5 justify-content-center"
                >
                  <button type="submit" className="btn btn-secondary">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { UpdateProduk };
