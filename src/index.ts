import app from "./app";

app.get("/", (req, res) => {
  res.send("Hello");
});

const port = process.env.PORT || 9005;

app.listen(port, () => console.log(`http://localhost:${port}`));
