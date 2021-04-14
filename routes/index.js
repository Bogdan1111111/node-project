var express = require('express');
var path = require('path');
var router = express.Router();

/* GET SPA. */
router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

module.exports = router;