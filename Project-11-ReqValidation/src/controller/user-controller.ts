import { Request, Response } from "express"
import { UserBody, ApiResponse } from "../types/index"
import { validateUserBody } from "../validator/user-validator"

// POST /api/users — create a new user after validating the body
export function createUser(req: Request, res: Response): void {
  const errors = validateUserBody(req.body)

  // If any validation errors exist, return 400 with all errors listed
  if (errors.length > 0) {
    const response: ApiResponse<null> = {
      success: false,
      errors,
    };
    res.status(400).json(response)
    return;
  }

  const user = req.body as UserBody

  
  const createdUser = {
    id: Math.floor(Math.random() * 1000),
    name: user.name.trim(),
    email: user.email.toLowerCase(),
    createdAt: new Date().toISOString(),
  };

  const response: ApiResponse<typeof createdUser> = {
    success: true,
    message: "User created successfully",
    data: createdUser,
  };

  res.status(201).json(response)
}

export function updateUser(req: Request, res: Response): void {
  const { id } = req.params;
  const errors = validateUserBody(req.body);

  if (errors.length > 0) {
    const response: ApiResponse<null> = {
      success: false,
      errors,
    }
    res.status(400).json(response)
    return;
  }

  const user = req.body as UserBody;

  const updatedUser = {
    id: parseInt(String(id)),
    name: user.name.trim(),
    email: user.email.toLowerCase(),
    updatedAt: new Date().toISOString(),
  };

  const response: ApiResponse<typeof updatedUser> = {
    success: true,
    message: `User ${id} updated successfully`,
    data: updatedUser,
  };

  res.status(200).json(response)
}