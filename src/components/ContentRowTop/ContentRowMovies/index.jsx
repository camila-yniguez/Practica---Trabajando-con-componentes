import React from "react";
import { Card } from "../../Card";

let movies = {
    color: "primary",
    titulo: "Movies in Data Base",
    cifra: 21,
    icono: "fas fa-film",
}
let premios = {
    color:   "success",
    titulo: "Total awards",
    cifra: 79,
    icono: "fas fa-award",
}
let actors = {
    color: "warning",
    titulo: "Actors quantity",
    cifra: 49,
    icono: "fas fa-user",
}

 const cardsProps = [movies,premios,actors] 

   export const ContentRowMovies = () =>{
	
    return(
        <div className="row"> 
		{
			cardsProps.map((card, i) =>{
				return <Card {...card} key={i} />
			})
		}
		{/* <Card titulo={"Movies in Data Base"} color={"primary"} cifra={21} icono={"fa-film"} />
		<Card titulo={"total awards"} color={"success"} cifra={79} icono={"fa-award"} />
		<Card titulo={"actors quantity"} color={"warning"} cifra={49} icono={"fa-users"} />
		 */}
   {/*<!-- Content Row Movies-->*/}

						{/*<!-- Total awards -->*/}
					{/* 	 <div className="col-md-4 mb-4">
							<div className="card border-left-success shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-success text-uppercase mb-1">{}</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">79</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-award fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div> */}
                   
						{/*<!-- Actors quantity -->*/}
						{/*  <div className="col-md-4 mb-4">
							<div className="card border-left-warning shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Actors quantity
											</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">49</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-user fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div> */}
		</div>
    )

}
