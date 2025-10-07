import express from "express";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import { swaggerUi, swaggerSpec } from "./config/swagger.js";
import projetRoutes from "./routes/projetRoutes.js";
import membreRoutes from "./routes/membreRoutes.js";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/projets", projetRoutes);
app.use("/membre", membreRoutes);


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port "http://localhost:5000/api-docs" ${PORT}`));
