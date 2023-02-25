const express=require("express")
const app=express()
const userModel = require("./model");
const username = "foodapp";
const password = "soni";
//const cluster = "Cluster0";
const dbname = "FoodData";
const mongoos=require("mongoose")
mongoos.connect(`mongodb+srv://${username}:${password}@cluster0.zpynabl.mongodb.net/${dbname}?retryWrites=true&w=majority`,

    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      }
);
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });

// app.get("/",(req,res) =>{
// try{
//     res.json(
//         {
//             status:"sucess",
        
//         }
//     )

// }
// catch{
//     res.json(
//         {
//             status:"sucess fail"
//         }
//     )
// }
// }
// )
app.post("/add_user", async (request, response) => {
    const user = new userModel(request.body);
  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});
app.listen(3100,()=>{console.log("up")})