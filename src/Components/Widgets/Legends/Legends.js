import React from "react";

/**
 * Component to render Legends for charts
 */
const Legends = props => {
	return (
		<div className="d-flex flex-column align-start">
			{props.legends.map(legend => (
				<div className="d-flex align-center legend-item">
					<span
						className={`legend-icon legend-bg-${legend.color}`}
					></span>
					<span className="legend-text ml-20">
						{legend.text}
						{}
					</span>
				</div>
			))}
		</div>
	);
};

export default Legends;
