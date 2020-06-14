const CONSTANTS = {
	// ***********Ministry Home******************
	// Intro section
	introTitle: "Expenditure Budget of Ministries & Departments",

	introTextHome: `This section presents the ministry-wise allocations presented in the Union Budget 2020-21. In this year's 
        budget there are 100 Demands in total.`,

	typeWriterDataHome: [" ₹ 3042230.09 Cr.", " 9.18% (Of Total Union Budget)"],

	// Bubble Chart/Comparison Section
	bubbleChartColors: [
		"#a72461",
		"#dc5353",
		"#ff935c",
		"#f9e090",
		"#a5e9db",
		"#2ca4bf",
		"#415b90"
	],

	legendsHome: [
		{ color: "a72461", text: "less than -25%" },
		{ color: "dc5353", text: "less than 0%" },
		{ color: "ff935c", text: "less than 5%" },
		{ color: "f9e090", text: "less than 25%" },
		{ color: "a5e9db", text: "less than 75%" },
		{ color: "415b90", text: "greater than 75%" }
	],

	bubbleChartInfo: [
		"# The color represents increase or cut in the budget allocation.",
		"# The size of bubble represents amount of allocation relative to othe departments/ministry."
	],

	bubbleChartDisclaimerText: `Note: Percentage changes have been calculated with respect to
								2019-20 Budget Estimate Figures. The figures for total Union
								Budget Expenditure, for 2019-20 RE and 2020-19 BE, include Funds
								collected from GST Compensation Cess, which are transferred to a
								non-lapsable fund in the Public Account.`,

	// Max Share Bar Chart
	maxShareBarChartData: [
		{
			ministry: "Interest Payments",
			share: 23.28,
			budget: 708203.16
		},
		{
			ministry: "Defence Services (Revenue)",
			share: 6.88,
			budget: 209319
		},
		{
			ministry: "Transfers to States",
			share: 6.59,
			budget: 200447.45
		},
		{
			ministry: "Department of Revenue",
			share: 4.49,
			budget: 136640.33
		}
	],

	maxShareBarChartTitle: "Ministries with maximum increase in the budget",

	maxShareBarChartLegend: "Budget Share(%)",

	maxShareBarChartKeys: ["share"],

	// Max Increase in Share Bar Chart
	maxIncreaseInBudgetBarChartData: [
		{
			ministry: "Department of Economic Affairs",
			increasePercentage: 104.79,
			budget: 29308.27
		},
		{
			ministry: "Department of Financial Services",
			increasePercentage: 137.2,
			budget: 11125
		},
		{
			ministry: "Department of Telecommunications",
			increasePercentage: 143,
			budget: 66431.69
		},
		{
			ministry: "Ministry of Parliamentary Affairs",
			increasePercentage: 160.68,
			budget: 50.52
		}
	],

	maxIncreaseInBudgetBarChartTitle:
		"Ministries with maximum increase in the budget",

	maxIncreaseInBudgetBarChartLegend: "Increase in Budget(%)",

	maxIncreaseInBudgetBarChartKeys: ["increasePercentage"],

	// ******************** Ministry Specific **********************
	ministrySpecificLegends: [
		{ color: "ff935c", text: "Budget share less than 5%" },
		{ color: "f9e090", text: "Budget share less than 25%" },
		{ color: "a5e9db", text: "Budget share less than 75%" },
		{ color: "415b90", text: "Budget share greater than 75%" }
	],

	expenditureFacts: [
		"Ministry responsible for development and maintenance of National Highways",
		"The Ministry has allocated ₹ 379 crore towards road transport and safety."
	]
};

export default CONSTANTS;
