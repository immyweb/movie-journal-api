import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";
import config from "./config";
import { connect } from "./utils/db";
import movieRoutes from "./routes/routes";

export const app: Express = express();

app.disable("x-powered-by");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(movieRoutes);

export const start = async () => {
  try {
    await connect();
    app.listen(config.port, () => {
      console.log(
        `⚡️[server]: REST API on http://localhost:${config.port}/api`
      );
    });
  } catch (error) {
    console.error(error);
  }
};
