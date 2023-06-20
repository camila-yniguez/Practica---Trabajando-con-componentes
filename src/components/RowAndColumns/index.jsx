import React from "react";
import PropTypes  from "prop-types";


export const RowAndColumns = ({id, titulo, calificacion, premios, duracion}) =>{
    return(
        <>
              <tbody>
				<tr>
					<td>{id}</td>
					<td>{titulo}</td>
					<td>{calificacion}</td>
                    <td>{premios}</td>
					<td>{duracion}</td>
				</tr>
				{/* <tr>
				    <td>02</td>
				    <td>La caida del halcon negro</td>
				    <td>10</td>
				    <td>18</td>
				    <td>240</td>
				</tr> */}
			</tbody>

        </>
    )
}
RowAndColumns.propTypes = {
	id: PropTypes.number,
	titulo: PropTypes.string,
	calificacion: PropTypes.number,
	premios: PropTypes.number,
	duracion: PropTypes.number
}
