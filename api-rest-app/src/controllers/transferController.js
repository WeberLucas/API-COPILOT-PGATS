const express = require('express');
const router = express.Router();
const transferService = require('../services/transferService');

router.post('/', (req, res) => {
    const { sender, recipient, amount } = req.body;
    const transferResult = transferService.processTransfer(sender, recipient, amount);
    if (transferResult.error) {
        return res.status(400).json({ error: transferResult.error });
    }
    return res.status(200).json({ message: 'Transfer successful', transfer: transferResult });
});

router.get('/history/:userId', (req, res) => {
    const { userId } = req.params;
    const history = transferService.getTransferHistory(userId);
    return res.status(200).json(history);
});

module.exports = router;