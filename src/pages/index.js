import React from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";

import { getQuizes } from "../apis/quizes.apis";

const Index = () => {
	const { data, isLoading, error } = useSWR("/quiz", getQuizes);

	if (isLoading) {
		return <h1>Loading....</h1>;
	}

	return (
		<div className="">
			<ul>
				{data.map((v) => {
					return (
						<li key={v.id}>
							<Link to={`/quiz/${v.id}`}>{v.title}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Index;
