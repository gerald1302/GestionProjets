// Backend/src/controllers/adminController.js
import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

// Créer un utilisateur
export const createUser = async (req, res) => {
  const { nom, email, motDePasse, role } = req.body;
  try {
    const newUser = await prisma.utilisateur.create({
      data: { nom, email, motDePasse, role },
    });
    res.status(201).json({ message: "Utilisateur créé avec succès", user: newUser });
  } catch (error) {
    console.error("Erreur createUser:", error);
    res.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
  }
};


// Récupérer tous les utilisateurs
export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.utilisateur.findMany({
      select: { id: true, nom: true, email: true, role: true, createdAt: true },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { nom, email, motDePasse, role } = req.body;

  try {
    const updatedUser = await prisma.utilisateur.update({
      where: { id: parseInt(id) },
      data: { nom, email, motDePasse, role },
    });

    res.json({ message: "Utilisateur mis à jour avec succès", user: updatedUser });
  } catch (error) {
    console.error("Erreur updateUser:", error);
    res.status(500).json({ message: "Erreur lors de la mise à jour de l'utilisateur" });
  }
};


//  Modifier le rôle d'un utilisateur
export const updateUserRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;

  try {
    const updatedUser = await prisma.utilisateur.update({
      where: { id: parseInt(id) },
      data: { role },
    });

    res.json({ message: "Rôle mis à jour avec succès", user: updatedUser });
  } catch (error) {
    console.error("Erreur updateUserRole:", error);
    res.status(500).json({ message: "Erreur lors de la mise à jour du rôle" });
  }
};
// Supprimer un utilisateur
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.utilisateur.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: "Utilisateur supprimé avec succès", user });
  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
};
// adminController.js gère les opérations administratives telles que la gestion des utilisateurs