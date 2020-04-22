const db = require('./data/db_config');


module.exports = {
    findAll,
    addUser,
    findByUser,
    findByDept
};


async function findAll() {
    let users = await db('users');

    return users;
}


function findByUser(username) {
    return db.select('*').from('users').where({username}).first();
}


function addUser(user) {
    return db('users').insert(user)
}


function findByDept(department) {
    return db.select('*').from(users).where({department})
}