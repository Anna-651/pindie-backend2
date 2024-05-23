function cors(req, res, next) {
    const { origin } = req.headers;
    
    if (allowedCors.includes(origin)) { // Если это наш друг
        res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
        res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
    }
    
    next();
}

const allowedCors = [
    'http://localhost:3001',
    'http://localhost:3000'
  ];
module.exports = {cors};