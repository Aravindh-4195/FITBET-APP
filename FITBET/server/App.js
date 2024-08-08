const express = require("express");
const session = require("express-session");
const cors = require("cors");
const multer = require("multer");
const app = express();
const { accounts } = require("./model/mongo");
const { gymProfiles } = require("./model/mongo");
const { userdetails } = require("./model/mongo");
const { trainerDetails } = require("./model/mongo");
const { register } = require("./model/mongo");
const { productFeedback } = require("./model/mongo");

// const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
  {
      origin: ["https://fitbet-app-front.vercel.app"],
      methods: ["POST", "GET"],
      credentials: true
  }
));
// app.use(
//   session({
//     secret: "aravindh",
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: 36000000 },
//   })
// );
app.get("/", (req, res) => {
  res.json("Hello");
});

app.listen(8000, () => {
  console.log("port connected");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./components/gymCenter/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });
app.post("/gym/registerGym", upload.single("photo"), async (req, res) => {
  const data_gymReg = req.body;
  console.log(req.body);
  data_gymReg["photo"] = req.file.filename;
  // console.log(data);
  try {
    await gymProfiles.insertMany([data_gymReg]);
    res.json("ok");
  } catch (e) {
    res.send({ data: "no" });
  }
});

app.post("/gym/getGyms", async (req, res) => {
  // console.log(req.sessionID);
  // const userId = req.session.userId;
  // console.log(userId);
  // var avgRating = [];
  // console.log(req.body);
  try {
    const data_getGym = await gymProfiles.find(req.body).exec();
    // console.log(data_getGym);
    var avgRatings = [];

    for (const data of data_getGym) {
      if (
        (await productFeedback.findOne({ product_id: data.phone })) === null
      ) {
        continue;
      } else {
        const avgRating = await productFeedback
          .aggregate([
            {
              $match: {
                product_id: data.phone, // Assuming product_id and data.phone are of the same type
              },
            },
            {
              $group: {
                _id: "$product_id",
                avgRating: { $avg: "$rating" },
              },
            },
          ])
          .exec();
        avgRatings.push(avgRating[0].avgRating.toFixed(1));
      }

      // console.log(avgRatings);
    }

    // console.log({ data: data_getGym, rating: avgRatings });
    res.send({ data: data_getGym, rating: avgRatings });
  } catch (e) {
    console.log(e);
  }
});

app.post("/register", async (req, res) => {
  try {
    await userdetails.insertMany(req.body);
    res.json("ok");
  } catch (e) {
    if (e.code === 11000) {
      // Duplicate key error, handle accordingly
      // console.log("Duplicate key error:", e.keyValue);
      res.json("Duplicate key error");
    } else {
      // Other validation errors
      // console.error(e);
      res.status(400).json({ error: "Validation error" });
    }
  }
});

app.post("/login", async (req, res) => {
  // console.log(req.body.phone);
  // const { phone, password } = req.body;
  // console.log("login", req.sessionID);
  // req.session.userId = req.body.phone;
  // console.log(req.session.userId);
  const check_exist = await userdetails.findOne({ phone: req.body.phone });
  if (check_exist) {
    const check = await userdetails.findOne({
      phone: req.body.phone,
      password: req.body.password,
    });
    if (check) {
      res.json("data found");
    } else {
      res.json("combo false");
    }
  } else {
    res.json("data not found");
  }
});

// trianer registration
const storage_trainer = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "FITBET/client/src/components/trainer/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload_trainer = multer({ storage: storage_trainer });

app.post(
  "/trainer/trainerReg",
  upload_trainer.single("photo"),
  async (req, res) => {
    // console.log(req.body);
    console.log("hello");
    const data_trainerReg = req.body;
    data_trainerReg.photo = req.file.filename;
    // console.log(data);
    try {
      await trainerDetails.create(data_trainerReg);
      res.json("inserted");
    } catch (e) {
      if (e.code === 11000) {
        res.json("duplicate key");
      }
      console.log(e);
      res.json("not inserted");
    }
  }
);
app.post("/trainer/getTrainers", async (req, res) => {
  try {
    const data_getTrainers = await trainerDetails.find(req.body);

    // console.log(data);
    res.send({ data: data_getTrainers });
  } catch (e) {
    console.log(e);
  }
});

