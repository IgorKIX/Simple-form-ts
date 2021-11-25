import express from "express";
import cors from "cors";
import routes from "../routes";

function createServer() {
    const app = express();

    app.use(cors());
    app.use(express.json());

    routes(app);

    return app;
}

export default createServer;