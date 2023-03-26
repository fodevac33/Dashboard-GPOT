import express, {Express, Request, Response} from "express";

const app: Express = express()

const port = 8000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hi from TypeScript");
});

app.get("/hi", (req: Request, res: Response) => {
    res.send("dev task working");
});


app.listen(port, () => {
    console.log(`Now Listening on port ${port}`);
});
