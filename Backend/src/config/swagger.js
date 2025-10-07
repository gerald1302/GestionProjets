// swagger.js
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Gestion de Projet",
      version: "1.0.0",
      description: "Documentation de l'API avec Swagger",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
     components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        Projet: {
          type: "object",
          properties: {
            id: { type: "integer" },
            nom: { type: "string" },
            description: { type: "string" },
            chef: { $ref: "#/components/schemas/Utilisateur" },
            taches: {
              type: "array",
              items: { $ref: "#/components/schemas/Tache" }
            }
          }
        },
        Utilisateur: {
          type: "object",
          properties: {
            id: { type: "integer" },
            nom: { type: "string" },
            email: { type: "string" }
          }
        },
        Tache: {
          type: "object",
          properties: {
            id: { type: "integer" },
            titre: { type: "string" },
            description: { type: "string" },
            statut: { type: "string" }
          }
        }
      }
    },
  },
  apis: ["./src/routes/*.js"], // où Swagger va chercher les annotations
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
