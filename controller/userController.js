const UserModel = require("../model/userModel");

const userController={
    register:async (req, res) => {

        try {
            const user = req.body;
            console.log(validator.isEmail(user.email))
            if (!validator.isEmail(user.email)) {
                throw new Error(`Invalid Email: ${user.email}`);
                
            }
            console.log(user)
            const usered = await UserModel.create(user)
            await usered.save()
            return res.status(201).send(usered)
        } catch (error) {
            return res.status(405).send("please enter a email")
        }
    }
}
module.exports=userController