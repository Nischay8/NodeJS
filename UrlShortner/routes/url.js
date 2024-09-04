const express = require("express");

const { handelGenerateNewShortUrl } = require("../controller/url");

const router = express.Router();

router.post("/", handelGenerateNewShortUrl);

module.exports = router;
