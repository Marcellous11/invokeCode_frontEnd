import axios from "axios";

async function getName(name, month) {
	let data = await axios({
		url: process.env.LOCAL_OPEN_API_URL,
		method: "POST",
		data: {
			name: name,
			month: month,
		},
	});

	return data;
}
export default getName;
