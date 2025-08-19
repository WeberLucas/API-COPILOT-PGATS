const transferService = (() => {
    let transfers = [];
    let users = [];

    const addUser = (user) => {
        users.push(user);
    };

    const getUserById = (userId) => {
        return users.find(user => user.id === userId);
    };

    const createTransfer = (senderId, recipientId, amount) => {
        const sender = getUserById(senderId);
        const recipient = getUserById(recipientId);

        if (!sender || !recipient) {
            throw new Error('Sender or recipient not found');
        }

        if (!recipient.isFavored && amount >= 5000) {
            throw new Error('Transfer amount exceeds limit for non-favored users');
        }

        const transfer = {
            id: transfers.length + 1,
            sender: senderId,
            recipient: recipientId,
            amount: amount,
            date: new Date()
        };

        transfers.push(transfer);
        return transfer;
    };

    const getTransfers = () => {
        return transfers;
    };

    const processTransfer = (sender, recipient, amount) => {
        // Validação: remetente ou destinatário inválidos
        if (!sender || !recipient || sender === "" || recipient === "") {
            return { error: 'Sender or recipient not found' };
        }
        // Exemplo de regra de negócio
        if (amount <= 0) {
            return { error: 'Invalid amount' };
        }
        // Simula sucesso
        return { sender, recipient, amount };
    };

    return {
        addUser,
        createTransfer,
        getTransfers,
        processTransfer
    };
})();

export default transferService;