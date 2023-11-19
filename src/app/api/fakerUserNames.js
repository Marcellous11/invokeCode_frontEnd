"use client";
import axios from "axios";

async function getfakeNames() {
	let data = await axios({
		url: "",
	});
	return data;
}
