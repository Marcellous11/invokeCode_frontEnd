import Link from "next/link";
import GridOptions from "./Tools/GridOptions";
export default function Page() {
	return (
		<div className="z-10 h-full">
			<h1 className="relative m-auto text-4xl text-center top-10 ">
				{" "}
				<b className="text-[#DE6D40]"> Invoke </b> RPA Demo Options{" "}
			</h1>
			<GridOptions> </GridOptions>{" "}
		</div>
	);
}
