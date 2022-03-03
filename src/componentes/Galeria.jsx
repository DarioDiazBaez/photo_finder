import React, { useState } from "react";
import './Galeria.css';
function Galeria(props){

	return(
		<div className="galeria">
			{props.imagenes.map(imagen=>(	 
			<a 
				className="galeria-url"
				key={imagen.id}
				href={imagen.largeImageURL}
				target="_blank"
			   ><img 
					className="galeria-url-imagen"
					src={imagen.previewURL}
				/>
			</a>
			))}
		</div>
	)
}

export default Galeria;