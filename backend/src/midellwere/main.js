import cors from "cors";
import bodyParser from "body-parser";
import { app } from "../../server";

app.use(bodyParser.json());
app.use(cors());
