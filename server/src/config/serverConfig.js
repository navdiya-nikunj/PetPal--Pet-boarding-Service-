import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const DB_URL = process.env.DB_URL;
export const SALT = bcrypt.genSaltSync(10);
export const JWT_KEY = process.env.JWT_KEY;
export const TOKEN_EXPIRY = process.env.TOKEN_EXPIRY;
export const TOKEN_SECRET = process.env.TOKEN_SECRET;
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