app.post("/gym/gymCenter", async (req, res) => {
  // console.log(req.session.userId);

  const date = new Date();
  const timeStamp =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const date_reg =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

  const reg_data = {
    ...req.body,
    time: timeStamp,
    date: date_reg,
    status: true,
  };
  // console.log(reg_data);
  try {
    const check_reg = await register.findOne({
      user_id: req.body.user_id,
      product_id: req.body.product_id,
      status: true,
    });
    if (check_reg) {
      res.json("already registered");
    } else {
      await register.create(reg_data);
      res.json("registered");
    }
  } catch (e) {
    console.log(e);
  }
});

// get reviews

app.post("/gym/reviews", async (req, res) => {
  // console.log(req.body);
  try {
    const result = await productFeedback.find(req.body);
    // console.log(result);
    res.send({ data: result });
  } catch (e) {
    res.send({ data: "Error" });
  }
});

//  trainer booking
app.post("/trainer/trainer", async (req, res) => {
  // console.log(req.session.userId);

  const date = new Date();
  const timeStamp =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const date_reg =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

  const reg_data = {
    ...req.body,
    time: timeStamp,
    date: date_reg,
    status: true,
  };
  // console.log(reg_data);
  try {
    const check_reg = await register.findOne(req.body);
    if (check_reg) {
      res.json("already registered");
    } else {
      await register.create(reg_data);
      res.json("registered");
    }
  } catch (e) {
    console.log(e);
  }
});

