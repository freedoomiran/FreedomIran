const users = [];

function createUser(data) {
    const user = {
        id: users.length + 1,
        username: data.username,
        email: data.email,
        language: data.language || "fa",
        location: data.location || null,
        created_at: new Date()
    };

    users.push(user);

    return user;
}

function getUsers() {
    return users;
}

module.exports = {
    createUser,
    getUsers
};
