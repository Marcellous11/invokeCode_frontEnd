import Image from "next/image";
import React from "react";
import invoke from "../../../public/INVOKE_LOGOMAIN_web.png";
import Link from "next/link";

export default function NavBar() {
	return (
		<div className="flex justify-between w-full h-12 bg-orange-300">
			<div className="m-2">
				<Link href={"/"}>
					<Image src={invoke} width={200}></Image>
				</Link>
			</div>
		</div>
	);
}
