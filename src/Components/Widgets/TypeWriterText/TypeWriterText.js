import React from "react";
import Typist from "react-typist";
import Typewriter from "typewriter-effect";
import { BulbTwoTone } from "@ant-design/icons";

/**
 * Component to render TypeWriter Text
 */
const TypeWriterText = props => {
	const { fixTypeWriterHeading, funfact, typeWriterData } = props;
	return (
		<div className="wrapper-2 d-flex align-center">
			{fixTypeWriterHeading ? (
				<span className="heading-1 heading-lg ml-10vw">
					Total Expenditure Budget :
				</span>
			) : null}
			{funfact ? <BulbTwoTone className="heading-md" /> : ""}
			<Typewriter
				options={{
					strings: typeWriterData,
					autoStart: true,
					loop: true,
					cursorClassName: `d-none`,
					wrapperClassName: `heading-1 heading-lg ${
						funfact ? "color-black heading-md" : ""
					} ${fixTypeWriterHeading || funfact ? "ml-20" : "ml-10vw"}`
				}}
			/>
		</div>
	);
};

export default TypeWriterText;
