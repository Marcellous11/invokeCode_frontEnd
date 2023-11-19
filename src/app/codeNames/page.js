"use client";
import InputForm from "./modules/InputForm";
import Link from "next/link";
import InvokeNameIcon from "../Tools/InvokeNameIcon";
import CircleIcon from "../Tools/CircleIcon";

export default function CodeName() {
	return (
		<div
			className="flex flex-col items-center w-3/5 max-w-screen-sm m-auto my-10 justify-evenly h-3/5 theShadow-main rounded-s-lg min-h-[500]"
			style={{ borderRadius: "10%" }}
		>
			{/* Circle Icon  */}
			<CircleIcon></CircleIcon>

			<Link href={"/"}>
				{/* Invoke Name Icon */}
				<InvokeNameIcon></InvokeNameIcon>
			</Link>

			{/* Input Form */}
			<InputForm />
		</div>
	);
}
