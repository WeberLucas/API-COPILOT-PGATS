import express from 'express';
const router = express.Router();
import authService from '../services/authService.js';
//test
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    const result = authService.registerUser(username, password);
    if (result.error) {
        return res.status(400).json({ message: result.error });
    }
    return res.status(201).json({ message: 'User registered successfully' });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const result = authService.loginUser(username, password);
    if (result.error) {
        return res.status(401).json({ message: result.error });
    }
    return res.status(200).json({ message: 'Login successful', token: result.token });
});

export default router;