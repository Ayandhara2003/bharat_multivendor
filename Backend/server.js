import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dns from 'dns';
import banneRoute from "../Backend/route/banner.route.js"

dotenv.config();
dns.setServers(['8.8.8.8', '1.1.1.1']);
const PORT = process.env.PORT_E || 4001;

const app = express();
app.use(express.json());

app.get("/bn", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Banner</title>
        </head>
        <body>
            <img src="https://res.cloudinary.com/gjkjm6im/image/upload/v1785773451/copy_of_chatgpt_image_aug_3_2026_08_32_54_pm_gq0wdy.png" width="100%" alt="Banner">
        </body>
        </html>
    `);
});

mongoose
  .connect(process.env.URL_M)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


  app.use("/banner", banneRoute)
app.listen(PORT, () => {
  console.log("Server started");
});

