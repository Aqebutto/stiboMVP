const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

// cors is in dev mode - change url accesses before going into prod
app.use(cors());

// routes
require("./routes/user.routes")(app);

// set port, listen for requests envConfig.PORT ||
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
