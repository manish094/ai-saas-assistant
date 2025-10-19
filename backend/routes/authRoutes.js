import express from "express";

const router = express.Router();

// Simple test route
router.get("/", (req, res) => {
  res.send("Auth route working fine ✅");
});

export default router;
