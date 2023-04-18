import { Server } from "./server";
import * as express from "express";
import * as mongoose from "mongoose";

let server = new Server().app;

let port = process.env.PORT || 5000;

const mainServer = server.listen(port, () => {
    console.log("server is running at port 5000");
  });
