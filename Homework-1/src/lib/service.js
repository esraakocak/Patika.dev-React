import axios from "axios";

export default async function getData(number) {
  const { data } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + number
  );
  console.log(data);
}
