import React from "react";
import { Link } from "react-router-dom";

export default function TarjetaContacto({ nombre, email, id }) {
  return (
    <article className="tarjeta">
      <div className="imagen">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          alt="foto de perfil"
        />
      </div>
      <div className="headings">
        <h4>{nombre}</h4>
        <p>{email}</p>
      </div>
      <div>
        <Link to={`/contacto/${id}`}>Ver detalles</Link>
      </div>
    </article>
  );
}