app.post("/user", async (req, res) => {
  console.log(req.body);
  const { formData, phone, output } = req.body;
  // console.log(req.body);
  // console.log(output);
  // console.log(phone);
  // console.log(user_id, output);
  // console.log()
  // console.log(phone);
  console.log(output);
  try {
    if (output) {
      const data_userAccount = await userdetails.findOne({ phone: phone });
      res.send({ data: data_userAccount });
    } else {
      // console.log({ input });

      console.log(phone);
      console.log(formData);
      await userdetails.findByIdAndUpdate({ phone: phone }, formData, {
        runValidators: true,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

app.post("/user/currentSubscriptions", async (req, res) => {
  // console.log(req.body);
  const { getReg } = req.body;
  var respond = [];
  // console.log(req.body);
  // const { productId } = req.body;

  // console.log(getReg);
  try {
    if (getReg) {
      const get_data = { user_id: req.body.user_id, status: true };
      // console.log(get_data);
      const data = await register.find(get_data);
      // console.log("data", data);
      res.send({ data: data });
    } else {
      // console.log(req.body.product_id);
      const productIds = req.body.product_id;
      const length = productIds.length;
      productIds.map(async (data, index) => {
        // console.log(data);
        var get_data = await gymProfiles.findOne({ phone: data });
        // console.log(get_data);
        if (get_data) {
          respond = [...respond, { get_data, profile: "gym" }];
        } else {
          get_data = await trainerDetails.findOne({ phone: data });
          // get_data["profile"] = "trainer";
          respond = [...respond, { get_data, profile: "trainer" }];
        }
        if (index === length - 1) {
          // console.log(respond);
          res.send({ data: respond });
        }
      });
      // console.log("hello", respond);
    }
  } catch (e) {
    console.log(e);
  }
});

// current history

app.post("/user/orderHistory", async (req, res) => {
  console.log(req.body);
  const { getReg } = req.body;
  var respond = [];
  // console.log(req.body);
  // const { productId } = req.body;

  // console.log(getReg);
  try {
    if (getReg) {
      const get_data = { user_id: req.body.user_id, status: false };
      // console.log(get_data);
      const data = await register.find(get_data);
      // console.log("data", data);
      res.send({ data: data });
    } else {
      // console.log(req.body.product_id);
      const productIds = req.body.product_id;
      const length = productIds.length;
      productIds.map(async (data, index) => {
        // console.log(data);
        var get_data = await gymProfiles.findOne({ phone: data });
        // console.log(get_data);
        if (get_data) {
          respond = [...respond, { get_data, profile: "gym" }];
        } else {
          get_data = await trainerDetails.findOne({ phone: data });
          // get_data["profile"] = "trainer";
          respond = [...respond, { get_data, profile: "trainer" }];
        }
        if (index === length - 1) {
          // console.log(respond);
          res.send({ data: respond });
        }
      });
      // console.log("hello", respond);
    }
  } catch (e) {
    console.log(e);
  }
});
app.post("/bussiness/login", async (req, res) => {
  try {
    const exist = await gymProfiles.findOne(req.body);
    if (exist) {
      res.send({ data: "exist", profile: "gym" });
      // localStorage.setItem("profile", "gym");
    } else {
      const trainerExist = await trainerDetails.findOne(req.body);
      // console.log(trainerExist);
      // localStorage.setItem("profile", "trainer");
      if (trainerExist) {
        res.send({ data: "exist", profile: "trainer" });
      } else {
        res.send({ data: "does no exist" });
      }
    }
  } catch (e) {
    res.send({ data: "combo false" });
  }
});

// retrieving the gym details
app.post("/bussiness/GymAccount", async (req, res) => {
  // console.log(req.body);
  try {
    const gymDetails = await gymProfiles.findOne({ phone: req.body.user_id });
    // console.log(gymDetails);
    // res.json(gymDetails);
    res.send({ data: gymDetails });
  } catch (e) {
    console.log(e);
  }
});

// retrieving the trainer details

app.post("/bussiness/trainer/AccountDetails", async (req, res) => {
  // console.log(req.body);
  try {
    const trainerdetails = await trainerDetails.findOne({
      phone: req.body.user_id,
    });
    console.log(trainerDetails);
    res.send({ data: trainerdetails });
  } catch (e) {
    console.log(e);
  }
});

app.post("/bussiness/currentSubscriptions", async (req, res) => {
  // console.log(req.body);
  var respond = [];
  try {
    if (req.body.getReg) {
      const gymInfo = await register.find({
        product_id: Number(req.body.user_id),
        status: true,
      });
      // console.log(gymInfo);
      res.send({ data: gymInfo });
    } else {
      // const usersInfo = await userdetails.findOne({ phone: req.body.user_id });
      const userIds = req.body.user_id;
      // console.log(userIds);
      const length = userIds.length;
      userIds.map(async (data, index) => {
        // console.log(data);
        const get_data = await userdetails.findOne({ phone: data });
        // console.log(get_data);
        respond = [...respond, get_data];
        if (index === length - 1) {
          // console.log(respond);
          res.send({ data: respond });
        }
      });
    }
  } catch (e) {
    console.log(e);
  }
});

// feedback
app.post("/user/feedback", async (req, res) => {
  // console.log(req.body);
  try {
    const check_reviewed = await register.findOne({
      user_id: req.body.user_id,
      product_id: req.body.product_id,
    });
    console.log(check_reviewed);
    if (check_reviewed.reviewed === true) {
      res.send({ data: "already reviewed" });
    } else {
      await productFeedback.insertMany([req.body]);
      await register.updateOne(
        {
          user_id: req.body.user_id,
          product_id: req.body.product_id,
        },
        { $set: { reviewed: true } }
      );
      // console.log(feedbackResult);

      res.send({ data: "ok" });
    }
  } catch (e) {
    res.send({ data: "failed" });
  }
});

// search
app.get("/search", async (req, res) => {
  const result = await gymProfiles.distinct("city");
  // console.log(result);
  res.send({ data: result });
});

// cancellation of subscriptions
app.post("/user/subscriptionCancel", async (req, res) => {
  console.log(req.body);
  try {
    const result = await register.updateMany(
      {
        user_id: req.body.user_id,
        product_id: req.body.product_id,
      },
      { $set: { status: false } }
    );
    // console.log(result);
    res.send({ data: "success" });
  } catch (e) {
    console.log("unsuccess");
    res.send({ data: "unsuccess" });
  }
});
// bussiness user profile

app.post("/bussiness/user", async (req, res) => {
  // console.log(req.body);
  try {
    const result = await trainerDetails.findOne(req.body);
    // console.log(result.photo);
    res.send({ data: result });
  } catch (e) {
    res.send({ data: "unsuccess" });
  }
});

app.get("/trainer/search", async (req, res) => {
  const result = await trainerDetails.distinct("city");
  // console.log(result);
  res.send({ data: result });
});
