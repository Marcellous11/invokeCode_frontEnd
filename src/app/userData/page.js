"use client";

import React from "react";
import UserDataTable from "./Modules/userDataTable";
import CircleIcon from "../Tools/CircleIcon";
import InvokeNameIcon from "../Tools/InvokeNameIcon";
import Link from "next/link";
import { v4 as uuid } from "uuid";

export default function UserData() {
	return (
		<div className="flex flex-col items-center UserData">
			<CircleIcon className="pb-10"></CircleIcon>
			<Link href={"/"}>
				<InvokeNameIcon className="m-10"></InvokeNameIcon>
			</Link>
			<UserDataTable key={uuid()} />
		</div>
	);
}
