import React from "react";

export default function NuevoContacto() {
  return (
    <section>
      <h2>Formulario para nuevo contacto</h2>
      <form>
        <div className="grid">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" placeholder="Nombre" required />
          <label htmlFor="apellido">Apellido</label>
          <input type="text" name="apellido" placeholder="Apellido" required />
        </div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="correo electrónico"
          required
        />
        <button type="submit">Crear nuevo contacto</button>
      </form>
    </section>
  );
}
