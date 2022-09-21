const { Schema, model} = require("mongoose");

const JobSchema = ({
    company: String,
    experiance: String,
    salary: String,
    img: String,
    role: String,
});

const JOB = model("aijobs",JobSchema);

module.exports = JOB;