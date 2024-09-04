import userRepository from '../repository/user-repository.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/ApiError.js';
import { TOKEN_SECRET } from '../config/serverConfig.js';

const createUser = async (email, password, role) => {
    try {
        const response = await userRepository.createUser(email, password, role);
        return response;
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};

const authenticateUser = async (email, password) => {
    try {
        const user = await userRepository.findUserByEmail(email);
        if (!user) {
            throw new Error('User not found');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }
        const token = jwt.sign({ id: user._id, role: user.role }, TOKEN_SECRET, { expiresIn: '1h' });
        return {
            token,
            user: {
                email: user.email,
                role: user.role
            }
        };
    } catch (error) {
        if (error.message === 'User not found') {
            throw new ApiError(404, error.message);
        } else if (error.message === 'Invalid credentials') {
            throw new ApiError(400, error.message);
        } else {
            throw new ApiError(500, error.message);
        }
    }
};

const userService = {
    createUser,
    authenticateUser
};

export default userService;
