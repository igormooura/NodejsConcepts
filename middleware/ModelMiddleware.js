function ModelMiddleware(req, res, next) {
    console.log(`Middleware: Tentando acessar rota -> ${req.url}`);
    console.log(`Método HTTP utilizado: ${req.method}`);
    console.log(`Horário do acesso: ${new Date().toLocaleTimeString()}`);
    next(); 
}

module.exports = ModelMiddleware;

