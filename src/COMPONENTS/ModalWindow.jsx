import React from "react";
import "../Styles/CSS/index.css";

const Modal = ({ country, closeModal }) => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          Back
        </span>
        <img
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
          width="200"
        />
        <h2>{country.name.common}</h2>
        <h3>
          <strong>Native Name: </strong>
          {country.name.official}
        </h3>
        <h3>
          <strong>Capital: </strong>
          {country.capital}
        </h3>
        <h3>
          <strong>Population: </strong>
          {country.population.toLocaleString()}
        </h3>
        <h3>
          <strong>Region: </strong>
          {country.region}
        </h3>
        <h3>
          <strong>Currency: </strong>
          {Object.values(country.currencies)
            .map((currency) => currency.name)
            .join(", ")}
        </h3>
      </div>
    </div>
  );
};

export default Modal;
