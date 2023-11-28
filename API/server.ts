import { App } from "./app";

const port = process.env.PORT || 3003;

const app = new App(port);

app.start();