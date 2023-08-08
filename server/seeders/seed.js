const db = require("../config/connection");
const { Account, Medicine } = require("../models");
const accountSeeds = require("./accountSeeds.json");
const medicineSeeds = require("./medicineSeeds.json")

db.once("open", async () => {
  try {
    await Account.deleteMany({});
    await Account.create(accountSeeds);
    await Medicine.deleteMany({});
    await Medicine.create(medicineSeeds)

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
