import mongoose from 'mongoose';

const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
};

export default connectToMongo;
