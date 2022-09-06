const Blog = require("../blog/blogModel")
const Project = require("../user/userModel")

exports.createBlog = async (req, res) => {
    const id = req.body.id;
    const confirmId = await Project.findById(id);
    const { title, username, article } = req.body;
   
    if(confirmId){
        const create = await Blog({ id, title, username, article });
        create.save(); 
        return res.status(200).send({
            status : true,
            meassage : "Successfully Created a Blog"
        });
    }else{
        return res.status(404).send({
            status : false,
            meassage : "Please enter valid details to upload a blog else create a new account"
        });
    } 
}

exports.getUserB = async (req, res) => {
    const blogs = await Blog.find();
    res.status(200).json({
        status : true,
        data : {
            blogs
        }
    })
}

exports.updateUserB = async (req, res) => {
    const {id} = req.headers;
    const reset = await Blog.findById(id);
    

    if(reset){
        reset.title = req.body.title;
        reset.username = req.body.username;
        reset.article = req.body.article;
        reset.save();
        return res.status(201).send({
            status : true,
            message : "Post successfully changed."
        })
    }else {
        return res.status(404).send({
            status : false,
            message : "Invalid input"
        })
    }

}

exports.deleteUserB = async (req, res) => {
    const {id} = req.query;
    const delBlog = await Blog.findByIdAndDelete(id);

    if(delBlog) {
        return res.status(201).send({
            status : true,
            message : "Post successfully deleted"
        });
    }else{
        return res.status(404).send({
            status : false,
            message : "Post cannot be fetched"
        })
    }

}