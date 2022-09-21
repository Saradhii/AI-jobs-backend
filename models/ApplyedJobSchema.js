const { Schema, model} = require("mongoose");

const JobSchema = ({
    userid:String,
    company: String,
    experiance: String,
    salary: String,
    img: String,
    role: String,
});

const AJOB = model("apliedaijobs",JobSchema);

module.exports = AJOB;