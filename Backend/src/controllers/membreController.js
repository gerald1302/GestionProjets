import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();
// 🔹 Consulter les projets attribués
export const getProjetsAttribues = async (req, res) => {
  try {
    const projets = await prisma.projet.findMany({
      where: {
        membres: {
          some: { utilisateurId: req.user.id }
        }
      },
      include: {
        chef: { select: { id: true, nom: true, email: true } },
        taches: true
      }
    });
    res.json(projets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔹 Consulter les tâches assignées
export const getTachesAssignees = async (req, res) => {
  try {
    const taches = await prisma.tache.findMany({
      where: { assigneAId: req.user.id },
      include: { projet: true }
    });
    res.json(taches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔹 Mettre à jour l’état d’une tâche
export const updateEtatTache = async (req, res) => {
  try {
    const { statut } = req.body; // "EN_ATTENTE", "EN_COURS", "TERMINE"
    const { id } = req.params;

    const tache = await prisma.tache.update({
      where: { id: Number(id) },
      data: { statut }
    });

    res.json(tache);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔹 Commenter une tâche
export const commenterTache = async (req, res) => {
  try {
    const { contenu } = req.body;
    const { id } = req.params;

    const commentaire = await prisma.commentaire.create({
      data: {
        contenu,
        tacheId: Number(id),
        auteurId: req.user.id
      }
    });

    res.json(commentaire);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔹 Consulter ses notifications
export const getNotifications = async (req, res) => {
  try {
    const notifications = await prisma.notification.findMany({
      where: { utilisateurId: req.user.id },
      orderBy: { createdAt: "desc" }
    });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
