import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layanan from "./Pages/Layanan";
import Blog from "./Pages/Blog";
import Informasi from "./Pages/Informasi";
import Promo from "./Pages/Promo";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import { Login } from "./Pages/Login";
import BukaToko from "./Pages/BukaToko";
import { ProfileToko } from "./Pages/ProfileToko";
import LayananKebun from "./Pages/LayananKebun";
import Promo1 from "./Pages/Promo1";
import Harga from "./Pages/Harga";
import { Toko } from "./Pages/Toko";
import DaftarToko2 from "./Pages/DaftarToko2";
import BuatDiskusiBaru from "./Pages/BuatDiskusiBaru";
import Sukses from "./Pages/Sukses";
import ResepSayur from "./Pages/ResepSayur";
import ResepSayurAsem from "./Pages/ResepSayurAsem";
import ResepSayurGado from "./Pages/ResepSayurGado";
import ResepSayurCapcay from "./Pages/ResepSayurCapcay";
import ResepSayurSalad from "./Pages/ResepSayurSalad";
import ResepSayurSop from "./Pages/ResepSayurSop";

import Register from "./Pages/Register";
import { TambahProduk } from "./Pages/TambahProduk";
import InformasiDiskusi from "./Pages/InformasiDiskusi";
import StatusToko from "./Pages/StatusToko";
import UbahToko from "./Pages/UbahToko";
import LayananKebun3 from "./Pages/LayananKebun3";
import LayananKebun4 from "./Pages/LayananKebun4";
import LayananKebun5 from "./Pages/LayananKebun5";
import LayananKebun6 from "./Pages/LayananKebun6";
import LayananKebun2 from "./Pages/LayananKebun2";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/info" element={<Informasi />} />
          <Route path="/informasiDiskusi" element={<InformasiDiskusi />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/promo1" element={<Promo1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/buka-toko" element={<BukaToko />} />
          <Route path="/profile-toko" element={<ProfileToko />} />
          <Route path="/lkebun" element={<LayananKebun />} />
          <Route path="/2kebun" element={<LayananKebun2 />} />
          <Route path="/3kebun" element={<LayananKebun3 />} />
          <Route path="/4kebun" element={<LayananKebun4 />} />
          <Route path="/5kebun" element={<LayananKebun5 />} />
          <Route path="/6kebun" element={<LayananKebun6 />} />
          <Route path="/harga" element={<Harga />} />
          <Route path="/toko" element={<Toko />} />
          <Route path="/DaftarToko2" element={<DaftarToko2 />} />
          <Route path="/resepsayur" element={<ResepSayur />} />
          <Route path="/resepsayurasem" element={<ResepSayurAsem />} />
          <Route path="/resepsayurGado" element={<ResepSayurGado />} />
          <Route path="/resepsayurcapcay" element={<ResepSayurCapcay />} />
          <Route path="/resepsayursalad" element={<ResepSayurSalad />} />
          <Route path="/resepsayursop" element={<ResepSayurSop />} />
          <Route path="/register" element={<Register />} />
          <Route path="/buatDiskusiBaru" element={<BuatDiskusiBaru />} />
          <Route path="/sukses" element={<Sukses />} />
          <Route path="/tambah-produk" element={<TambahProduk />} />
          <Route path="/status-toko" element={<StatusToko />} />
          <Route path="/ubahtoko/:id" element={<UbahToko />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
