const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    id : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    article : {
        type : String,
        required : true
    },
    comment : {
        type : String,
    }
})

module.exports = mongoose.model("Blog Post", blogSchema);