const express = require("express");
const { sequelize } = require("./config");
const User = require("./models/User");

const app = express();
const port =
  process.env.NODE_ENV === "production"
    ? 80
    : process.env.NODE_ENV === "staging"
    ? process.env.PORT || 5001
    : process.env.PORT || 5000;

const urlApp =
  process.env.NODE_ENV === "production"
    ? process.env.URLAPP
    : process.env.NODE_ENV === "staging"
    ? `${process.env.STAGING_URL}`
    : `${process.env.HOST}:${port}`;

console.log(`URL App: ${urlApp}`);

// Middleware
app.use(express.json());

// Routes
app.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.post("/users", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected...");
    sequelize.sync({ alter: true }).then(() => {
      app.listen(port, () => {
        console.log(`Server running on port ${port}`);
      });
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
