const users = [];

const createUser = (username, password, isFavored = false) => {
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        throw new Error('User already exists');
    }
    const newUser = { username, password, isFavored };
    users.push(newUser);
    return newUser;
};

const getUser = (username) => {
    return users.find(user => user.username === username);
};

const getAllUsers = () => {
    return users;
};

module.exports = {
    createUser,
    getUser,
    getAllUsers
};