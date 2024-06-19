import React from "react";


//create your first component
export const Card = () => {
	return (
		<div className="text-center">
			<div className="card" style={{ width: '18rem' }}>
				<img src="https://media.istockphoto.com/id/890153720/es/foto/gr%C3%A1fico-de-datos-de-finanzas-y-mercado-de-valores.webp?b=1&s=170667a&w=0&k=20&c=u76UGU3hr1lV9_4emCbjfDhYuSX4pvU366sFw0KnNu8=" className="card-img-top" alt="..."></img>

				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		</div>
 



		
	);
};