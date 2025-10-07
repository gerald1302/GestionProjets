// Backend/src/routes/adminRoutes.js
import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";
// import { getAllUsers, updateUserRole, deleteUser } from "../controllers/adminController.js";
import { getAllUsers, updateUserRole, deleteUser, createUser , updateUser } from "../controllers/adminController.js";

const router = express.Router();

router.post("/users", authenticate, authorize(["ADMIN"]), createUser);
router.put("/users/:id", authenticate, authorize(["ADMIN"]), updateUser);

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Gestion des utilisateurs (ADMIN uniquement)
 */

/**
 * @swagger
 * /admin/users:
 *   get:
 *     summary: Récupérer tous les utilisateurs
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des utilisateurs
 *       403:
 *         description: Accès refusé
 */
router.get("/users", authenticate, authorize(["ADMIN"]), getAllUsers);

/**
 * @swagger
 * /admin/users/{id}/role:
 *   put:
 *     summary: Modifier le rôle d'un utilisateur
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *                 enum: [ADMIN, CHEF, MEMBRE, CLIENT]
 *     responses:
 *       200:
 *         description: Rôle mis à jour
 *       403:
 *         description: Accès refusé
 */
router.put("/users/:id/role", authenticate, authorize(["ADMIN"]), updateUserRole);

/**
 * @swagger
 * /admin/users/{id}:
 *   delete:
 *     summary: Supprimer un utilisateur
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Utilisateur supprimé avec succès
 *       403:
 *         description: Accès refusé
 */
router.delete("/users/:id", authenticate, authorize(["ADMIN"]), deleteUser);


router.get('/users', authenticate, authorize(['ADMIN']), getAllUsers);

export default router;
// adminRoutes.js définit les routes administratives protégées par l’authentification et l’autorisation