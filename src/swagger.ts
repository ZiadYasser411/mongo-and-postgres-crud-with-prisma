import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Tutoruu CRUD API",
      version: "1.0.0",
      description:
        "API documentation for Postgres (Users & Occupations) and Mongo (Products & Reviews) CRUD operations",
    },
    servers: [
      { url: "http://localhost:3000" },
    ],
    paths: {
      "/users": {
        get: {
          summary: "Get all users",
          responses: { 200: { description: "List of users" } },
        },
        post: {
          summary: "Create a user",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    email: { type: "string" },
                    occupationId: { type: "integer" },
                  },
                  required: ["name", "email", "occupationId"],
                },
              },
            },
          },
          responses: { 200: { description: "Created user" } },
        },
      },
      "/users/{id}": {
        get: {
          summary: "Get a user by ID",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: { 200: { description: "User object" } },
        },
        put: {
          summary: "Update a user by ID",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { type: "object" } } },
          },
          responses: { 200: { description: "Updated user" } },
        },
        delete: {
          summary: "Delete a user by ID",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: { 200: { description: "Deleted confirmation" } },
        },
      },

      "/occupations": {
        get: {
          summary: "Get all occupations",
          responses: { 200: { description: "List of occupations" } },
        },
        post: {
          summary: "Create occupation",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: { name: { type: "string" } },
                  required: ["name"],
                },
              },
            },
          },
          responses: { 200: { description: "Created occupation" } },
        },
      },
      "/occupations/{id}": {
        get: {
          summary: "Get occupation by ID",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "integer" },
            },
          ],
          responses: { 200: { description: "Occupation object" } },
        },
        put: {
          summary: "Update occupation",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "integer" },
            },
          ],
          responses: { 200: { description: "Updated occupation" } },
        },
        delete: {
          summary: "Delete occupation",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "integer" },
            },
          ],
          responses: { 200: { description: "Deleted confirmation" } },
        },
      },

      "/products": {
        get: {
          summary: "Get all products",
          responses: { 200: { description: "List of products" } },
        },
        post: {
          summary: "Create product",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: { name: { type: "string" } },
                  required: ["name"],
                },
              },
            },
          },
          responses: { 200: { description: "Created product" } },
        },
      },
      "/products/{id}": {
        get: {
          summary: "Get product by ID",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: { 200: { description: "Product object" } },
        },
        put: {
          summary: "Update product",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: { name: { type: "string" } },
                  required: ["name"],
                },
              },
            },
          },
          responses: { 200: { description: "Updated product" } },
        },
        delete: {
          summary: "Delete product",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: { 200: { description: "Deleted confirmation" } },
        },
      },

      "/reviews": {
        get: {
          summary: "Get all reviews",
          responses: { 200: { description: "List of reviews" } },
        },
        post: {
          summary: "Create review",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    comment: { type: "string" },
                    productId: { type: "string" },
                  },
                  required: ["comment", "productId"],
                },
              },
            },
          },
          responses: { 200: { description: "Created review" } },
        },
      },
      "/reviews/{id}": {
        get: {
          summary: "Get review by ID",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: { 200: { description: "Review object" } },
        },
        put: {
          summary: "Update review",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: { 200: { description: "Updated review" } },
        },
        delete: {
          summary: "Delete review",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: { 200: { description: "Deleted confirmation" } },
        },
      },
    },
  },
  apis: [],
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
