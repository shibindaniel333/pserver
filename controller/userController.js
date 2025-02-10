const users = require('../models/userModels')

exports.registerController = async (req, res) => {

    console.log("inside registerController");
    const { name, email, password, number } = req.body;
         
    try {
        

        const existingUser = await users.findOne({email})        
        if (!existingUser) {

            const newUser = new users({
                name: '', email: '', password: '', number: ''
            })
            await newUser.save()
            console.log("newuser");
            
            res.status(200).json(newUser)

        }
        else {
            res.status(200).json("user already exists")

          
        }


    } catch (error) {
        console.log("error inside registerController");
        res.status(401).json("internal server error")

    }



}

exports.loginController = (req, res) => {

    console.log("inside loginController");




}


