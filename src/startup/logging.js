import winston from "winston";
require("express-async-errors");

export default function() {
  winston.exceptions.handle(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: "exceptions.log" })
  );

  process.on("unhandledRejection", ex => {
    throw ex;
  });

  winston.add(new winston.transports.Console());
  winston.add(new winston.transports.File({ filename: "logfile.log" }));
};