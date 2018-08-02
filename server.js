const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const ObjectID = mongodb.ObjectID;
const cors = require('cors');
const EMPLOYEES_COLLECTION = "employees";
const COMPANIES_COLLECTION = "companies"

const app = express();
app.use(bodyParser.json());
// CORS is required for resource sharing in development
// app.use(cors());

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
let db;

// Connect to MLAB or local db
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/empdb_dev", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }


  db = client.db();
  console.log("Database connection ready");

  // Initialization
  let server = app.listen(process.env.PORT || 8080, function () {
    let port = server.address().port;
    console.log("App now running on port", port);
  });
});

// Generic error handler
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({
    "error": message
  });
}

/*  "/api/employees"
 *    GET: finds all employees
 *    POST: creates a new employee
 */

app.get("/api/employees", function (req, res) {
  db.collection(EMPLOYEES_COLLECTION).find({}).toArray(function (err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get employees.");
    } else {
      res.status(200).json(docs);
    }
  });
});
/*  "/api/companies"
 *    GET: finds all companies
 */

app.get("/api/companies", function (req, res) {
  db.collection(COMPANIES_COLLECTION).find({}).toArray(function (err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get companies.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/employees", function (req, res) {
  let newEmployee = req.body;
  console.log(`The value of newEmployee is ${newEmployee}`)
  db.collection(EMPLOYEES_COLLECTION).insertOne(newEmployee, function (err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new employee.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });


  // app.get("/api/companies", function (req, res) {
  //   db.collection(COMPANIES_COLLECTION).find({}).toArray(function (err, docs) {
  //     if (err) {
  //       handleError(res, err.message, "Failed to get companies.");
  //     } else {
  //       res.status(200).json(docs);
  //     }
  //   });
  // });

});
