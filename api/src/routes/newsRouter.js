const express = require("express");
const { getNews } = require("../controllers/news/getNews");
const newsRouter = express.Router();

newsRouter.get("",getNews)

module.exports = newsRouter;