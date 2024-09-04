import userService from '../services/user-service.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';

const signup = async (req, res) => {
    const { email, password, role } = req.body;
    try {
        await userService.createUser(email, password, role);
        const response = new ApiResponse(201, 'User created successfully');
        if (!response) {
            throw new ApiError(500, 'User created successfully');
        }
        res.status(201).send(new ApiResponse(201, response, 'User created successfully'));
    } catch (error) {
        res.status(400).send(new ApiResponse(400, null, error.message));
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const response = await userService.authenticateUser(email, password);
        res.status(200).send(new ApiResponse(200, response, 'User logged in successfully'));
    } catch (error) {
        if (error.message === 'User not found' || error.message === 'Invalid credentials') {
            res.status(404).send(new ApiResponse(404, null, error.message));
        } else {
            res.status(500).send(new ApiResponse(500, null, error.message));
        }
    }
};

const getUser = async (req, res) => {
    try {
        res.status(200).send(new ApiResponse(200, {
            user: {
                id: req.user._id,
                email: req.user.email,
                role: req.user.role
            },
            login: true
        }, 'User fetched successfully'));
    } catch (error) {
        res.status(500).send(new ApiResponse(500, null, error.message));
    }
};

const userController = {
    signup,
    login,
    getUser
};

export default userController;


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2Y5NDllZWVhMTZlNjRkNjFmNzE3MyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxOTY1NTExMywiZXhwIjoxNzE5NjU4NzEzfQ.XfEwgeuy731uMt3B-4v6rLPQw_0QdHp1Paoo-SIfcfM