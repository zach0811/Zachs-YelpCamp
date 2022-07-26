const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 200; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "62d1b7e031dda5c192ce9b8b",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description: "Lorem ipsum",
      price,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ]
    },
      images: [
        {
            url: 'https://res.cloudinary.com/dllqasrlk/image/upload/v1653507750/YelpCamp/dxtmjazku08bieqn4y0z.jpg',
            filename: 'YelpCamp/dxtmjazku08bieqn4y0z'
        },
        {
            url: 'https://res.cloudinary.com/dllqasrlk/image/upload/v1653507750/YelpCamp/ur5l65tc8flwwnqhoera.jpg',
            filename: 'YelpCamp/ur5l65tc8flwwnqhoera'
        }
    ]
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
