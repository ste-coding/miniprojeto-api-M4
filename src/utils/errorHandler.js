const errorHandler = (err, req, res, next) => {
    console.error('Erro:', err.stack);
    res.status(500).json({ message: 'Ocorreu um erro interno no servidor.' });
};

module.exports = errorHandler;
