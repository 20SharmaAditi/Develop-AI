const express = require("express");

const {
  addPromptData,
  getPromptData,
  getOnePromptData,
} = require("../../Controllers/Prompt.controller");

const router = express.Router();

router.get("/promptData" , getPromptData);


router.get("/promptData/:id", getOnePromptData);

router.post("/promptData" , addPromptData);

module.exports = router;