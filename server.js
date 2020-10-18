const express = require("express");
const mongojs = require("mongodb");
const logger = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workittrack',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
const db = mongojs(databaseUrl, collections);

// morgan('combined', {
//     skip: function (req, res) { return res.statusCode < 400 }
//   })

db.on('error', function() {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

app.post("/submit", (req, res) => {
  console.log(req.body);

  db.exercises.insert(req.body, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

app.get("/all", (req, res) => {
  db.exercises.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

app.get("/find/:id", (req, res) => {
  db.exercises.findOne(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.post("/update/:id", (req, res) => {
  db.exercises.update(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    {
      $set: {
        title: req.body.title,
        note: req.body.note,
        modified: Date.now()
      }
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  db.exercises.remove(
    {
      _id: mongojs.ObjectID(req.params.id)
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.delete("/clearall", (req, res) => {
  db.exercises.remove({}, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send(response);
    }
  });
});

app.use(htmlroutes);
app.use(apiroutes);
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
