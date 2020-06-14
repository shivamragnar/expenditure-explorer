import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import HorizontalBarChartTooltip from "../ChartNodes/HorizontalBarChartTooltip";

const theme = {
	labels: {
		text: {
			fontSize: "12px"
		}
	},
	axis: {
		legend: {
			text: {
				fontWeight: "bold",
				fontSize: "12px"
			}
		}
	},
	tooltip: {
		container: {
			background: "rgba(0, 0, 0, 0.8)",
			color: "#fff",
			fontSize: "14px",
			borderRadius: "4px",
			boxShadow: "none",
			padding: "10px 14px",
			width: "300px"
		}
	}
};

/**
 * Component to render Bar chart for Max Increase in budget allocated
 */
const IncreaseInBudgetBarChart = ({ data, axisBottom, keys, type }) => (
	<ResponsiveBar
		data={data}
		keys={keys}
		layout="horizontal"
		indexBy="ministry"
		margin={{ top: 20, right: 30, bottom: 50, left: 10 }}
		padding={0.1}
		colors={"#415b90"}
		borderRadius={4}
		borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
		axisTop={null}
		axisRight={null}
		axisBottom={axisBottom}
		axisLeft={null}
		labelSkipWidth={12}
		labelSkipHeight={12}
		label={d => `${type === "share" ? d.data.share : d.data.ministry}`}
		labelTextColor={"#f2f2f2"}
		theme={theme}
		tooltip={HorizontalBarChartTooltip}
		animate={true}
		motionStiffness={90}
		motionDamping={15}
	/>
);

export default IncreaseInBudgetBarChart;
