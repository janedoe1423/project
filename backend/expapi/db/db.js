const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://melvin:melvin0011@cluster0.do87x1x.mongodb.net/startup_metrics", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;
