/**
 * @swagger
 * tags:
 *   name: Recycling Points
 *   description: API endpoints for managing recycling points
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     RecyclingPoint:
 *       type: object
 *       required:
 *         - name
 *         - city
 *         - type
 *         - street_address
 *         - contact
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         city:
 *           type: string
 *         type:
 *           type: string
 *         street_address:
 *           type: string
 *         contact:
 *           type: string
 */

import express from 'express';
import { getAllPoints, getPointsByCity, getPointsByType, addPoint, deletePoint, updatePoint } from '../controllers/ewasteController.js';

const router = express.Router();

/**
 * @swagger
 * /recycling-points:
 *   get:
 *     summary: Retrieve all recycling points
 *     tags: [Recycling Points]
 *     responses:
 *       '200':
 *         description: A list of recycling points
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RecyclingPoint'
 */
router.get('/recycling-points', getAllPoints);

/**
 * @swagger
 * /recycling-points/city/{city}:
 *   get:
 *     summary: Retrieve recycling points by city
 *     tags: [Recycling Points]
 *     parameters:
 *       - in: path
 *         name: city
 *         required: true
 *         schema:
 *           type: string
 *         description: City name
 *     responses:
 *       '200':
 *         description: A list of recycling points
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RecyclingPoint'
 */
router.get('/recycling-points/city/:city', getPointsByCity);

/**
 * @swagger
 * /recycling-points/type/{type}:
 *   get:
 *     summary: Retrieve recycling points by type of waste
 *     tags: [Recycling Points]
 *     parameters:
 *       - in: path
 *         name: type
 *         required: true
 *         schema:
 *           type: string
 *           enum: [baterias, computadores, celulares, televisores]
 *         description: Type of electronic waste
 *     responses:
 *       '200':
 *         description: A list of recycling points
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RecyclingPoint'
 */
router.get('/recycling-points/type/:type', getPointsByType);

/**
 * @swagger
 * /api/recycling-points:
 *   post:
 *     summary: Add a new recycling point
 *     tags: [Recycling Points]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RecyclingPoint'
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RecyclingPoint'
 *       '400':
 *         description: Bad Request
 */
router.post('/recycling-points', addPoint);

/**
 * @swagger
 * /recycling-points/{id}:
 *   delete:
 *     summary: Delete a recycling point
 *     tags: [Recycling Points]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RecyclingPoint'
 *       '404':
 *         description: Not Found
 */
router.delete('/recycling-points/:id', deletePoint);

/**
 * @swagger
 * /recycling-points/{id}:
 *   put:
 *     summary: Update a recycling point
 *     tags: [Recycling Points]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RecyclingPoint'
 *     responses:
 *       '200':
 *         description: Updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RecyclingPoint'
 *       '400':
 *         description: Bad Request
 *       '404':
 *         description: Not Found
 */
router.put('/recycling-points/:id', updatePoint);

export default router;