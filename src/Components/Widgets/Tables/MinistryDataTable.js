import React from "react";
import { Table } from "antd";

/**
 * Component to render Table component from "antd"
 */
const MinistryDataTable = ({ columns, tableData }) => {
	return (
		<Table
			columns={columns}
			dataSource={tableData}
			className="allocation-summary-table"
			bordered
			rowClassName="row-class"
			pagination={{
				showSizeChanger: false,
				showTotal: (tot, range) => (
					<span>Total Ministeries/Departments : {tot}</span>
				)
			}}
		/>
	);
};

export default MinistryDataTable;
