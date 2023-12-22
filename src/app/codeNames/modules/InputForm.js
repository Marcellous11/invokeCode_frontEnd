"use client";
import { useState } from "react";
import DisplayCodeName from "./displayCodeName";
import BasicAlerts from "../../errorAlert/missingData";
import ChatGPTerror from "@/app/errorAlert/ChatGPTerror";
import { randomNickname } from "nickname-generator";
export default function InputForm() {
	const [codeName, setCodeName] = useState();
	const [myAlert, setMyAlert] = useState(false);
	const [apiFail, setApiFail] = useState(false);
	const [apiFailMessage, setApiFailMessage] = useState();
	const inputDefault = {
		fname: "",
		Months: "",
	};
	const [userEntry, setUserEntry] = useState(inputDefault);
	const onChange = (e) => {
		const { name, value } = e.target;

		setUserEntry((formData) => ({
			...formData,
			[name]: value,
		}));
	};

	async function add(e) {
		e.preventDefault();
		if (userEntry.fname.trim() === "" || userEntry.Months.trim() === "") {
			setMyAlert(true);
		} else {
			if (codeName !== "") setMyAlert(false);
			setApiFail(false);
			setCodeName(randomNickname());
			setUserEntry(inputDefault);
		}
	}

	return (
		<form className="flex flex-col w-full ">
			<div className="flex flex-row justify-around">
				<div className="flex flex-col justify-between w-2/5 form-and-codename ">
					<label htmlFor="fname" className="flex items-start ">
						FIRST NAME:
					</label>
					<input
						required
						type="text"
						id="fname"
						onChange={onChange}
						value={userEntry.fname}
						name="fname"
						className="w-full p-1 text-black rounded-md bg-slate-100 input module-input"
					/>

					<label htmlFor="Months" className="flex items-start ">
						BIRTH MONTH:
					</label>
					<select
						required
						id="Months"
						name="Months"
						className="w-full p-2 text-black rounded-md bg-slate-100 input module-input"
						value={userEntry.Months}
						onChange={onChange}
					>
						<option value="blank"></option>
						<option value="January">January</option>
						<option value="Febuary">Febuary</option>
						<option value="March">March</option>
						<option value="April">April</option>
						<option value="May">May</option>
						<option value="June">June</option>
						<option value="July">July</option>
						<option value="August">August</option>
						<option value="September">September</option>
						<option value="October">October</option>
						<option value="November">November</option>
						<option value="December">December</option>
					</select>
				</div>
				<DisplayCodeName codeName={codeName} />
			</div>
			<button
				onClick={add}
				className="w-1/2 p-1 m-auto mt-20 mb-5 duration-300 bg-slate-100 hover:bg-green-400 theShadow-generate-btn "
			>
				Generate
			</button>
			{myAlert && <BasicAlerts />}
			{apiFail && <ChatGPTerror error={apiFailMessage}></ChatGPTerror>}
		</form>
	);
}
