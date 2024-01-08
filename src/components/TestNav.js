import React from "react";
import { Link, useParams } from "react-router-dom";

const TestNav = () => {
	const { id: quizId } = useParams();

	return (
		<nav className="container navbar navbar-expand-lg navbar-light bg-light">
			<Link className="navbar-brand" to="#">
				Attempting Test #{quizId}
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarText"
				aria-controls="navbarText"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarText">
				{/* <ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Features
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Pricing
						</a>
					</li>
				</ul> */}
			</div>
			<button className="btn btn-danger my-2 my-sm-0" type="submit">
				End Test
			</button>
		</nav>
	);
};

export default TestNav;
