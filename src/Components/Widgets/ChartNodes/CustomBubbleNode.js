import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Component to render custom Bubble for Bubble Chart
 */
const CustomBubbleNode = ({ node, style, handlers, theme }) => {
	const [isHover, setIsHover] = useState(false);
	return (
		<Link
			to={{
				pathname: `/ministry/${node.data.ministry.replace(/ +/g, "")}`,
				data: node.data
			}}
		>
			<g
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
				transform={`translate(${style.x},${style.y})`}
			>
				<circle
					r={style.r}
					{...handlers}
					fill={style.fill ? style.fill : node.data.changeStatusColor}
					stroke={`${isHover ? "black" : style.borderColor}`}
					strokeWidth={`${isHover ? 3 : style.borderWidth}`}
				/>
				{node.label !== false && (
					<text
						textAnchor="middle"
						dominantBaseline="central"
						style={{
							...theme.labels.text,
							fill: style.labelTextColor,
							pointerEvents: "none"
						}}
					>
						{node.label}
					</text>
				)}
			</g>
		</Link>
	);
};

export default CustomBubbleNode;
