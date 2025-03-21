import React from "react";
import { Link } from "react-router-dom";

import "../styles/graphic-design.css";
const GraphicDesign = () => {
	return (
		<div className="graphic-body">
			<section className="graphic-header-container">
				<h1 className=" graphic-title underline">
					<Link to={"/graphic-design"}>Graphic Designs</Link>
				</h1>
			</section>
			{/* <!-- beginning of graphic design section --> */}
			<section class="graphic-post-container">
				<div class="graphic-image-container">
					<img
						class="graphic-post-img"
						src="https://i.ibb.co/pfGssqz/feras-barbershop-logo.jpg"
						alt=""
						srcset=""
					/>

					<h3 class="graphic-post-title">Feras Barbershop</h3>
				</div>
				<div class="graphic-image-container">
					<img
						class="graphic-post-img"
						src="https://i.ibb.co/V2L48nn/NAMUTEREZA-UPDATED-LOGO.jpg"
						alt=""
						srcset=""
					/>
					<h3 class="graphic-post-title">Namutereza Training</h3>
				</div>
				<div class="graphic-image-container">
					<img
						class="graphic-post-img"
						src="https://i.ibb.co/TqwGmqf/price-group-logo.jpg"
						alt=""
						srcset=""
					/>

					<h3 class="graphic-post-title">Price Group Ottawa</h3>
				</div>

				<div class="graphic-image-container">
					<img
						class="graphic-post-img"
						src="https://i.ibb.co/nLYsG32/willpower-brand-est-logo.jpg"
						alt=""
						srcset=""
					/>
					<h3 class="graphic-post-title">Willpower Brand</h3>
				</div>

				<div class="graphic-image-container">
					<img
						class="graphic-post-img"
						src="https://i.ibb.co/DD8BfqL/willpower-brand-poster.jpg"
						alt=""
						srcset=""
					/>
					<h3 class="graphic-post-title">Willpower Brand & YMCA</h3>
				</div>

				<div class="graphic-image-container">
					<img
						class="graphic-post-img"
						src="https://i.ibb.co/3k2YtBd/Affiche-Pour-le-27-Sept-2019.jpg"
						alt=""
						srcset=""
					/>

					<h3 class="graphic-post-title">Centre d'Excellence Artistique</h3>
				</div>

				<div class="graphic-image-container">
					<img
						class="graphic-post-img"
						src="https://i.ibb.co/TbPyyS5/IMG-5228.jpg"
						alt=""
						srcset=""
					/>

					<h3 class="graphic-post-title">Centre d'Excellence Artistique</h3>
				</div>

				<div class="graphic-image-container">
					<img
						class="graphic-post-img"
						src="https://i.ibb.co/tqJ8c6D/RAISE-THE-ROOF-Final-Design-1-2.png"
						alt=""
						srcset=""
					/>
					<h3 class="graphic-post-title">Rise Kids & Teens Program</h3>
				</div>
				{/* <!-- end of graphic design section --> */}
			</section>
		</div>
	);
};

export default GraphicDesign;
