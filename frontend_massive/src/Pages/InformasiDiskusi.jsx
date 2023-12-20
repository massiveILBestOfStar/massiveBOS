import {useState, useEffect} from "react";
import Navbar from "../Component/Navbar";
import "../Styles/InformasiDiskusi.css";
import "bootstrap/dist/css/bootstrap.min.css";
import imgDiskusi from "../assets/diskusi.png";
import imgChat from "../assets/chat.png";
import imgSave from "../assets/save.png";
import imgFav from "../assets/fav.png";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer";

export const InformasiDiskusi = () => {
  const [diskusiList, setDiskusiList] = useState([]);

  useEffect(() => {
    const fetchDiskusi = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/get/diskusi');
        if (!response.ok) {
          throw new Error('Failed to fetch diskusi');
        }

        const data = await response.json();
        setDiskusiList(data.data);
      } catch (error) {
        console.error('Error fetching diskusi:', error.message);
      }
    };

    fetchDiskusi();
  }, []);

  
  return (
    <div>
      <Navbar />
      <section className="judul">
        <Link to="/informasiDiskusi" className="nav">
          Forum Diskusi
        </Link>
      </section>
      <div className="garis"></div>
      <div className="container">
        {diskusiList.map((diskusi) => (
        <div className="diskusi" key={diskusi.id}>
        <p className="pJudul">
          {diskusi.judul_topik}
        </p>
        <hr />
          <p className="namaAuthor">{diskusi.username}</p>
          <p className="isiDiskusi">
          {diskusi.deskripsi}
          </p>
          <img src={`http://localhost:3001/diskusi/${diskusi.foto}`} alt="Diskusi" />
          <p className="createAuthor">Create by Bambang Sugeni</p>
          <p className="font-italic">10 November 2023 | 18.00 WIB</p>
          <div className="imgAction">
            <img src={imgFav} alt="Favorite" />
            <img src={imgChat} alt="Chat" />
            <img src={imgSave} alt="Save" />
          </div>
          <hr />
        </div>
        ))}

        <div className="diskusi">
          <p className="dateKomen">10 November 2023</p>
          <p className="namaAuthor">Jaya Wijaya</p>
          <p className="isiDiskusi">
            Saya saranin sih pake Fish Emulsion mas, bagus ko itu soalnya saya
            pake sendiri mas buat sayur saya. Dan hasilnya memuaskan.
          </p>
          <div className="imgActionKomen">
            <img src={imgFav} alt="Favorite" />
            <img src={imgChat} alt="Chat" />
            <img src={imgSave} alt="Save" />
          </div>
          <hr />
        </div>
        <div className="diskusi">
          <p className="dateKomen">10 November 2023</p>
          <p className="namaAuthor">Indah Kusuma</p>
          <p className="isiDiskusi">
            Saya pernah pake Osmocote mas waktu tahun 2020. Terbukti bagus mas,
            sampe sekarang pun saya masih pake.
          </p>
          <div className="imgActionKomen">
            <img src={imgFav} alt="Favorite" />
            <img src={imgChat} alt="Chat" />
            <img src={imgSave} alt="Save" />
          </div>
          <hr />
        </div>
        <div className="diskusi">
          <p className="dateKomen">10 November 2023</p>
          <p className="namaAuthor">Kathrin</p>
          <p className="isiDiskusi">
            Ada nih merk Miracle-Gro Water Soluble All Purpose Plant Food.
            Sodara saya petani di daerah X, dan beliau pake ini. Bagus ko mas.
          </p>
          <div className="imgActionKomen">
            <img src={imgFav} alt="Favorite" />
            <img src={imgChat} alt="Chat" />
            <img src={imgSave} alt="Save" />
          </div>
          <hr />
        </div>
        <div className="diskusi">
          <p className="dateKomen">10 November 2023</p>
          <p className="namaAuthor">Hera Saraswati</p>
          <p className="isiDiskusi">
            Saya saranin sih pake Fish Emulsion mas, bagus ko itu soalnya saya
            pake sendiri mas buat sayur saya. Dan hasilnya memuaskan.
          </p>
          <div className="imgActionKomen">
            <img src={imgFav} alt="Favorite" />
            <img src={imgChat} alt="Chat" />
            <img src={imgSave} alt="Save" />
          </div>
          <hr />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InformasiDiskusi;
