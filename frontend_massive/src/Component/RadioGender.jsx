import React, { useState } from "react";
import "../App.css";

const RadioGender = () => {
  const [selectedOption, setSelectedOption] = useState(""); // State untuk menyimpan pilihan radio

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value); // Mengubah state saat opsi radio dipilih
  };

  return (
    <div className="radioGenderContainer">
      <label className="radioGenderContent">
        <input
          type="radio"
          value="Laki-laki"
          checked={selectedOption === "Laki-laki"}
          onChange={handleOptionChange}
        />
        Laki-laki
      </label>
      <label>
        <input
          type="radio"
          value="Perempuan"
          checked={selectedOption === "Perempuan"}
          onChange={handleOptionChange}
        />
        Perempuan
      </label>
    </div>
  );
};

export default RadioGender;
