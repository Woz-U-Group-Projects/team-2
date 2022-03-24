const app = require("./backend/app");

const port = process.env.PORT || 3000;
  console.log(`Your port is ${port}`);

app.listen(process.env.PORT || 3000);


