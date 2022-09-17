import React from "react";
import { useState, useEffect } from "react";

import TarjetaContacto from "./TarjetaContacto";

export default function ListadoContactos({ titulo }) {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // manejamos el renderizado👇
    console.log("se pintó el componente");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respuesta) => respuesta.json())
      .then((dataJson) => {
        console.log(dataJson);
        setUsuarios(dataJson);
      })
      .catch((err) => console.log(err));

    // manejamos el desmontaje/ clean👇
    return () => {
      console.log("se desmontó el componente");
    };

    // vinculo las dependecias para el update👇
  }, []);

  return (
    <section>
      <h2>{titulo}</h2>
      {usuarios.map((user) => (
        <TarjetaContacto
          key={user.id}
          nombre={user.name}
          email={user.email}
          id={user.id}
        />
      ))}
    </section>
  );
}
