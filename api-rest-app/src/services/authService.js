const users = [];

const registerUser = (username, password) => {
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        throw new Error('User already exists');
    }
    const newUser = { username, password, favored: false };
    users.push(newUser);
    return newUser;
};

const loginUser = (username, password) => {
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        throw new Error('Invalid credentials');
    }
    return user;
};

const getUsers = () => {
    return users;
};

const setUserFavored = (username) => {
    const user = users.find(user => user.username === username);
    if (user) {
        user.favored = true;
    }
};

export default {
    registerUser,
    loginUser,
    getUsers,
    setUserFavored
};