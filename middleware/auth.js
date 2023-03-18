import { UnauthenticatedError } from "../errors/index.js";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        throw new UnauthenticatedError('Authentication invalid');
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const testUser = payload.userID === '64108335dbf661818181c26c';
        req.user = { userID: payload.userID, testUser };
        next();
    } catch (error) {
        throw new UnauthenticatedError('Authentication invalid');
    }
};

export default auth;