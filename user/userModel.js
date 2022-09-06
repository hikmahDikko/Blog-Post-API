const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    fullname : {
        type: String,
        required : true
    },
    username : {
        type: String,
        required : true
    },
    password : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
    },
    phoneNumber : {
        type : String,
        require : true,
    } 
})

const projectModel = mongoose.model("ProjectModel", projectSchema);

module.exports = projectModel;