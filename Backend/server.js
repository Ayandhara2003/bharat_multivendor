import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dns from 'dns';

dotenv.config();
dns.setServers(['8.8.8.8', '1.1.1.1']);
const PORT = process.env.PORT_E || 4001;

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.URL_M)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log("Server started");
});