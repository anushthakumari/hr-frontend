import React from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";

import { getQuizes } from "../apis/quizes.apis";

const Home = () => {
	const { data, isLoading, error } = useSWR("/quiz", getQuizes);

	if (isLoading) {
		return <h1>Loading....</h1>;
	}

	console.log(data);

	return (
		<section
			style={{ minHeight: "100vh", width: "100%" }}
			className="p-5 container-fluid d-flex flex-column  align-items-center text-white bg-dark min">
			<div className="mb-5">
				<h1 className="text-center">Hello John!!</h1>
				<h5 className="text-center">You can attempt below test</h5>
			</div>

			<div className="d-flex justify-content-center align-items-center">
				<div className="row">
					{data.map((v) => {
						return <Card key={v.id} id={v.id} title={v.title} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Home;

const Card = ({ title, id }) => {
	return (
		<div className="col-6">
			<div className="card m-2">
				<div className="card-body">
					<h5 className="card-title text-black">Test #{id}</h5>
					<p className="card-text text-black">{title}</p>
					<Link to={`/quiz/${id}`} className="card-link">
						Take Test
					</Link>
				</div>
			</div>
		</div>
	);
};
