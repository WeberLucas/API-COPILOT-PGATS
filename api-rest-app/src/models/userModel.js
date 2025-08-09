const users = [];

class User {
    constructor(username, password, isFavored = false) {
        this.username = username;
        this.password = password;
        this.isFavored = isFavored;
    }
}

const addUser = (username, password, isFavored) => {
    const user = new User(username, password, isFavored);
    users.push(user);
    return user;
};

const findUserByUsername = (username) => {
    return users.find(user => user.username === username);
};

const getAllUsers = () => {
    return users;
};

module.exports = {
    addUser,
    findUserByUsername,
    getAllUsers,
};