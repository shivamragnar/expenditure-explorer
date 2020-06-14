import { MinistryWiseAllocationSummary } from "../Static/data/BudgetData";

// Function to return color based on the passed argument(change in percentage here)
// Currently used to color bubbles of a Bubble chart
// Remember to keep the colors here in sync with legends
export const getColor = changePercentage => {
	if (changePercentage < -25) {
		return "#a72461";
	} else if (changePercentage >= -25 && changePercentage < 0) {
		return "#dc5353";
	} else if (changePercentage >= 0 && changePercentage < 5) {
		return "#ff935c";
	} else if (changePercentage >= 5 && changePercentage < 25) {
		return "#f9e090";
	} else if (changePercentage >= 25 && changePercentage < 75) {
		return "#a5e9db";
	} else if (changePercentage >= 75) {
		return "#415b90";
	}
};

// Function to return formatted data for rendering Bubble chart
export const formatBubbleChartData = () => {
	const formattedData = MinistryWiseAllocationSummary.map((data, index) => {
		const changeInBudget =
			data["Budget_Estimates_2020-2021_Total"] -
			data["Budget_Estimates_2019-2020_Total"];
		let changePercentage = 0;
		if (!isNaN(data["Budget_Estimates_2019-2020_Total"])) {
			changePercentage = (
				(changeInBudget * 100) /
				data["Budget_Estimates_2019-2020_Total"]
			).toFixed(2);
		}
		const changeStatusColor = getColor(changePercentage);
		return {
			ministry: data["Ministries/Departments"],
			budget: data["Budget_Estimates_2020-2021_Total"],
			changePercentage: changePercentage,
			changeStatusColor: changeStatusColor
		};
	});

	return formattedData;
};

// Function to return formatted data for Ministeries/Departments Homepage
export const formattedMinistrySummaryTableData = () => {
	const formattedData = MinistryWiseAllocationSummary.map((data, index) => {
		const changeInBudget =
			data["Budget_Estimates_2020-2021_Total"] -
			data["Budget_Estimates_2019-2020_Total"];
		const changeStatusColor = changeInBudget < 0 ? "danger" : "success";
		let changePercentage = 0;
		if (!isNaN(data["Budget_Estimates_2019-2020_Total"])) {
			changePercentage = (
				(changeInBudget * 100) /
				data["Budget_Estimates_2019-2020_Total"]
			).toFixed(2);
		}
		return {
			ministry: data["Ministries/Departments"],
			budget: data["Budget_Estimates_2020-2021_Total"],
			changePercentage: changePercentage,
			changeStatusColor: changeStatusColor
			// link: data["Ministries/Departments"]
		};
	});
	return formattedData;
};
