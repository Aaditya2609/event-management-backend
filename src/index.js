import express,{urlencoded} from 'express';
import { router as VolunteerRouter } from './routers/volunteer.routers';
import { router as EventRouter } from './routers/event.routers';

import cors from "cors";
import * as dotenv from "dotenv";
import { initializeDatabase } from './db/db.connection';
dotenv.config();

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(urlencoded({ extended: true }));
app.use(cors({
  origin:"*",
  methods:["GET","POST","DELETE"]
}));
initializeDatabase();
const port=process.env.port||3000;

app.use("/api/volunteer",VolunteerRouter)
app.use("/api/event",EventRouter)

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});


app.listen(port, () =>
  console.log('Example app listening on port', port),
);