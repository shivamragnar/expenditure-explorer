import React from "react";

/**
 * Component to render custom tooltip for Bubble Chart
 */
const CustomBubbleChartTooltip = ({ node }) => {
	return (
		<div className="">
			<p className="fs-18">{node.data.ministry}</p>
			<span className="fs-16">Budget: {node.data.budget}&nbsp;Cr.</span>
			<span className={`fs-16 ml-20`}>
				Increase/Decrease:{" "}
				<span
					className={`fw-bold ${
						node.data.changePercentage > 0
							? "color-success"
							: "color-danger"
					}`}
				>
					{node.data.changePercentage}%
				</span>
			</span>
		</div>
	);
};

export default CustomBubbleChartTooltip;
