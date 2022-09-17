import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetallesContacto() {
  const [usuario, setUsuario] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsuario(data);
      });
  }, []);

  return (
    <section>
      <h5>
        Contacto buscado: <span>{id}</span>
      </h5>
      <p>Nombre: {usuario.name} </p>
    </section>
  );
}
