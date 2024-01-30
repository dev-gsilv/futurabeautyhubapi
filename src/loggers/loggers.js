const morgan = require('morgan');
const path = require('path');
const rfs = require('rotating-file-stream');

function loggerMorgan(app) {
    // Cria um arquivo de log diariamente e direciona o output para src/loggers/log/acess.log
    const accessLogStream = rfs.createStream('access.log', {
        interval: '1d',
        path: path.join(__dirname, 'log'),
    });
    // Cria o logger Morgan usando o formato 'short'
    // :remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms
    app.use(morgan('short', { stream: accessLogStream }));
}

function loggerTerminal(app) {
    // Logger para o terminal do servidor
    app.use((req, res, next) => {
        console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
        next();
    });
}

module.exports = { loggerMorgan, loggerTerminal };
