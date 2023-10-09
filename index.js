import express from "express";
const app = express();
const port = 3000;

// Middleware to serve static files from the "public" directory
app.use(express.static("public"));

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();
  let type = "a weekday";
  let adv = "It is time to work hard";

  if (day === 0 || day === 6) {
    type = "a weekend";
    adv = "It is time to Rest";
  }

  // Get the current date and time
  const currentDate = today.toDateString();
  const currentTime = today.toLocaleTimeString();

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
    currentDate: currentDate,
    currentTime: currentTime,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
