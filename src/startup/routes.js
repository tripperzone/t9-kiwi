import express from "express";
import suggestions from "../routes/suggestions";
import error from "../middleware/error";
import cors from "cors";

export default function(app) {
  app.use(express.json());
  app.use(cors());
  app.use("/services/suggestions", suggestions);
  app.use(error);
};