import axios from "axios";

const API_URL =
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json";

export async function getAccos() {
  try {
    const { data } = await axios.get(`${API_URL}`);
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function getAccoById(id) {
  try {
    const { data } = await axios.get(`${API_URL}acco/${id}`);
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
}
