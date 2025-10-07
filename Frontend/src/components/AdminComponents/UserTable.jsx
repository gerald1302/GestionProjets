// src/components/AdminComponents/UserTable.jsx
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { getAllUsers, createUser, updateUser, updateUserRole, deleteUser } from "../../api/userApi";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // États pour les dialogs
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openRoleDialog, setOpenRoleDialog] = useState(false);
  const [pendingRole, setPendingRole] = useState({ id: null, newRole: "" });

  // États pour le formulaire (ajout / modification)
  const [openFormDialog, setOpenFormDialog] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    nom: "",
    email: "",
    motDePasse: "",
    role: "MEMBRE",
  });

  // Charger les utilisateurs
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (error) {
        toast.error("Erreur de chargement des utilisateurs !");
      }
    };
    fetchUsers();
  }, [refresh]);

  // --- Gestion des rôles ---
  const handleRoleChange = (id, newRole) => {
    setPendingRole({ id, newRole });
    setOpenRoleDialog(true);
  };

  const handleConfirmRoleChange = async () => {
    try {
      await updateUserRole(pendingRole.id, pendingRole.newRole);
      toast.success("Rôle mis à jour avec succès !");
      setRefresh(!refresh);
    } catch (error) {
      toast.error("Erreur lors de la mise à jour du rôle !");
    } finally {
      setOpenRoleDialog(false);
      setPendingRole({ id: null, newRole: "" });
    }
  };

  const handleCancelRoleChange = () => {
    toast.info("Changement de rôle annulé.");
    setOpenRoleDialog(false);
    setPendingRole({ id: null, newRole: "" });
  };

  // --- Suppression utilisateur ---
  const handleOpenDialog = (user) => {
    setSelectedUser(user);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    if (openDialog && selectedUser) {
      toast.info("Suppression annulée.");
    }
    setOpenDialog(false);
    setSelectedUser(null);
  };

  const handleConfirmDelete = async () => {
    if (!selectedUser) return;
    try {
      await deleteUser(selectedUser.id);
      toast.success(`Utilisateur "${selectedUser.nom}" supprimé avec succès !`);
      setUsers(users.filter((u) => u.id !== selectedUser.id));
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.warning(error.response.data.message || "Suppression annulée.");
      } else {
        toast.error("Erreur lors de la suppression !");
      }
    } finally {
      handleCloseDialog();
    }
  };

  // --- Formulaire création / modification ---
  const handleOpenCreate = () => {
    setEditMode(false);
    setFormData({ id: null, nom: "", email: "", motDePasse: "", role: "MEMBRE" });
    setOpenFormDialog(true);
  };

  const handleOpenEdit = (user) => {
    setEditMode(true);
    setFormData({
      id: user.id,
      nom: user.nom,
      email: user.email,
      motDePasse: "",
      role: user.role,
    });
    setOpenFormDialog(true);
  };

  const handleCloseForm = () => {
    setOpenFormDialog(false);
    setFormData({ id: null, nom: "", email: "", motDePasse: "", role: "MEMBRE" });
  };

  const handleSaveUser = async () => {
    try {
      if (editMode) {
        await updateUser(formData.id, formData);
        toast.success("Utilisateur modifié avec succès !");
      } else {
        await createUser(formData);
        toast.success("Utilisateur créé avec succès !");
      }
      setOpenFormDialog(false);
      setRefresh(!refresh);
    } catch (error) {
      toast.error("Erreur lors de la sauvegarde !");
    }
  };

  return (
    <>
      <Card className="mt-12 mb-8">
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex justify-between items-center">
          <Typography variant="h6" color="white">
            Liste des Utilisateurs
          </Typography>
          <button
            onClick={handleOpenCreate}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            + Ajouter
          </button>
        </CardHeader>

        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["ID", "Nom", "Email", "Rôle", "Créé le", "Actions"].map((el) => (
                  <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {users.map(({ id, nom, email, role, createdAt }, key) => {
                const className = `py-3 px-5 ${
                  key === users.length - 1 ? "" : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={id}>
                    <td className={className}>{id}</td>
                    <td className={className}>{nom}</td>
                    <td className={className}>{email}</td>
                    <td className={className}>
                      <select
                        className="text-xs border rounded px-2 py-1 text-blue-gray-600"
                        value={role}
                        onChange={(e) => handleRoleChange(id, e.target.value)}
                      >
                        <option value="ADMIN">ADMIN</option>
                        <option value="MEMBRE">MEMBRE</option>
                        <option value="CHEF">CHEF</option>
                      </select>
                    </td>
                    <td className={className}>
                      {new Date(createdAt).toLocaleDateString()}
                    </td>
                    <td className={className}>
                      <Tooltip content="Modifier">
                        <button
                          onClick={() => handleOpenEdit({ id, nom, email, role })}
                          className="text-blue-500 hover:text-blue-700 mr-3"
                        >
                          ✏️
                        </button>
                      </Tooltip>

                      <Tooltip content="Supprimer">
                        <button
                          onClick={() => handleOpenDialog({ id, nom })}
                          className="text-red-500 hover:text-red-700"
                        >
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </Tooltip>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>

      {/* Dialog changement de rôle */}
      <Dialog open={openRoleDialog} onClose={handleCancelRoleChange}>
        <DialogTitle>Confirmer le changement de rôle</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Voulez-vous vraiment changer le rôle de cet utilisateur en{" "}
            <strong>{pendingRole.newRole}</strong> ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelRoleChange} color="inherit">
            Annuler
          </Button>
          <Button onClick={handleConfirmRoleChange} color="primary" variant="contained">
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog suppression */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirmer la suppression</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Voulez-vous vraiment supprimer{" "}
            <strong>{selectedUser?.nom}</strong> ? <br />
            Cette action est irréversible.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="inherit">
            Annuler
          </Button>
          <Button onClick={handleConfirmDelete} color="error" variant="contained">
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog création / modification */}
      <Dialog open={openFormDialog} onClose={handleCloseForm}>
        <DialogTitle>
          {editMode ? "Modifier un utilisateur" : "Créer un utilisateur"}
        </DialogTitle>
        <DialogContent>
          <div className="flex flex-col gap-4 mt-2">
            <input
              type="text"
              placeholder="Nom"
              value={formData.nom}
              onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
              className="border rounded px-3 py-2"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border rounded px-3 py-2"
            />
            {!editMode && (
              <input
                type="password"
                placeholder="Mot de passe"
                value={formData.motDePasse}
                onChange={(e) =>
                  setFormData({ ...formData, motDePasse: e.target.value })
                }
                className="border rounded px-3 py-2"
              />
            )}
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="border rounded px-3 py-2"
            >
              <option value="ADMIN">ADMIN</option>
              <option value="MEMBRE">MEMBRE</option>
              <option value="CHEF">CHEF</option>
            </select>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm} color="inherit">
            Annuler
          </Button>
          <Button onClick={handleSaveUser} color="primary" variant="contained">
            {editMode ? "Modifier" : "Créer"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UserTable;
