import User from "../model/userSchema.js"

export const userSignUp = async (request, response) => {
    try {
        const exist = await User.findOne({ username: request.body.username });
        if(exist) {
            return response.status(401).json('User already exist');
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json('has been successfully registered');
        
    } catch (error) {
       console.log('Error: ', error.message);
    }
}