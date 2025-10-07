import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

// === PROJET ===
export const createProjet = async (req, res) => {
  try {
    const { nom, description } = req.body;
    const projet = await prisma.projet.create({
      data: {
        nom,
        description,
        chefId: req.user.id,
      },
    });
    res.status(201).json({ message: "Projet créé avec succès", projet });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

export const updateProjet = async (req, res) => {
  try {
    const { id } = req.params;
    const { nom, description } = req.body;

    const projet = await prisma.projet.update({
      where: { id: Number(id) },
      data: { nom, description },
    });
    res.json({ message: "Projet mis à jour", projet });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

export const deleteProjet = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.projet.delete({ where: { id: Number(id) } });
    res.json({ message: "Projet supprimé" });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

// === MEMBRES ===
export const addMembre = async (req, res) => {
  try {
    const { projetId, utilisateurId } = req.body;
    if (!projetId || !utilisateurId) {
      return res.status(400).json({ message: "projetId et utilisateurId sont requis" });
    }
    const membre = await prisma.projetMembre.create({
      data: {
        utilisateur: { connect: { id: utilisateurId } },
        projet: { connect: { id: projetId } }
      },
    });
    res.status(201).json({ message: "Membre ajouté", membre });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

export const removeMembre = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.projetMembre.delete({ where: { id: Number(id) } });
    res.json({ message: "Membre retiré" });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

// === TACHES ===
export const createTache = async (req, res) => {
  try {
    const { projetId, titre, description } = req.body;
    const tache = await prisma.tache.create({
      data: { projetId, titre, description },
    });
    res.status(201).json({ message: "Tâche créée", tache });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

export const updateTache = async (req, res) => {
  try {
    const { id } = req.params;
    const { titre, description, statut } = req.body;

    const tache = await prisma.tache.update({
      where: { id: Number(id) },
      data: { titre, description, statut },
    });
    res.json({ message: "Tâche mise à jour", tache });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

export const deleteTache = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.tache.delete({ where: { id: Number(id) } });
    res.json({ message: "Tâche supprimée" });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

export const assignTache = async (req, res) => {
  try {
    const { id } = req.params;
    const { assigneId } = req.body;

    const tache = await prisma.tache.update({
      where: { id: Number(id) },
      data: { assigneId },
    });
    res.json({ message: "Tâche assignée", tache });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

// === AVANCEMENT ===
export const getAvancement = async (req, res) => {
  try {
    const { projetId } = req.params;

    const total = await prisma.tache.count({ where: { projetId: Number(projetId) } });
    const terminees = await prisma.tache.count({ where: { projetId: Number(projetId), statut: "TERMINE" } });

    const avancement = total > 0 ? (terminees / total) * 100 : 0;

    res.json({ projetId, total, terminees, avancement: `${avancement.toFixed(2)}%` });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

// === RAPPORT ===
export const genererRapport = async (req, res) => {
  try {
    const { projetId } = req.params;

    const projet = await prisma.projet.findUnique({
      where: { id: Number(projetId) },
      include: {
        chef: true,
        membres: { include: { membre: true } },
        taches: true,
      },
    });

    if (!projet) return res.status(404).json({ message: "Projet introuvable" });

    res.json({ message: "Rapport généré", projet });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};
