import React, { useState } from "react";


export default function Buscador(props){
const [nombre, setNombre] = useState("");
const handleSubmit = (e) => {
    e.preventDefault();
	props.busqueda(nombre)};

return(
<div className="input-group bg-secondary d-flex justify-content-center">
	<form className="d-flex justify-content-center my-3" onSubmit={handleSubmit}>
 		<input type="text" value={nombre} className="form-control mx-1"
 		placeholder="Busca una imagen" id="nombre" name="nombre" autoComplete="off"
		onChange={(e) => setNombre(e.target.value)} />
 		<input className="input-group-text mx-1" type="submit" value="Buscar" />
 	</form>
</div>)}