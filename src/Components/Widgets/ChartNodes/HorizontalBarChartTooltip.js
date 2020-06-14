import React from "react";

/**
 * Component to render custom tooltip for Horizontal Bar Charts
 */
const HorizontalBarChartTooltip = ({ data }) => {
	return (
		<div className="">
			<p className="fs-16">{data.ministry}</p>
			<span className="">Budget: {data.budget}&nbsp;Cr.</span>
			{data.share ? (
				<span className={` ml-20`}>Share: {data.share}%</span>
			) : data.increasePercentage ? (
				<span className={` ml-20`}>
					Increase: {data.increasePercentage}%
				</span>
			) : null}
		</div>
	);
};

export default HorizontalBarChartTooltip;
