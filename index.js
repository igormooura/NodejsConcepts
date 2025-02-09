const express = require('express');
const app = express();
const ModelMiddleware = require("./middleware/ModelMiddleware");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(ModelMiddleware);

app.get("/", ModelMiddleware, (req, res) => {
    res.send(`<h1>Bem-vindo ao Review de Node.js!</h1>
                <button onclick="window.location.href='/contact'">Go to contact</button>`);
});

app.get("/contact", ModelMiddleware, (req, res) => {
    res.send(`
        <form action="/contact" method="POST">
            <input type="email" name="email" required>
            <button type="submit">Send</button>
            <button type="button" onclick="window.location.href='/'">Comeback</button>
        </form>
    `);
});

app.post("/contact", ModelMiddleware, (req, res) => {

    res.send(`
        <h2>Email received: ${req.body.email}</h2>
        <a href="/contact">Back to contact</a>
    `);
});

app.use((req, res) => {
    res.status(404).send("Página não encontrada");
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));