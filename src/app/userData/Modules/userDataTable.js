"use client";
import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";
import PageNumbers from "./PageNumbers";
import { NodeNextRequest } from "next/dist/server/base-http/node";

export default function UserDataTable() {
	const [dataArray, setDataArray] = useState([]);
	const [fourthData, setFourthData] = useState([]);

	useEffect(() => {
		createDataArray();
		setFourthData(dataArray.slice(30));
	}, []);

	//A function to create a data row
	const userData = () => {
		let user = {
			firstName: faker.person.firstName(),
			lastName: faker.person.lastName(),
			email: faker.internet.email(),
			address: faker.location.streetAddress(),
			phoneNumber: faker.phone.number(),
		};
		return user;
	};
	//Get bulk fake data
	const createDataArray = () => {
		setDataArray((data) => {
			for (let i = 0; i < 40; i++) {
				if (data.length < 40) {
					data.push(userData());
				}
			}
			return [...data];
		});
	};

	// fucntion for changing active states on list items
	const changeActive = (value) => {
		let listArray = document.querySelectorAll("li");
		for (let listItem of listArray) {
			listItem.classList.remove("Active");
		}

		value.classList.add("Active");
	};

	const hiddeElement = (num) => {
		let elementArray = document.querySelectorAll("svg");
		console.log(elementArray);
		if (num === 1) {
			elementArray[0].style.display = "none";
			elementArray[1].style.display = "";
		}
		if (num === 4) {
			elementArray[1].style.display = "none";
			elementArray[0].style.display = "";
		}
		if (num === 2 || num === 3) {
			elementArray[0].style.display = "";
			elementArray[1].style.display = "";
		}
	};

	//Data for setting fourth bits of data
	let miniData = {
		1: (e) => {
			changeActive(e);
			hiddeElement(1);
			setFourthData(dataArray.slice(30));
		},
		2: (e) => {
			changeActive(e);
			hiddeElement(2);
			setFourthData(dataArray.slice(20, 30));
		},
		3: (e) => {
			changeActive(e);
			hiddeElement(3);
			setFourthData(dataArray.slice(10, 20));
		},
		4: (e) => {
			changeActive(e);
			hiddeElement(4);
			setFourthData(dataArray.slice(0, 10));
		},
	};

	const showTen = ({ target }) => {
		miniData[target.innerText](target);
	};

	const moveLeft = () => {
		let allList = document.querySelectorAll("li");
		let currentPageNumber = document.querySelector(".Active").innerHTML;

		//find li element to set to active.
		for (let li of allList) {
			if (li.innerText == currentPageNumber - 1 && currentPageNumber > 1) {
				miniData[currentPageNumber - 1](li);
			}
		}
	};
	const moveRight = () => {
		let allList = document.querySelectorAll("li");
		let currentPageNumber = document.querySelector(".Active").innerHTML;

		//find li element to set to active.
		for (let li of allList) {
			if (
				li.innerText == parseInt(currentPageNumber) + 1 &&
				currentPageNumber < 4
			) {
				miniData[parseInt(currentPageNumber) + 1](li);
			}
		}
	};

	if (dataArray) {
		return (
			<div className="flex flex-col items-center min-w-full">
				<table className="m-auto min-w-[80%] border-slate-500">
					<thead>
						<tr className="bg-slate-400">
							<th className="w-8">First Name</th>
							<th className="w-10">Last Name</th>
							<th className="w-10">Email</th>
							<th className="w-10">Phone Number</th>
						</tr>
					</thead>
					<tbody>
						{fourthData.map((user) => {
							return (
								<tr key={uuid()} className="h-12 row">
									<td>{user.firstName}</td>
									<td>{user.lastName}</td>
									<td>{user.email}</td>
									<td>{user.phoneNumber}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<PageNumbers
					showTen={showTen}
					moveLeft={moveLeft}
					moveRight={moveRight}
				></PageNumbers>
			</div>
		);
	}
	return "Loading";
}
