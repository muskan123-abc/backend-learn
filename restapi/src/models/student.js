const mongoose = require("mongoose");
const validator = require("validator");

const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email id already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("invalid email");
      }
    },
  },
  phone: {
    type: Number,
    required: true,
    min: 10,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
});

// We will create new collection
const Student= new mongoose.model('Student',studentsSchema)
module.exports=Student