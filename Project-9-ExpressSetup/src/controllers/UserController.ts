import { Request, Response } from "express";
import { getAllUsers, findUserById } from "../models/UserModel";
import { UserParams } from "../types";

// GET - /users
export const getUsers = (req: Request, res: Response): void => {
  const users = getAllUsers();
  res.json(users);
};

// GET - /users/:id
export const getUserById = (req: Request<UserParams>, res: Response): void => {
  const id = parseInt(req.params.id);
  const user = findUserById(id);

  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  res.json(user);
};