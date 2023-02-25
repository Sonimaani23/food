const mongoos=require("mongoose")
const userSchema=mongoos.Schema({
    name: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        default: 0,
      },
})
const user=mongoos.model("user",userSchema)
module.exports=user