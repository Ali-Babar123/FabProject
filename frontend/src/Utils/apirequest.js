import axios from "axios";

async function sendRequest(method, url, body = null) {
  const baseURL = process.env.REACT_APP_API_URL; // ✅ now points to https://api.fabhome.com

  if (!baseURL) throw new Error("Base URL not defined");

  const token = localStorage.getItem("token");

  try {
    const response = await axios({
      method: method.toLowerCase(),
      url: baseURL + url,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      data: body,
    });

    return response;
  } catch (error) {
    console.error("Request error:", error);
    throw error;
  }
}

export default sendRequest;
