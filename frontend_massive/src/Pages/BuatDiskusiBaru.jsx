import {useState} from 'react'
import '../App.css';
import '../Styles/BuatDiskusiBaru.css'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { ButtonForm } from '../Component/Button'
import { Link } from 'react-router-dom'


const BuatDiskusiBaru = () => {
  const [formData, setFormData] = useState({
    username: '',
    judul_topik: '',
    deskripsi: '',
    foto: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, foto: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch('http://localhost:3001/api/diskusi', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Error creating discussion');
      }

      const responseData = await response.json();
      console.log(responseData);

      alert('Diskusi berhasil dibuat!');
      window.location.href = "/informasiDiskusi";
    } catch (error) {
      console.error('Error creating discussion:', error);
      alert('Terjadi kesalahan saat membuat diskusi.');
    }
  };

  return (
    <div>
    <Navbar/>
    <section className='judul'>
        <Link to="/informasiDiskusi" className='nav' >Forum Diskusi</Link>
        <Link to="/panduanTani" className='nav'>Panduan Bertani</Link>
      </section>
  <div className="garis"></div>
  <section className='img-diskusiBaru'>
  <div className="daftarDiskusi">
       <form className="formDaftarDiskusi" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Masukkan username" id="username" name="username"  className='inputForm' onChange={handleInputChange}/>
          <label htmlFor="judulTopik">Judul Topik</label>
          <input  type="text" placeholder="Masukkan judul topik" id="judul" name="judul_topik" className='inputForm' onChange={handleInputChange} />
          <label htmlFor="deskripsi">Deskripsi</label>
          <textarea  type="text-area" placeholder="Masukkan deskripsi" id="deskripsi" name="deskripsi" className='textForm' onChange={handleInputChange}/>
          <label htmlFor="gambar">Foto (Optional)</label>
          <input type="file" name='foto' alt="image" className='inputForm'  accept="image/*" onChange={handleImageChange}></input> 
          <tr >
            <td><ButtonForm set="Reset" type="submit" className="buttonForm" /></td>
            <td><ButtonForm set="Submit" type="reset" className="buttonForm" /></td>
          </tr>
      </form>
    </div>
  </section>
  <Footer/>
    </div>
  )
}

export default BuatDiskusiBaru