import React from "react";
import { Row, Col } from "antd";
import IntroductionSection from "../IntroductionSection/IntroductionSection";
import MinistryWiseAllocationSummary from "../MinistryDataTables/MinistryWiseAllocationSummary";
import MinisteriesComparison from "../MinisteriesComparison/MinisteriesComparison";
import BudgetFactsBarChartWrapper from "../BudgetFactsBarChartWrapper/BudgetFactsBarChartWrapper";
import CONSTANTS from "../../Static/Constants/Constants";
import "../styles.css";

/**
 * Wrapper component to render HomePage of the Ministeries/Departments
 */
const MinisterisBudgetsHome = () => {
	const {
		introTitle,
		introTextHome,
		typeWriterDataHome,
		maxShareBarChartTitle,
		maxIncreaseInBudgetBarChartTitle,
		maxIncreaseInBudgetBarChartData,
		maxShareBarChartData,
		maxShareBarChartLegend,
		maxIncreaseInBudgetBarChartLegend,
		maxShareBarChartKeys,
		maxIncreaseInBudgetBarChartKeys
	} = CONSTANTS;
	return (
		<div>
			<IntroductionSection
				title={introTitle}
				text={introTextHome}
				fixTypeWriterHeading={true}
				typeWriterData={typeWriterDataHome}
			/>
			<div className="comparison-section">
				<span className="chart-heading-lg">
					Relative Comparison of Budget Allocation among
					Ministries/Departments
				</span>
				<div className="d-flex justify-space-around w-95">
					<Row>
						<Col sm={24} md={16}>
							<MinisteriesComparison />
						</Col>
						<Col sm={24} md={8}>
							<div className="d-flex flex-column budget-facts-container h-100">
								<BudgetFactsBarChartWrapper
									title={maxShareBarChartTitle}
									data={maxShareBarChartData}
									legend={maxShareBarChartLegend}
									keys={maxShareBarChartKeys}
									type="share"
								/>
								<BudgetFactsBarChartWrapper
									title={maxIncreaseInBudgetBarChartTitle}
									data={maxIncreaseInBudgetBarChartData}
									legend={maxIncreaseInBudgetBarChartLegend}
									keys={maxIncreaseInBudgetBarChartKeys}
									type="IncreaseInBudget"
								/>
							</div>
						</Col>
					</Row>
				</div>
			</div>
			<MinistryWiseAllocationSummary />
		</div>
	);
};

export default MinisterisBudgetsHome;
