import React from "react";
import { Link } from "react-router-dom";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

// Constant representing columns for Ministeries/Departments Homepage Table
export const ministryAllocationSummaryTableColumns = [
	{
		title: "Ministeries/Departments",
		dataIndex: "ministry",
		key: "ministry",
		render: (text, record) => {
			return (
				<Link
					to={{
						pathname: `/ministry/${text.replace(/ +/g, "")}`,
						data: record
					}}
					className="fw-bold color-primary"
				>
					{text}
				</Link>
			);
		}
	},
	{
		title: "Budget Allocated(Cr.)",
		dataIndex: "budget",
		key: "budget",
		className: "fs-bold",
		sorter: {
			compare: (a, b) => a.budget - b.budget
		}
	},
	{
		title: "Change in Budget(%)",
		dataIndex: "changePercentage",
		key: "changePercentage",
		className: "d-flex align-center justify-center",
		render: text => {
			const isPositive = text > 0;
			return {
				props: {
					className: isPositive ? "bg-success" : "bg-danger"
				},
				children: (
					<>
						<span className={`percent-text fw-bold `}>
							{Math.abs(text)}%
							<span className={`ml-10`}>
								{isPositive ? <UpOutlined /> : <DownOutlined />}
							</span>
						</span>
					</>
				)
			};
		},
		sorter: {
			compare: (a, b) => {
				return (
					parseInt(a.changePercentage) - parseInt(b.changePercentage)
				);
			}
		}
	}
	// {
	// 	title: "Link",
	// 	dataIndex: "link",
	// 	key: "link",
	// 	render: text => <a>{text}</a>
	// }
];

// Constant representing columns for Ministry specific page Table
export const ministryAllocationDetailsTableColumns = [
	{
		title: "Head of Expenditure",
		dataIndex: "head",
		key: "head"
	},
	{
		title: "Detailed Head of Expenditure",
		dataIndex: "subhead",
		key: "subhead"
	},
	{
		title: "Actual 2018-2019 Total",
		dataIndex: "budget20182019",
		key: "budget20182019",
		sorter: {
			compare: (a, b) => a.budget20182019 - b.budget20182019
		}
	},
	{
		title: "Budget 2019-2020 Total",
		dataIndex: "budget20192020",
		key: "budget20192020",
		sorter: {
			compare: (a, b) => a.budget20192020 - b.budget20192020
		}
	},
	{
		title: "Revised 2019-2020 Total",
		dataIndex: "revisedBudget20192020",
		key: "revisedBudget20192020",
		sorter: {
			compare: (a, b) => a.revisedBudget20192020 - b.revisedBudget20192020
		}
	},
	{
		title: "Budget 2020-2021 Total",
		dataIndex: "budget20202021",
		key: "budget20202021",
		sorter: {
			compare: (a, b) => a.budget20202021 - b.budget20202021
		}
	}
];
