import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

/**
 * Component to render the Navbar/Header component
 */
const HeaderRenderer = () => {
	return (
		<Header>
			<span className="header-text">Ministries Expenditure </span>
		</Header>
	);
};

export default HeaderRenderer;
