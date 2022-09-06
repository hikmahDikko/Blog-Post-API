const Project = require("../user/userModel")

exports.createUser = async (req, res) => {
    const {fullname, username, email, password, phoneNumber} = req.body;
    const signUp = await Project({fullname, username, email, password, phoneNumber});
    if(signUp){
        signUp.save(); 
        return res.status(200).send({
            status : true,
            message : "Successfully Created an Account"
        });
    }else{
        return res.status(404).send({
            status : true,
            message : "Please enter valid details"
        });
    } 
}

exports.getUser = async (req, res) => {
    const users = await Project.find();
    res.status(200).json({
        status : true,
        data : {
            users
        }
    })
}

exports.updateUser = async (req, res) => {
    const {id} = req.headers;
    const reset = await Project.findById(id);
    

    if(reset){
        reset.email = req.body.email;
        reset.phoneNumber = req.body.phoneNumber;
        reset.password = req.body.password;
        reset.fullname = req.body.fullname;
        reset.username = req.body.username;
        reset.save();
        return res.status(201).send({
            status : true,
            message : "Data successfully changed."
        });
    }else {
        return res.status(404).send({
            status : false,
            message : "Invalid input"
        });
    }

}

exports.deleteUser = async (req, res) => {
    const {id} = req.query;
    const del = await Project.findByIdAndDelete(id);

    if(del) {
        return res.status(201).send({
            status : true,
            message : "Account successfully deleted"
        });
    }else{
        return res.status(404).send({
            status : false,
            message : "Account cannot be fetched"
        })
    }

}