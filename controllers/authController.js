import User from "../models/User.js";
import { StatusCodes } from 'http-status-codes';
import { NotFoundError, BadRequestError } from "../errors/index.js";

const register = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        throw new BadRequestError('Something is missing');
    }
    const user = await User.create({ name, email, password });
    res.status(StatusCodes.OK).json({ user });
};

const login = async (req, res) => {
    res.send('login user');
};

const updateUser = async (req, res) => {
    res.send('update user');
};

export { register, login, updateUser };