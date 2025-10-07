
// CHEF peut créer, modifier, supprimer des projets et des tâches, assigner des tâches, ajouter/supprimer des membres, voir l’avancement et générer des rapports
import express from "express"; 
import { authenticate } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";
import {
  createProjet, updateProjet, deleteProjet,
  addMembre, removeMembre,
  createTache, updateTache, deleteTache, assignTache,
  getAvancement, genererRapport
} from "../controllers/projetController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Projets
 *   description: Gestion des projets par le Chef de projet
 */

/**
 * @swagger
 * /projets:
 *   post:
 *     summary: Créer un projet
 *     tags: [Projets]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Projet créé
 */
router.post("/", authenticate, authorize(["CHEF"]), createProjet);

/**
 * @swagger
 * /projets/{id}:
 *   put:
 *     summary: Modifier un projet
 *     tags: [Projets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Projet mis à jour
 */
router.put("/:id", authenticate, authorize(["CHEF"]), updateProjet);

/**
 * @swagger
 * /projets/{id}:
 *   delete:
 *     summary: Supprimer un projet
 *     tags: [Projets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Projet supprimé
 */
router.delete("/:id", authenticate, authorize(["CHEF"]), deleteProjet);

/**
 * @swagger
 * /projets/membres:
 *   post:
 *     summary: Ajouter un membre au projet
 *     tags: [Projets]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               projetId:
 *                 type: integer
 *               utilisateurId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Membre ajouté
 */
router.post("/membres", authenticate, authorize(["CHEF"]), addMembre);

/**
 * @swagger
 * /projets/membres/{id}:
 *   delete:
 *     summary: Retirer un membre d’un projet
 *     tags: [Projets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la relation ProjetMembre
 *     responses:
 *       200:
 *         description: Membre retiré
 */
router.delete("/membres/:id", authenticate, authorize(["CHEF"]), removeMembre);

/**
 * @swagger
 * /projets/taches:
 *   post:
 *     summary: Créer une tâche
 *     tags: [Projets]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               projetId:
 *                 type: integer
 *               titre:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tâche créée
 */
router.post("/taches", authenticate, authorize(["CHEF"]), createTache);

/**
 * @swagger
 * /projets/taches/{id}:
 *   put:
 *     summary: Modifier une tâche
 *     tags: [Projets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titre:
 *                 type: string
 *               description:
 *                 type: string
 *               statut:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tâche mise à jour
 */
router.put("/taches/:id", authenticate, authorize(["CHEF"]), updateTache);

/**
 * @swagger
 * /projets/taches/{id}:
 *   delete:
 *     summary: Supprimer une tâche
 *     tags: [Projets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tâche supprimée
 */
router.delete("/taches/:id", authenticate, authorize(["CHEF"]), deleteTache);

/**
 * @swagger
 * /projets/taches/{id}/assign:
 *   put:
 *     summary: Assigner une tâche à un membre
 *     tags: [Projets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               utilisateurId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Tâche assignée
 */
router.put("/taches/:id/assign", authenticate, authorize(["CHEF"]), assignTache);

/**
 * @swagger
 * /projets/{projetId}/avancement:
 *   get:
 *     summary: Consulter l’avancement d’un projet
 *     tags: [Projets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: projetId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Avancement du projet
 */
router.get("/:projetId/avancement", authenticate, authorize(["CHEF"]), getAvancement);

/**
 * @swagger
 * /projets/{projetId}/rapport:
 *   get:
 *     summary: Générer un rapport sur un projet
 *     tags: [Projets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: projetId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Rapport généré
 */
router.get("/:projetId/rapport", authenticate, authorize(["CHEF"]), genererRapport);

export default router;
