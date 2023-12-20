import React from 'react'
import '../App.css';
import '../Styles/About.css'
import Navbar from '../Component/Navbar'
import bgAbout from '../assets/bg-about.png'
import tanamanAbout from '../assets/tanaman-about.png'
import petani1 from '../assets/petani1.png'
import petani2 from '../assets/petani2.png'
import petani3 from '../assets/petani3.png'
import Footer from '../Component/Footer';
const About = () => {
  return (
    <div>
        <Navbar />
  <div className="c_about-frame">
    <img
      src={bgAbout}
      alt="bgAbout"
      width="1437"
      height="476"

      />
      <div className="aboutText">
      <p className="aboutTextParagraf">
        Sebuah website untuk mempermudah para petani di suatu daerah dalam
        mengembangkan hasil pertaniannya agar bisa mendapatkan hasil pertanian
        yang berkualitas tinggi guna memperluas jaringan konsumen dan membantu
        memasarkan produk mereka serta menambah relasi antar petani.
      </p>
    </div>
    <img
      src={tanamanAbout}
      alt="tanamanAbout"
      width="414"
      height="319"
      className="c_about-rectangle1"
      />

      <div className="isiAbout">
      <p className="isiAboutText">
        Melalui informasi terperinci mengenai pemilihan bibit unggul, metode
        penanaman yang efektif, serta pemeliharaan yang optimal, website
        pertanian ini bertujuan memberikan panduan bagi petani untuk
        meningkatkan kualitas tanaman sayuran. Dengan fokus pada pemupukan
        organik, irigasi yang tepat, dan pengendalian hama secara berkelanjutan,
        kami berharap dapat mendukung para petani dalam menghasilkan tanaman
        sayuran berkualitas tinggi dengan nutrisi optimal dan ketahanan terhadap
        penyakit.
      </p>
    </div>


    
    <div className="quoteAbout">
      <p className="quoteAboutText">
        &quot;Pertanian adalah tarian hati manusia dengan alam, di mana setiap
        biji yang ditanam adalah sebuah doa yang tumbuh menjadi harapan. Dalam
        setiap usaha kita merawat tanah, kita menari bersama keajaiban kehidupan
        dan menciptakan simfoni keberlanjutan untuk generasi mendatang.&quot;
      </p>
    </div>


    <div className="petani"><p className="petaniText">PARA PETANI</p></div>
    <div className="imgPetani">
      <table>
        <tr>
          <td>
          <img
              src={petani1}
              alt="petani1"
              width="400"
              height="360"
              className="imgPetani1"
          />
          </td>
          <td>
          <img
          src={petani2}
          alt="petani2"
          width="400"
          height="360"
          className="imgPetani2"
          />
          </td>
          <td>
          <img
          src={petani3}
          alt="rectangle3"
          width="400"
          height="360"
          className="imgPetani3"
          />
          </td>
        </tr>
      </table> 
</div>
        <Footer/>
  </div>

</div>
  )
}

export default About