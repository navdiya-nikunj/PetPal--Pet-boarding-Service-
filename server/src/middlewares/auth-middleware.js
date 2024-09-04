import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from 'jsonwebtoken';
import User from "../models/userModel.js";
import { TOKEN_SECRET } from "../config/serverConfig.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

        const decodedToken = jwt.verify(token, TOKEN_SECRET)

        const user = await User.findById(decodedToken?.id).select("-password")

    if (!user) {
      throw new ApiError(401, "Invalid access token");
    }

        req.user = user
        next()
    } catch (error) {
        if (error.message === "jwt expired") {
            throw new ApiResponse(401, {
                login: false,
                user: {}
            }, "Token expired")
        }
        throw new ApiResponse(401, {
            login: false,
            user: {}
        }, "Invalid access token")
    }
});
