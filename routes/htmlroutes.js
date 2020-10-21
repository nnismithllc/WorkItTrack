var path = require("path");
const router = require("express").Router()


// module.exports = function (app){
    router.get("/", function(req,res){
        console.log("home page")
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    
    router.get("/exercise", function (req,res){
        console.log("app")
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    

    router.get("/stats", function(req, res){
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

// }
 module.exports=router
  
//   app.post("/submit", (req, res) => {
//     console.log(req.body);
  
//     db.exercises.insert(req.body, (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     });

  
//   app.get("/all", (req, res) => {
//     db.exercises.find({}, (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.json(data);
//       }
//     });
//   });
  
//   app.get("/find/:id", (req, res) => {
//     db.exercises.findOne(
//       {
//         _id: mongojs.ObjectId(req.params.id)
//       },
//       (error, data) => {
//         if (error) {
//           res.send(error);
//         } else {
//           res.send(data);
//         }
//       }
//     );
//   });
  
//   app.post("/update/:id", (req, res) => {
//     db.exercises.update(
//       {
//         _id: mongojs.ObjectId(req.params.id)
//       },
//       {
//         $set: {
//           title: req.body.title,
//           note: req.body.note,
//           modified: Date.now()
//         }
//       },
//       (error, data) => {
//         if (error) {
//           res.send(error);
//         } else {
//           res.send(data);
//         }
//       }
//     );
//   });
  
//   app.delete("/delete/:id", (req, res) => {
//     db.exercises.remove(
//       {
//         _id: mongojs.ObjectID(req.params.id)
//       },
//       (error, data) => {
//         if (error) {
//           res.send(error);
//         } else {
//           res.send(data);
//         }
//       }
//     );
//   });
  
//   app.delete("/clearall", (req, res) => {
//     db.exercises.remove({}, (error, response) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(response);
//       }
//     });
//   });