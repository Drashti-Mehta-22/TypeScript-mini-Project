import { Router } from 'express';
import { register, login, getProfile } from '../controllers/auth-controller';
import authMiddleware from '../middlewares/auth-middleware';

const router: Router = Router()

// Public routes
router.post('/register', register)
router.post('/login', login)

// Protected route
router.get('/profile', authMiddleware, getProfile)

export default router