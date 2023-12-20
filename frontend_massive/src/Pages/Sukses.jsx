import React from 'react'
import '../App.css';
import '../Styles/Sukses.css'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Button7 } from '../Component/Button'
import imgSukses from '../assets/sukses.png'
import { Link } from 'react-router-dom'



const Sukses = () => {
  return (
    <div>
    <Navbar/>
    <section className='judul'>
        <Link to="/informasiDiskusi" className='nav' >Forum Diskusi</Link>
        <Link to="/panduanTani" className='nav'>Panduan Bertani</Link>
      </section>
  <div className="garis"></div>
  <section className='img-suksesSEC'>
    <div className='keteranganSukses'>
    <img src={imgSukses} alt="instance" className='img-sukses'/>
    <p className='textSukses'>TOPIK BARU BERHASIL DIBUAT</p>
    <Button7  set="SELANJUTNYA" />
    </div>
  </section>
  <Footer/>
    </div>
  )
}

export default Sukses