import React from "react";
import { ResponsiveTreeMap } from "@nivo/treemap";
import {
	MinistryWiseAllocationDetails,
	data
} from "../../../Static/data/BudgetData";

const _ = require("lodash");

/**
 * Component to render Treemap Chart for Heads and Subheads of a
 * specific ministry.
 * Currently under development
 */
const TreemapChart = props => {
	const ministrySpecificdata = MinistryWiseAllocationDetails.filter(
		item => item["Ministries/Departments"] === props.ministry
	);
	return (
		<ResponsiveTreeMap
			root={data.root}
			identity="name"
			value="loc"
			innerPadding={3}
			outerPadding={5}
			leavesOnly
			margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
			label="loc"
			orientLabel={true}
			labelSkipSize={70}
			colors={[
				// "#a72461"
				// "#dc5353",
				// "#ff935c",
				// "#f9e090",
				"#a5e9db"
				// "#2ca4bf",
				// "#415b90"
			]}
			// nodeComponent={}
			// colors={{ scheme: "nivo" }}
			// borderColor={{ from: "color", modifiers: [["darker", 0.3]] }}
			labelTextColor={{ from: "color", modifiers: [["darker", 1.2]] }}
			// colors={{ scheme: "nivo" }}
			borderColor={{ from: "color", modifiers: [["darker", 0.3]] }}
			animate={true}
			motionStiffness={90}
			motionDamping={11}
			theme={{
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
			}}
			tooltip={node => {
				return (
					<div className="">
						<p className="fs-18">{node.data.name}</p>
						<span className="fs-16">
							Budget: {node.data.value}&nbsp;Cr.
						</span>
					</div>
				);
			}}
		/>
	);
};

export default TreemapChart;
