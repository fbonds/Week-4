const { Router } = require("express");
const router = Router();

const loginDAO = require('../daos/login');

// Create
router.post("/", async (req, res, next) => {
    //someting
})

// Get all of my notes
router.get("/", async (req, res, next) => {
    //someting
})

// Get a single note
router.get("/:id", async (req, res, next) => {
    //someting
})

