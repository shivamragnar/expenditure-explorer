import React from "react";
import BarChart from "../Widgets/Charts/BarChart";

/**
 * Wrapper component to render chart for Increase in Budget Share.
 */
const BudgetFactsBarChartWrapper = ({ title, data, legend, keys, type }) => {
	const axisBottom = {
		tickSize: 5,
		tickPadding: 5,
		tickRotation: 0,
		legend: legend,
		legendOffset: 36
	};
	return (
		<div className="max-share-container">
			<span className="card-heading">{title}</span>
			<div className="h-100 w-100">
				<BarChart
					data={data}
					axisBottom={axisBottom}
					keys={keys}
					type={type}
				/>
			</div>
		</div>
	);
};

export default BudgetFactsBarChartWrapper;
