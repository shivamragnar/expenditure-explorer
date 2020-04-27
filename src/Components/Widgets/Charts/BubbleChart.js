import React from "react";
import { ResponsiveBubble } from "@nivo/circle-packing";
import CustomBubbleNode from "../../Widgets/ChartNodes/CustomBubbleNode";
import CustomBubbleChartTooltip from "../../Widgets/ChartNodes/CustomBubbleChartTooltip";

const theme = {
	tooltip: {
		container: {
			background: "rgba(0, 0, 0, 1)",
			color: "#fff",
			fontSize: "14px",
			borderRadius: "4px",
			boxShadow: "none",
			padding: "10px 14px",
			width: "420px"
		}
	}
};

/**
 * Component to render Bubble Chart
 */
const ResponsiveBubbleChart = props => (
	<ResponsiveBubble
		root={props.data}
		animate={true}
		margin={{ top: 0, right: 20, bottom: 0, left: 20 }}
		identity="ministry"
		value="budget"
		colors={props.colorPallete}
		colorBy="ministry"
		leavesOnly={true}
		enableLabel={false}
		padding={8}
		nodeComponent={CustomBubbleNode}
		isZoomable={false}
		theme={theme}
		tooltip={CustomBubbleChartTooltip}
	/>
);

export default ResponsiveBubbleChart;
