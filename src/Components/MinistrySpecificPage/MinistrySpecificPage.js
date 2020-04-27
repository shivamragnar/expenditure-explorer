import React, { useEffect, useState } from "react";
import { Redirect, withRouter } from "react-router-dom";

import IntroductionSection from "../IntroductionSection/IntroductionSection";
import TypeWriterText from "../Widgets/TypeWriterText/TypeWriterText";
import MinistrySpecificAllocationDetails from "../MinistryDataTables/MinistrySpecificAllocationDetails";
import TreemapChart from "../Widgets/Charts/TreemapChart";
import Legends from "../Widgets/Legends/Legends";
import {
	MinistryWiseAllocationDetails,
	MinistryWiseAllocationSummary
} from "../../Static/data/BudgetData";
import CONSTANTS from "../../Static/Constants/Constants";

/**
 * Wrapper component to render Specific Ministry page
 */
const MinistrySpecificPage = props => {
	const [introTitle, setIntroTitle] = useState("");
	const [redirect, setRedirect] = useState(false);
	const [tableData, setTabledata] = useState([]);
	const [typeWriterData, setTypeWriterdata] = useState([]);

	const introText = `This section presents the ${introTitle} allocations presented in the Union Budget 2020-21. \
    In this page you can view how the budget is distributed among various Heads and Subheads`;

	const { ministrySpecificLegends, expenditureFacts } = CONSTANTS;

	useEffect(() => {
		const ministryData = props.location.data;
		if (!ministryData) {
			setRedirect(true);
		} else {
			const ministryDataSummary = MinistryWiseAllocationSummary.find(
				data => data["Ministries/Departments"] === ministryData.ministry
			);
			const ministryDataDetails = MinistryWiseAllocationDetails.filter(
				data => data["Ministries/Departments"] === ministryData.ministry
			);
			const updatedData = ministryDataDetails.map((dataItem, index) => {
				return {
					ministry: dataItem["Ministries/Departments"],
					head: dataItem["Head of Expenditure"],
					subhead: dataItem["Detailed Head of Expenditure"],
					budget20182019: dataItem["Actual 2018-2019 Total"],
					budget20192020: dataItem["Budget 2019-2020 Total"],
					revisedBudget20192020: dataItem["Revised 2019-2020 Total"],
					budget20202021: dataItem["Budget 2020-2021 Total"]
				};
			});
			const typeWriterData = [
				`Total Allocated Budget(2020-21) :   ${ministryDataSummary["Budget_Estimates_2020-2021_Total"]} Cr.`,
				`Total Allocated Budget(2019-20) :   ${
					ministryDataSummary["Budget_Estimates_2019-2020_Total"]
						? ministryDataSummary[
								"Budget_Estimates_2019-2020_Total"
						  ]
						: 0
				} Cr.`,
				`Total change in budget(%) : <span class=${
					ministryData.changePercentage > 0
						? "color-success"
						: "color-danger"
				}>&nbsp;${Math.abs(ministryData.changePercentage)}%<span>`
			];
			setIntroTitle(ministryData.ministry);
			// setMinistryDataSummary(ministryDataSummary);
			// setMinistryDataDetails(ministryDataDetails);
			setTabledata(updatedData);
			setTypeWriterdata(typeWriterData);
		}
	}, []);

	return (
		<div className="ministry-specific-page-wrapper">
			{redirect ? <Redirect to="/" /> : null}
			<IntroductionSection
				title={introTitle}
				text={introText}
				fixTypeWriterHeading={false}
				typeWriterData={typeWriterData}
			/>
			<div className="treemap-container">
				<span className="chart-heading-lg">
					Relative Comparison of Budget Allocation among
					Ministries/Departments
				</span>
				<div className="d-flex w-100 h-100">
					<TreemapChart ministry={introTitle} />
				</div>
				<div className="d-flex justify-space-around align-center mt-20">
					<Legends legends={ministrySpecificLegends} />
					<div className="legend-info">
						<p className="legend-info-text">
							# The color represents increase or cut in the budget
							allocation.
						</p>
						<p className="legend-info-text">
							# The size of bubble represents amount of allocation
							relative to othe departments/ministry.
						</p>
					</div>
				</div>
			</div>
			<div className="fun-fact-wrapper">
				<div className="fun-fact-container">
					<TypeWriterText
						fixTypeWriterHeading={false}
						funfact={true}
						typeWriterData={expenditureFacts}
					/>
				</div>
			</div>
			<MinistrySpecificAllocationDetails data={tableData} />
		</div>
	);
};

export default withRouter(MinistrySpecificPage);
