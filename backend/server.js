import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

const app = express();
const port = 3000;
// -------------------------
app.use(bodyParser.json());
app.use(cors());
// ------------------------

// app.get("/", (req, res) => {
//   res.send("<h1> Hello Word</h1>");
// });

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  console.log(
    `User Loged in succesfuly with this email:${email} and password:${password}`
  );

  if (email === "demo@gmail.com" && password === "1234567") {
    return res.status(200).send("Login Successfuly");
  } else {
    return res.status(401).send("Invalid Credentials");
  }
});

app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
