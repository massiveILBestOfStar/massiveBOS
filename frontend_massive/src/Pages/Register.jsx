import { useState } from "react";
import Footer from "../Component/Footer";
import { Button2 } from "../Component/Button";


const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailOrPhone: "",
    password: "",
    birthdate: {
      day: "",
      month: "",
      year: "",
    },
    gender: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.birthdate.day || !formData.birthdate.month || !formData.birthdate.year) {
        alert("Please select a valid birthdate");
        return;
      }
    
      // Concatenate day, month, and year into a string
      const birthdateString = `${formData.birthdate.year}-${formData.birthdate.month}-${formData.birthdate.day}`;
    
    
    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          emailOrPhone: formData.emailOrPhone,
          password: formData.password,
          birthdate: birthdateString,
          gender: formData.gender,
        }),
   
      });
     
  
      const data = await response.json();

      if (data.success) {
        alert("Registration successful");
        window.location.href = "/login";
        // Redirect to profile page or perform other actions
      } else {
        alert("Registration failed");
        // Handle registration failure
      }
    } catch (error) {
      alert("Error during registration: " + error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "birthdateDay" || name === "birthdateMonth" || name === "birthdateYear") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        birthdate: {
          ...prevFormData.birthdate,
          [name.substring(9).toLowerCase()]: value,
        },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div>
      <div className="box-form-reg">
        <form className="reg-use1" onSubmit={handleSubmit}>
          <p className="judul-register1">BUAT AKUN</p>
          <div className="dalamreg1">
            <div className="form-dua-reg">
              <div className="tambahan-form-reg">
                <label htmlFor="fname" className="label-reg1">
                  Nama Depan
                </label>
                <input
                  type="text"
                  placeholder="Nama Depan"
                  className="input-reg2"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="tambahan-form-reg">
                <label htmlFor="bname" className="label-reg1">
                  Nama Belakang
                </label>
                <input
                  type="text"
                  placeholder="Nama Belakang"
                  className="input-reg2"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <label htmlFor="email/notp" className="label-reg1">
              Email / No. Handphone
            </label>
            <input
              type="text"
              placeholder="Email / No. Handphone"
              className="input-reg"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
            />
            <label htmlFor="pass" className="label-reg1">
              Kata Sandi Baru
            </label>
            <input
              type="password"
              placeholder="Kata Sandi Baru"
              className="input-reg"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="form-dua-reg">
              <div className="tambahan-form-reg">
                <label htmlFor="birthdateDay" className="label-reg1">
                  Tanggal Lahir
                </label>
                <select
                  name="birthdateDay"
                  value={formData.birthdate.day}
                  onChange={handleChange}
                >
                  <option value="">Days</option>
                  {Array.from({ length: 31 }, (_, index) => index + 1).map(
                    (day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className="tambahan-form-reg">
                <label htmlFor="birthdateMonth" className="label-reg1">
                  Bulan
                </label>
                <select
                  name="birthdateMonth"
                  value={formData.birthdate.month}
                  onChange={handleChange}
                >
                  <option value="">Month</option>
                  {[
                    "Januari",
                    "Febuari",
                    "Maret",
                    "April",
                    "Mei",
                    "Juni",
                    "Juli",
                    "Agustus",
                    "September",
                    "Oktober",
                    "November",
                    "Desember",
                  ].map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div className="tambahan-form-reg">
                <label htmlFor="birthdateYear" className="label-reg1">
                  Tahun
                </label>
                <select
                  name="birthdateYear"
                  value={formData.birthdate.year}
                  onChange={handleChange}
                >
                  <option value="">Year</option>
                  {Array.from({ length: 21 }, (_, index) => 2023 - index).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="reg-jenis1">
              <div className="jenis-k1">
                <input
                  type="radio"
                  id="pria"
                  name="gender"
                  className="jenk2"
                  value="pria"
                  onChange={handleChange}
                />
                <label htmlFor="pria" className="label-reg1">
                  Laki - Laki
                </label>
              </div>
              <div className="jenis-k1">
                <input
                  type="radio"
                  id="wanita"
                  name="gender"
                  className="jenk2"
                  value="Perempuan"
                  onChange={handleChange}
                />
                <label htmlFor="wanita" className="label-reg1">
                  Perempuan
                </label>
              </div>
            </div>
          </div>
          <div className="submit-reg1">
            <Button2 set="Daftar" type="submit" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
