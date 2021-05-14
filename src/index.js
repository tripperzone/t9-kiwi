import winston from 'winston';
import express from 'express';
import cors from 'cors';
import config from 'config';
import logging from './startup/logging';
import routes from './startup/routes';

const app = express();

logging();
routes(app);

app.use(cors());

const port = process.env.PORT || config.get("port");
const server = app.listen(port, () => winston.info(`Listening on port ${port}`));

module.exports = server;