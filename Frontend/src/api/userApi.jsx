// Frontend/src/api/userApi.jsx
import axios from "axios";

const API_URL = "http://localhost:5000/api/admin";



// Récupérer le token depuis le localStorage
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};
// 🔹 Créer un utilisateur
export const createUser = async (userData) => {
  const res = await axios.post(`${API_URL}/users`, userData, getAuthHeaders());
  return res.data;
};
// Modifier un utilisateur existant
export const updateUser = async (id, userData) => {
  const res = await axios.put(`${API_URL}/users/${id}`, userData, getAuthHeaders());
  return res.data;
};

// Récupérer tous les utilisateurs
export const getAllUsers = async () => {
  const res = await axios.get(`${API_URL}/users`, getAuthHeaders());
  return res.data;
};

// Modifier le rôle d’un utilisateur
export const updateUserRole = async (id, role) => {
  const res = await axios.put(`${API_URL}/users/${id}/role`, { role }, getAuthHeaders());
  return res.data;
};

// Supprimer un utilisateur
export const deleteUser = async (id) => {
  const res = await axios.delete(`${API_URL}/users/${id}`, getAuthHeaders());
  return res.data;
};
