import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";
import {
  getProjetsAttribues,
  getTachesAssignees,
  updateEtatTache,
  commenterTache,
  getNotifications
} from "../controllers/membreController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Membre
 *   description: Opérations accessibles aux membres
 */

/**
 * @swagger
 * /membre/projets:
 *   get:
 *     summary: Consulter les projets attribués
 *     tags: [Membre]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des projets attribués au membre connecté
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Projet'
 */
router.get("/projets", authenticate, authorize(["MEMBRE"]), getProjetsAttribues);

/**
 * @swagger
 * /membre/taches:
 *   get:
 *     summary: Consulter les tâches assignées
 *     tags: [Membre]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des tâches assignées au membre
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tache'
 */
router.get("/taches", authenticate, authorize(["MEMBRE"]), getTachesAssignees);

/**
 * @swagger
 * /membre/taches/{id}/statut:
 *   put:
 *     summary: Mettre à jour le statut d'une tâche
 *     tags: [Membre]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la tâche
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               statut:
 *                 type: string
 *                 enum: [EN_ATTENTE, EN_COURS, TERMINE]
 *     responses:
 *       200:
 *         description: Tâche mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tache'
 */
router.put("/taches/:id/statut", authenticate, authorize(["MEMBRE"]), updateEtatTache);

/**
 * @swagger
 * /membre/taches/{id}/commentaire:
 *   post:
 *     summary: Ajouter un commentaire à une tâche
 *     tags: [Membre]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la tâche
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               contenu:
 *                 type: string
 *     responses:
 *       200:
 *         description: Commentaire ajouté avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Commentaire'
 */
router.post("/taches/:id/commentaire", authenticate, authorize(["MEMBRE"]), commenterTache);

/**
 * @swagger
 * /membre/notifications:
 *   get:
 *     summary: Consulter ses notifications
 *     tags: [Membre]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des notifications du membre
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Notification'
 */
router.get("/notifications", authenticate, authorize(["MEMBRE"]), getNotifications);

export default router;
