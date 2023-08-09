const db = require("../config/connection");
const { Account, Medicine, Adoption } = require("../models");
const accountSeeds = require("./accountSeeds.json");
const medicineSeeds = require("./medicineSeeds.json");
const adoptionSeeds = require("./adoptionSeeds.json");

db.once("open", async () => {
  try {
    await Account.deleteMany({});
    await Account.create(accountSeeds);
    await Medicine.deleteMany({});
    await Medicine.create(medicineSeeds);
    await Adoption.deleteMany({});
    await Adoption.create(adoptionSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
