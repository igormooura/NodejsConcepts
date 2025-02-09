const express = require('express');
const app = express();
const homeRoutes = require('./routes/HomeRoutes');
const contactRoutes = require('./routes/ContactRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRoutes);
app.use("/contact", contactRoutes);

app.use((req, res) => {
    res.status(404).send("not found");
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));