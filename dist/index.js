import express from "express";
const app = express();
const port = 8000;
app.get("/", (req, res) => {
    res.send("Hi from TypeScript");
});
app.get("/hi", (req, res) => {
    res.send("dev task working");
});
app.listen(port, () => {
    console.log(`Now Listening on port ${port}`);
});
//# sourceMappingURL=index.js.map