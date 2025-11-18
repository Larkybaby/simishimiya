// src/routes/farmaciaRoutes.js

import { Router } from "express";
import path from "path";
import FarmaciaController from "../controllers/FarmaciaController.js";

const router = Router();

// Servir la página principal de la farmacia (HTML estático)
router.get("/", (req, res) => {
	return res.sendFile(path.join(process.cwd(), "src", "views", "Personal_Farmacia", "farmacia.html"));
});

// API: recetas
router.get("/recetas", FarmaciaController.getRecetas);
router.post("/surtir-receta", FarmaciaController.surtirReceta);

// API: ventas
router.get("/ventas", FarmaciaController.getVentas);
router.post("/ventas", FarmaciaController.createVenta);
router.put("/ventas/:id", FarmaciaController.updateVenta);
router.delete("/ventas/:id", FarmaciaController.deleteVenta);

export default router;
