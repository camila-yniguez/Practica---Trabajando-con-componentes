import React from 'react';
import { GenresInDb } from "../ContentRowTop/GenresInDb";
import { LastMovieInDb } from '../ContentRowTop/LastMovieInDb';
import { ContentRowMovies } from '../ContentRowTop/ContentRowMovies';
import { Tablet } from '../Tablet';


export const  ContentRowTop = () =>{
	
    return(
        <>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
					<ContentRowMovies />
					<LastMovieInDb />
					<GenresInDb />
					<Tablet />
				</div>

				{/*<!--End Content Row Top-->*/}

    </>
    )
}
