import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import MinistryDataTable from "../Widgets/Tables/MinistryDataTable";
import { MinistryWiseAllocationDetails } from "../../Static/data/BudgetData";
import { formattedMinistrySummaryTableData } from "../../Utils/Utils";
import { ministryAllocationSummaryTableColumns } from "../../Static/TableColumns/TableColumns";

const updatedData = formattedMinistrySummaryTableData();

const { Search } = Input;

/**
 * Component to render Table and table related information for
 * Ministeries/Departments with "Search" & "Sort" functionality
 */
const MinistryWiseAllocationSummaryTable = () => {
	const [searchLoading, setSearchLoading] = useState(false);
	const [tableData, setTabledata] = useState(updatedData);
	const [searchText, setSearchText] = useState("");

	// Function to handle Search functionality
	const handleSearch = value => {
		let searchValue = value.trim().toLowerCase();
		if (!searchValue.length) {
			setTabledata(updatedData);
			setSearchText("");
			return;
		}
		setSearchLoading(true);
		let searchResults = [];
		let searchData = [];
		MinistryWiseAllocationDetails.forEach(data => {
			if (
				(data["Ministries/Departments"]
					.toLowerCase()
					.includes(searchValue) ||
					data["Head of Expenditure"]
						.toLowerCase()
						.includes(searchValue) ||
					data["Detailed Head of Expenditure"]
						.toLowerCase()
						.includes(searchValue)) &&
				!searchResults.includes(data["Ministries/Departments"])
			) {
				searchResults.push(data["Ministries/Departments"]);
			}
		});
		searchResults.forEach(data => {
			let obj = updatedData.find(item => item.ministry === data);
			if (obj) {
				searchData.push(obj);
			}
		});
		setTabledata(searchData);
		setSearchLoading(false);
	};

	// Function to clear search results
	const handleClearSearch = () => {
		setTabledata(updatedData);
		setSearchText("");
	};

	// Hook used as componentDidUpdate for searchText
	// Working like search when user types
	useEffect(() => {
		const timer = setTimeout(() => {
			handleSearch(searchText);
		}, 300);

		return () => clearTimeout(timer);
	}, [searchText]);

	return (
		<div className="allocation-table-section">
			<div className="table-container">
				<p className="table-info-text">
					Allocations pertaining to different ministeries with their
					change in budget allocation compared to previous year are
					provided in the below table.The table below is provided with
					a search bar and filters on total allocations earmarked for
					each department in the Union Budget of 2020-21.
				</p>
				<div className="table-actions">
					<Search
						placeholder="Enter Search Text "
						loading={searchLoading}
						onSearch={handleSearch}
						className="search-field"
						value={searchText}
						onChange={e => setSearchText(e.target.value)}
					/>
					<Button onClick={handleClearSearch}>Clear Search</Button>
				</div>
				<MinistryDataTable
					columns={ministryAllocationSummaryTableColumns}
					tableData={tableData}
				/>
			</div>
		</div>
	);
};

export default MinistryWiseAllocationSummaryTable;
