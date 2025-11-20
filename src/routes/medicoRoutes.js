// src/routes/medicoRoutes.js

import { Router } from "express";
import path from "path";
import {MedicoController} from "../controllers/MedicoController.js"

const router = Router();

//servir pagina principal de medicos
router.get("/",(req,res) => {
    return res.sendFile(path.join(process.cwd(),"src","views","Personal_Medico","medico.html"));
});

/*Apis?:medico :D
router.get("/medicos/:numero_sucursal",MedicoController.CargarMedicos);//cargar medicos
router.post("/medicos",MedicoController.crearMedico);//crear nuevo medico
router.put("/medicos/:codigo",MedicoController.actualizarMedico);//actualizar medico
router.delete("/medicos/:codigo",MedicoController.eliminarMedico);*/

export default router;