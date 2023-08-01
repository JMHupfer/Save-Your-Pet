const db = require("../config/connection");
const { Profile } = require("../models");
const accountSeeds = require("./accountSeeds.json");

db.once("open", async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(accountSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
