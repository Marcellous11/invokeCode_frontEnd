import React from "react";
import Image from "next/image";
import invoke from "../../../public/INVOKE_LOGOMAIN_web.png";

function InvokeNameIcon() {
	return (
		<Image
			src={invoke}
			width={200}
			className="mt-4 invoke-name-logo"
			alt={"The word Invoke image"}
		></Image>
	);
}

export default InvokeNameIcon;
