import React from "react";
import ResponsiveBubbleChart from "../Widgets/Charts/BubbleChart";
import Legends from "../../Components/Widgets/Legends/Legends";
import { formatBubbleChartData } from "../../Utils/Utils";
import CONSTANTS from "../../Static/Constants/Constants";

const data = {
	name: "Ministry Data",
	color: "#fafafa",
	children: formatBubbleChartData()
		.sort((a, b) => a.changePercentage - b.changePercentage)
		.reverse()
};

/**
 * Wrapper component to render Bubble Chart, legends and chart related information
 */
const MinistriesComparison = () => {
	const {
		legendsHome,
		bubbleChartColors,
		bubbleChartInfo,
		bubbleChartDisclaimerText
	} = CONSTANTS;
	return (
		<div id="" className="treemap-container">
			<div className="d-flex w-70 h-100 bubble-chart-container">
				<ResponsiveBubbleChart
					colorPallete={bubbleChartColors}
					data={data}
				/>
			</div>
			<div className="d-flex justify-space-around align-center">
				<Legends legends={legendsHome} />
				<div className="legend-info">
					{bubbleChartInfo.map(info => (
						<p className="legend-info-text">{info}</p>
					))}
				</div>
			</div>
			<p className="sub-text mt-20">{bubbleChartDisclaimerText}</p>
		</div>
	);
};

export default MinistriesComparison;
