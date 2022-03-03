import React, { useState } from "react";
import './Buscador.css';

function Buscador(props){
const [nombre, setNombre] = useState("");
const handleSubmit = (e) => {
    e.preventDefault();
	props.busqueda(nombre)};

	return(
		<div className="buscador">
			<form 
				className="buscador-formulario"
				onSubmit={handleSubmit}>
				<input
					 className= "buscador-formulario-busqueda"
					 type="text"
					 placeholder="Busca una imagen"
          			 id="nombre"
          			 name="nombre"
          			 autoComplete="off"
          			 value={nombre}
         			 onChange={(e) => setNombre(e.target.value)}
					/>
				<input
					 className="buscador-formulario-boton"
					 type="submit"
					 value="Buscar"
					/>
			</form>
		</div>
	)
}

export default Buscador;