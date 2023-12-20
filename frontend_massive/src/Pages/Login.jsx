import { useState } from "react";
import Footer from "../Component/Footer";
import { Button3, Button4 } from "../Component/Button";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailOrPhone: email,
          password: pass,
        }),
      });

      const data = await response.json();

      if (data.success) {
        console.log("Login successful");
        // Redirect ke halaman profile
        window.location.href = "/profile";
      } else {
        console.log("Login failed");
        // Handle login gagal
        alert("Login failed. Invalid credentials.");
      }
    } catch (error) {
      console.error("Error during login: " + error.message);
      alert("Error during login. Please try again.");
    }
  };

  return (
    <div>
      <div className="login-box">
        <h2>Login Akun</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="text">Email / No. Handphone</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email / No. Handphone"
            id="email"
            name="email"
          />
          <label htmlFor="password">Kata Sandi</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Kata Sandi"
            id="password"
            name="password"
          />
          <Button3 set="Login" type="submit" />
          <Button4 set="Lanjutkan Dengan Google" />
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p>Belum punya akun? Buat Akun</p>
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
};
