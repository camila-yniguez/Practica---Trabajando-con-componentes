import React from "react";
import PropTypes from "prop-types";
import { RowAndColumns } from "../RowAndColumns";


const dataMovie = [
    {
    id: 1 ,
    titulo: "Billy Elliot",
    calificacion: 5,
    premios: 2,
    duracion: "132 minutos"
    },
    {
        id: 2 ,
        titulo: "Alicia en el país de las maravillas",
        calificacion: 4.8,
        premios: 3,
        duracion: "142 minutos"
    }
]


export const Tablet = () =>{
    return(
        <>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Titulo</th>
                                            <th>Calificación</th>
                                            <th>Premios</th>
                                            <th>Duración</th>
										</tr>
									</thead>
                                    {dataMovie.map((row,index)=>{
                                        return <RowAndColumns {...row} key={index}/>
                                    })}
                                    
								</table>
							</div>
						</div>
					</div>            

        <h2>LLegamos al final, ¡espero que les haya gustado el recorrido!</h2>


        </>
    )
}
Tablet.propTypes = {
    title: PropTypes.string.isRequired,
    icono: PropTypes.string.isRequired,
    cifra: PropTypes.number.isRequired,
}
Tablet.defaultProps ={
    color: "border-left-primary",
}
