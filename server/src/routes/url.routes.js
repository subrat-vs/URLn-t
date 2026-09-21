import { Router } from "express";

const router = Router();

/**
 * @POST /api/urls
 */
router.post("/urls", (req, res) => {});

/**
 * @GET /api/urls
 */
router.get("/urls", (req, res) => {});

/**
 * @DELETE /api/urls/:shortCode
 */
router.delete("/urls", (req, res) => {});

export default router;
