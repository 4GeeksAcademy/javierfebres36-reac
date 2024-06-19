import React from "react";
import { NavBar } from "./navbar";
import { Tagline } from "./tagline";
import { Card } from "./card";
import { Foother } from "./foother";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		<div className="text-center">

			<NavBar />
			<div class="container mb-3">
				<Tagline />
				<div class="d-flex justify-content-around col-12">
					<div class="row">
                  <div class="col-xs-12 col-md-3 mb-3">
					<Card />
					</div>
					  <div class="col-xs-12 col-md-3 mb-3">
					<Card />
					</div>  <div class="col-xs-12 col-md-3 mb-3">
					<Card />
					</div>  <div class="col-xs-12 col-md-3 mb-3">
					<Card />
					</div>
					
					</div>
				</div>
			</div>
			<Foother />
		</div>

	);
};

export default Home;
