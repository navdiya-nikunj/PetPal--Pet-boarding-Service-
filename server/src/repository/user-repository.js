import User from '../models/userModel.js';
import { ApiError } from '../utils/ApiError.js';

const createUser = async (email, password, role) => {
    try {
        const newUser = new User({ email, password, role });
        if (!newUser) {
            throw new ApiError(400, 'User not created');
        }
        await newUser.save();
        return newUser;
    } catch (error) {
        if (error.message === 'User not created') {
            throw new ApiError(400, error.message);
        } else {
            throw new ApiError(500, error.message);
        }
    }
};

const findUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new ApiError(404, 'User not found');
        }
        return user;
    } catch (error) {
        if (error.message === 'User not found') {
            throw new ApiError(404, error.message);
        } else {
            throw new ApiError(500, error.message);
        }
    }
};

const userRepository = {
    createUser,
    findUserByEmail
};

export default userRepository;