import {useState, useEffect} from 'react';
import { Button, Button2 } from '../Component/Button';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import toko1 from '../assets/toko1.png';
import shop from '../assets/shop.png';
import { Link } from 'react-router-dom';

const StatusToko = () => {
 const [tokoData, setTokoData] = useState([]);

 useEffect(() => {
    const fetchDataToko = async () => {
        try {
          const response = await fetch("http://localhost:3001/api/get/toko"); // Sesuaikan dengan endpoint yang benar
          if (!response.ok) {
            throw new Error("Failed to fetch data toko");
          }
  
          const data = await response.json();
          setTokoData(data);
       
        } catch (error) {
          console.error("Error fetching data: toko", error.message);
        }
      };
   fetchDataToko()
  }, []);
  return (
    <div>
        <Navbar />
        <div className="box-status1">
            <div className="status-head1">
                <div className="judul-head-stat1">
                    <img src={toko1} alt="" />
                    <div className="text-jud-stat1">
                        <p>{tokoData?.[0]?.nama_toko || "Data tidak tersedia"}</p>
                        <p>20 Pengikut</p>
                    </div>
                </div>
                <div className="kunjung-stat1">
                    <img src={shop} alt="" />
                    <Link to='/toko'><Button set="Kunjungi toko" /></Link>
                </div>
            </div>
            <div className="badan-status1">
                <div className="judul-badan-stat1">
                    <p>Status Pesanan</p>
                </div>
                <div className="nilai-badan-stat1">
                    <div className="kotak-nilai-stat1">
                        <p>5</p>
                        <p>Perlu Dikirm</p>
                    </div>
                    <div className="kotak-nilai-stat1">
                        <p>0</p>
                        <p>Pembatalan</p>
                    </div>
                    <div className="kotak-nilai-stat1">
                        <p>10</p>
                        <p>Penilaian</p>
                    </div>
                </div>
            </div>
           <div className='d-flex'>
           <div className="tombol-status1">
               <Link to ="/tambah-produk">
               <Button2 set="+ Tambah Produk" />
               </Link>
            </div>
           </div>
        </div>
        <Footer />
    </div>
  )
}

export default StatusToko