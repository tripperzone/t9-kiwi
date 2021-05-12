import winston from 'winston';

function errorHandling(err, req, res, next) {
    winston.error(err.message, err);
    res.status(500).send('Something went wrong.');
}

export default errorHandling;