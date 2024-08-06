const mongoose = require("mongoose");
// const { default: feedBack } = require("./userDashboard/feedback");
mongoose
  .connect("mongodb+srv://1mareeduaravindh1:mongo123@cluster0.esgzz6v.mongodb.net/form?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("connection successful");
  })
  .catch(() => {
    console.log("connection unsuccesstion");
  });

const schema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

// gym center schema
const gymSchema = new mongoose.Schema({
  centerName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  flat_no: {
    type: String,
    require: true,
  },
  landmark: {
    type: String,
    require: true,
  },
  street: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  navigate: {
    type: String,
    require: true,
  },
  timings: {
    type: String,
    require: true,
  },
  photo: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
});

// user Details Schema

// registered  Users Schema
const registered = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
  },
  product_id: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  reviewed: {
    type: Boolean,
  },
});

const userDetails = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: Number,
    require: true,
    unique: true,
  },
  gender: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  flat_no: {
    type: String,
    require: true,
  },
  landmark: {
    type: String,
    require: true,
  },
  street: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  navigate: {
    type: String,
    require: true,
  },
  photo: {
    type: String,
    require: true,
  },
});

const trainerAccounts = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  yofe: {
    type: String,
    required: true,
  },
  // certification: {
  //   type: String,
  //   required: true,
  // },
  rep: {
    type: String,
    required: true,
  },
  specilization: {
    type: [String],
    required: true,
  },
  timings: {
    type: String,
    required: true,
  },
  train_to: {
    type: [String],
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
});

const userFeedback = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
  },
  product_id: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  detailed: {
    type: String,
    required: true,
  },
});
const accounts = mongoose.model("accounts", schema);
module.exports = { accounts };

// const gymAccounts = mongoose.model("gymAccounts", gymSchema);
// module.exports = { gymAccounts };

const userdetails = mongoose.model("userdetails", userDetails);
// module.exports = { userdetails };

const gymProfiles = mongoose.model("gymProfiles", gymSchema);
// module.exports = { gymProfiles };

const trainerDetails = mongoose.model("trainerDetails", trainerAccounts);
// module.exports = { trainerDetails };

// const userdetails = mongoose.model("userdetails", userDetails);
// const gymProfiles = mongoose.model("gymProfiles", gymSchema);
// const trainerDetails = mongoose.model("trainerDetails", trainerAccounts);
const register = mongoose.model("register", registered);

const productFeedback = mongoose.model("productFeedback", userFeedback);

module.exports = {
  userdetails,
  gymProfiles,
  trainerDetails,
  register,
  productFeedback,
};
