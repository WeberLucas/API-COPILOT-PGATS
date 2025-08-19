import express from 'express';
const router = express.Router();
import userService from '../services/userService.js';

router.get('/', (req, res) => {
    const users = userService.getAllUsers();
    res.status(200).json(users);
});

router.get('/:id', (req, res) => {
    const userId = req.params.id;
    const user = userService.getUserById(userId);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

export default router;