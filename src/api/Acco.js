import axios from "axios";

const API_URL = "./logements.json";

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
