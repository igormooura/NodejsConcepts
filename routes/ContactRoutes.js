const express = require('express');
const router = express.Router();
const ModelMiddleware = require('../middleware/ModelMiddleware');

router.get("/", ModelMiddleware, (req, res) => {
    res.send(`
        <form action="/contact" method="POST">
            <input type="email" name="email" required>
            <button type="submit">Send</button>
            <button type="button" onclick="window.location.href='/'">Comeback</button>
        </form>
    `);
});

router.post("/", ModelMiddleware, (req, res) => {
    res.send(`
        <h2>Email received: ${req.body.email}</h2>
        <a href="/contact">Back to contact</a>
    `);
});

module.exports = router;