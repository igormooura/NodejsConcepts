const express = require('express');
const router = express.Router();
const ModelMiddleware = require('../middleware/ModelMiddleware');

router.route('/')
    .get( ModelMiddleware, (req, res) => {
    res.send(`<h1>Bem-vindo ao Review de Node.js!</h1>
            <button onclick="window.location.href='/contact'">Go to contact</button>`);
});

module.exports = router;