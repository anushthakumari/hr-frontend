import React from "react";
import Start from "../components/Start";
import Quiz from "../components/Quiz";
import Result from "../components/Result";
import { DataProvider, DataContext } from "../context/dataContext";

function App() {
	return (
		<DataProvider>
			<DataContext.Consumer>
				{({ showQuiz, isLoading }) => {
					if (isLoading) {
						return <h1>Loading...</h1>;
					}

					return (
						<>
							<Start />

							{showQuiz && <Quiz />}

							<Result />
						</>
					);
				}}
			</DataContext.Consumer>
		</DataProvider>
	);
}

export default App;
