import React, { useContext, useState } from "react";
import { CountriesContext } from "./CountriesContext";
import Modal from "./ModalWindow";
import "../Styles/CSS/index.css";

const Countries = () => {
  const countries = useContext(CountriesContext);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const openModal = (country) => {
    setSelectedCountry(country);
  };

  const closeModal = () => {
    setSelectedCountry(null);
  };

  return (
    <div className="container">
      {countries.length > 0 ? (
        countries.map((country, index) => (
          <div key={index} className="card" onClick={() => openModal(country)}>
            <img
              src={country.flags.svg}
              alt={`${country.name.common} flag`}
              width="100"
            />
            <h2>{country.name.common}</h2>
          </div>
        ))
      ) : (
        <div className="loader"></div>
      )}
      {selectedCountry && (
        <Modal country={selectedCountry} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Countries;
