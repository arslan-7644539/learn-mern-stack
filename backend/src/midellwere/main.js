import cors from "cors";
import bodyParser from "body-parser";
import { app } from "../../server";
import cookieParser from "cookie-parser";

app.use(bodyParser.json());
app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(cookieParser());
