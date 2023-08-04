const db = require("../config/connection");
const { Account } = require("../models");
const accountSeeds = require("./accountSeeds.json");

db.once("open", async () => {
  try {
    await Account.deleteMany({});
    await Account.create(accountSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
