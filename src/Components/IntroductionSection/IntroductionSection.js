import React from "react";
import TypeWriterText from "../Widgets/TypeWriterText/TypeWriterText";

/**
 * Component to render the top Introduction section of a page. It is
 * common to both Ministeries home page and Ministry specific page.
 */
const IntroductionSection = props => {
	const { title, text, fixTypeWriterHeading, typeWriterData } = props;
	return (
		<div className="bg-black">
			<div className="wrapper-1">
				<div className="left-section">
					<span className="heading-1 heading-lg">{title}</span>
					<span className="text-1">{text}</span>
				</div>
				<div className="right-section">
					<img
						src={require("./india_map.jpg")}
						className="top-section-art"
						alt="india map"
					/>
				</div>
			</div>
			<TypeWriterText
				fixTypeWriterHeading={fixTypeWriterHeading}
				typeWriterData={typeWriterData}
			/>
		</div>
	);
};

export default IntroductionSection;
