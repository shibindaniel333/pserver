const users = require('../models/userModels')
const jwt =require('jsonwebtoken')

exports.registerController = async (req, res) => {
    console.log("inside registerController");
    console.log(req.body); 

    const { name, email, password, number } = req.body;

    try {
        const existingUser = await users.findOne({ email });

        if (existingUser) {
            return res.status(409).json("User already exists. Please log in.");
        }

        const newUser = new users({
            name, email, password, number
        });

        await newUser.save();
        res.status(201).json(newUser); 

    } catch (error) {
        console.error("Error inside registerController:", error);
        res.status(500).json({ error: error.message }); 
    }
};


exports.loginController = async(req, res) => {

    console.log("inside loginController");
    const{email,password}=req.body
    console.log(email,password);
    try{
          const existingUser =await users.findOne({email,password})
          if(existingUser){
            const token =jwt.sign({userId:existingUser._id},process.env.JWTTOKEN)
            res.status(200).json({
                user:existingUser,token
            })
          }else{
            res.status(404).json("incorrect email / password")
          }
    }catch(err){
        res.status(401).json(err)
        
    }




}

exports.getAllUsers=async(req,res)=>{
    console.log("inside getAllUsers ");
    try{

        const allUsers=await users.find()
        res.status(200).json(allUsers)

    }catch(err){
        console.log("Error inside getAllUsers:",err);
        res.status(401).json(err)
    }

    
}




