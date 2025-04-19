import express from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./src/db/DB.js";

dotenv.config();
export const app = express();
const port = process.env.PORT || 3000;

// ------------------------

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  console.log(
    `User Loged in succesfuly with this email:${email} and password:${password}`
  );

  if (email && password) {
    return res.status(200).send("Login Successfuly");
  } else {
    return res.status(401).send("Invalid Credentials");
  }
});

ConnectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at port:${port}`);
    });
    console.log(` Connected DB`);
  })
  .catch((error) => {
    console.log("MongoDB Connection Error ", error);
  });
