import { Request, Response } from "express";
import * as UserService from "../services/user-service";
import { UserParams } from "../types";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getUser = async (req: Request<UserParams>, res: Response): Promise<void> => {
  try {
    const user = await UserService.getUserById(req.params.id);
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      res.status(400).json({ success: false, message: "Name and email are required" });
      return;
    }
    const user = await UserService.createUser({ name, email });
    res.status(201).json({ success: true, data: user });
  } catch (error: any) {
    if (error.code === 11000) {
      res.status(400).json({ success: false, message: "Email already exists" });
      return;
    }
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const updateUser = async (req: Request<UserParams>, res: Response): Promise<void> => {
  try {
    const user = await UserService.updateUser(req.params.id, req.body);
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const deleteUser = async (req: Request<UserParams>, res: Response): Promise<void> => {
  try {
    const user = await UserService.deleteUser(req.params.id);
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }
    res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};