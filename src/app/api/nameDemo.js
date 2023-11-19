import axios from "axios";

//build a full api class that stores the api request.

async function name() {
  const { data } = await axios({
    url: "https://randomuser.me/api/",
    // headers:{
    //     "X-Api-Key": "Gj7lN6wueJ/oeCtRX6akhQ==C5FU45SyvwGAx7JM"
    // }
  });
  console.log(data.results[0].login.username);
  let res = data.results[0].login.username;
    return res;
}

export default name;
