import React from "react";
import Image from "next/image";
import ring from "../../../public/INVOKE_LOGOBRANDMARK_web.png";

function CircleIcon() {
	return (
		<Image
			src={ring}
			width={150}
			className="my-2 theShadow-icon "
			alt={"The Invoke brand logo"}
		></Image>
	);
}

export default CircleIcon;
