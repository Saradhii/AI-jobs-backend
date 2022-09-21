const { Schema, model} = require("mongoose");

const UserSchema = ({
   name:String,
   email:String,
   hash:String,
   description:String,
   profile:String,
});

const User = model("aiusers",UserSchema);

module.exports = User;