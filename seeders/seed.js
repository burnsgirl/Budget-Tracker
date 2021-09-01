var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect (
    process.env.MONGODB_URI || "mongodb://localhost/budget",
    { useNewUrlParser: true }
);

var transactionSeed = [
    {
        name: "Pet food",
        value: 50,
        date: new Date(Date.now())
    },
    {
        name: "Couch",
        value: 700,
        date: new Date(Date.now())
    },
    {
        name: "Car",
        value: 25,000,
        date: new Date(Date.now())
    },
    {
        name: "Car insurance",
        value: 300,
        date: new Date(Date.now())
    }
];

db.transaction.deleteMany({})
    .then(() => db.Transaction.collection.insertMany(transactionSeed))
    .then(data => {
        process.exit(0);
    }) .catch (error => {
        console.error(err);
        process.exit(1);
    });