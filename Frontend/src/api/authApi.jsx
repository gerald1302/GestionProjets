// src/api/authApi.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const loginApi = async (credentials) => {
  const res = await axios.post(`${API_URL}/login`, credentials);
  return res.data; // { token, user }
};

export const registerApi = async (userData) => {
  const res = await axios.post(`${API_URL}/register`, userData);
  return res.data;
};
export const fetchProfile = async (token) => {
  const res = await axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.user; // { id, email, role }
}