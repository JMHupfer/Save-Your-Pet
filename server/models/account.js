const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const accountSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  adoptions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Adoption",
    },
  ],
  medicines: [
    {
      type: Schema.Types.ObjectId,
      ref: "Medicine",
    },
  ],
});

accountSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

accountSchema.methods.isCorrectPassword = async function (password) {
  if (password === this.password) {
    return true;
  }
  return bcrypt.compare(password, this.password);
};

const Account = model("Account", accountSchema);

module.exports = Account;
