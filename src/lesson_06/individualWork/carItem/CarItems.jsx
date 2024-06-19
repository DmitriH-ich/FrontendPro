import React from "react";
import { v4 } from "uuid";
import "./carItems.css";

export default function CarItem({ carModi, onDelete }) {
  return (
    <div className="carItems" key={carModi.id}>
      <h2>{carModi.brand}</h2>
      <h3>{carModi.model}</h3>
      <h3>{carModi.year}</h3>
      <img src={carModi.image} alt="Foto" />
      <ul key={v4()}>
        {carModi.specifications.map((techData) => (
          <li>{techData}</li>
        ))}
      </ul>
      <button onClick={() => onDelete(carModi.id)}>Delete</button>
    </div>
  );
}
