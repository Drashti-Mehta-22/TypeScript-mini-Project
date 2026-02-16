import { Router } from "express"
import { createUser, updateUser } from "../controller/user-controller"

const router = Router()

// POST /api/users
router.post("/", createUser)

// PUT /api/users/:id
router.post("/:id", updateUser)

export default router