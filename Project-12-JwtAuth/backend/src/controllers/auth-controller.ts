import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user-model';
import { UserPayload,AuthRequest } from '../types/type';

// generate JWT
const generateToken = (payload: UserPayload): string => {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  } as jwt.SignOptions);
}

//create user, gives token to that user. Eg: giving ID card
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: 'User already exists with this email' });
      return;
    }

    // Create user
    const user = await User.create({ name, email, password });

    const payload: UserPayload = {
      id: (user._id).toString(),
      email: user.email,
      name: user.name,
    }

    const token = generateToken(payload);

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: { id: payload.id, name: payload.name, email: payload.email },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error during registration', error });
  }
}

//matches user entered info with the info in database, eg: checking ID and giving access
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    // Compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    const payload: UserPayload = {
      id: (user._id).toString(),
      email: user.email,
      name: user.name,
    };

    const token = generateToken(payload);

    res.status(200).json({
      message: 'Login successful',
      token,
      user: { id: payload.id, name: payload.name, email: payload.email },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error during login', error });
  }
}

//getting the data and sending it to frontend
export const getProfile = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const user = await User.findById(req.user?.id).select('-password');
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Server error fetching profile', error });
  }
}