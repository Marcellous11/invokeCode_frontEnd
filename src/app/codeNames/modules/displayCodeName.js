"use client";
export default function DisplayCodeName({ codeName }) {
	return (
		<div className="flex flex-col w-3/6 justify-evenly">
			<h1 className="text-center">CODE NAME: </h1>
			<div className="h-10 theShadow-display">
				<p className="mt-1 text-xl text-center ">{codeName}</p>
			</div>
		</div>
	);
}
