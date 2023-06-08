// userService.js

import axios from "axios";

export async function getUsers() {
  try {
    const response = await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
    return response.data;
  } catch (error) {
    console.error("Error fetching Users List: ", error);
    throw error;
  }
}
