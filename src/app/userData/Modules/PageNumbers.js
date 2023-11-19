import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";

function PageNumbers({ showTen, moveLeft, moveRight }) {
	return (
		<ol className="flex flex-row mx-2" data-test="testValue">
			<AiFillCaretLeft
				className="mx-2 my-3 rounded-lg hover:bg-slate-500"
				onClick={moveLeft}
			></AiFillCaretLeft>
			<li
				onClick={showTen}
				className="p-2 mx-2 border border-solid rounded-lg Active"
			>
				1
			</li>
			<li className="p-2 mx-2 border border-solid rounded-lg" onClick={showTen}>
				2
			</li>
			<li className="p-2 mx-2 border border-solid rounded-lg" onClick={showTen}>
				3
			</li>
			<li className="p-2 mx-2 border border-solid rounded-lg" onClick={showTen}>
				4
			</li>
			<AiFillCaretRight
				className="mx-2 my-3 rounded-lg hover:bg-slate-500"
				onClick={moveRight}
			></AiFillCaretRight>
		</ol>
	);
}

export default PageNumbers;
