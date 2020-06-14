import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import MinisteriesBudgetsHome from "./Components/MinisteriesBudgetsHome/MinisteriesBudgetsHome";
import MinistrySpecificPage from "./Components/MinistrySpecificPage/MinistrySpecificPage";

import "./App.css";

const App = () => (
	<BrowserRouter>
		<div className="app">
			<Header />
			<Switch>
				<Route path="/" exact component={MinisteriesBudgetsHome} />
				<Route
					path="/ministry/:ministry"
					exact
					component={MinistrySpecificPage}
				/>
				<Route render={() => <h1>404: page not found</h1>} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default App;
