import User from "../models/User.js";
import { StatusCodes } from 'http-status-codes';
import { NotFoundError, BadRequestError, UnauthenticatedError } from "../errors/index.js";
import attachCookies from '../utils/attachCookies.js';

const register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        throw new BadRequestError('Something is missing');
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new BadRequestError('Email already in use');
    }

    const user = await User.create({ name, email, password });

    const token = user.createJWT();
    attachCookies({ res, token });
    res.status(StatusCodes.CREATED).json({ user: { email: user.email, lastName: user.lastName, location: user.location, name: user.name }, location: user.location });
};

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new BadRequestError('Please provide all values');
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        throw new UnauthenticatedError('Invalid credentials');
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
        throw new UnauthenticatedError('Invalid credentials');
    }

    const token = user.createJWT();
    user.password = undefined;
    attachCookies({ res, token });

    res.status(StatusCodes.OK).json({ user, location: user.location });
};

const updateUser = async (req, res) => {
    const { email, name, lastName, location } = req.body;
    if (!email || !name || !lastName || !location) {
        throw new BadRequestError('Provide all values');
    }
    const user = await User.findOne({ _id: req.user.userID });
    user.email = email;
    user.name = name;
    user.lastName = lastName;
    user.location = location;
    await user.save();
    const token = user.createJWT();
    attachCookies({ res, token });
    res.status(StatusCodes.OK).json({ user, location: user.location });
};

const getCurrentUser = async (req, res) => {
    const user = await User.findOne({ _id: req.user.userID });
    res.status(StatusCodes.OK).json({ user, location: user.location });
};

const logout = async (req, res) => {
    res.cookie('token', 'logout', { httpOnly: true, expires: new Date(Date.now() + 1000) });
    res.status(StatusCodes.OK).json({ msg: 'user logged out' });
};

export { register, login, updateUser, getCurrentUser, logout }; 