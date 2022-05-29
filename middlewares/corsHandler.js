const corsHandler = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];

  const allowedCors = [
    'http://movies.bulgakovd.nomoredomains.club',
    'https://movies.bulgakovd.nomoredomains.club',
    'https://api.nomoreparties.co/beatfilm-movies',
    'https://movies-explorer-front.herokuapp.com',
    'http://localhost:3000',
  ];

  const ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);

    res.status(res.statusCode).send();
    return;
  }

  next();
};

module.exports = { corsHandler };
