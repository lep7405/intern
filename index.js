const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: './.env' });
const PriceModel = require('./model/PriceModel');
const my = require('./xlsx1');
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.SERVER_PORT || 5000;

app.get("/data", async (req, res) => {
    const data1 = await PriceModel.find({
        NO: { $in: ["1","2","3","4","5","6","7",] }
    });
    const data2 = await PriceModel.find({
        NO: { $in: ["8","9","10","11","12",] }
    });
    const data3 = await PriceModel.find({
        NO: "13"
    });
    const data4 = await PriceModel.find({
        NO: "14"
    });
    const data5 = await PriceModel.find({
        NO: { $in: ["15","16","17"] }
    });
    const data6 = await PriceModel.find({
        NO: "18"
    });
  
    return res.status(201).send({data1,data2,data3,data4,data5,data6})
})

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('DB connection successfully!'))
    .catch((err) => new Error(err.message));

// my()
app.listen(PORT, async () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

