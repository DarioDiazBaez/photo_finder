import React, { useState } from "react";
export default function Galeria(props){

return(
	<div className="bg-success px-5 py-3 text-center">
	{props.imagenes.map(imagen=>(	 
		<a key={imagen.id} href={imagen.largeImageURL} target="_blank">
			<img className="img-thumbnail mx-2 my-2" src={imagen.previewURL} />
		</a>))}
	</div>)}