import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  // TODO: If the user exists and the password is correct, return a JWT token
  const { username, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials." });
    }
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
