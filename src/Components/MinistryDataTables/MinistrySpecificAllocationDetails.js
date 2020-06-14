import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import MinistryDataTable from "../Widgets/Tables/MinistryDataTable";
import { ministryAllocationDetailsTableColumns } from "../../Static/TableColumns/TableColumns";

const { Search } = Input;

/**
 * Component to render Table and table related information for
 * a specific ministry with "Search" & "Sort" functionality
 */
const MinistryWiseAllocationSummaryTable = props => {
	const [searchLoading, setSearchLoading] = useState(false);
	const [tableData, setTabledata] = useState([]);
	const [originalData, setOriginalData] = useState([]);
	const [searchText, setSearchText] = useState("");

	// Function to handle Search functionality
	const handleSearch = value => {
		let searchValue = value.trim().toLowerCase();
		if (!searchValue.length) {
			if (originalData.length) {
				setTabledata(originalData);
			}
			setSearchText("");
			return;
		}

		setSearchLoading(true);
		let searchResults = [];
		let searchData = [];
		originalData.forEach(item => {
			if (
				(item["ministry"].toLowerCase().includes(searchValue) ||
					item["head"].toLowerCase().includes(searchValue) ||
					item["subhead"].toLowerCase().includes(searchValue)) &&
				!searchResults.includes(item["subhead"])
			) {
				searchResults.push(item["subhead"]);
			}
		});
		searchResults.forEach(data => {
			let obj = originalData.find(item => item.subhead === data);
			if (obj) {
				searchData.push(obj);
			}
		});
		setTabledata(searchData);
		setSearchLoading(false);
	};

	// Function to clear search text
	const handleClearSearch = () => {
		setSearchText("");
	};

	// Hook used as componentDidUpdate for props.data
	useEffect(() => {
		setTabledata(props.data);
		setOriginalData(props.data);
	}, [props.data]);

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
				{tableData ? (
					<>
						<p className="table-info-text">
							Expenditure information of{" "}
							{tableData[0] ? tableData[0].ministry : ""}{" "}
							including the Budget Allocations, Development Heads
							and Investment in Public Enterprises are shown in
							the table below.
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
							<Button onClick={handleClearSearch}>
								Clear Search
							</Button>
						</div>
						<MinistryDataTable
							columns={ministryAllocationDetailsTableColumns}
							tableData={tableData}
						/>
					</>
				) : null}
			</div>
		</div>
	);
};

export default MinistryWiseAllocationSummaryTable;
