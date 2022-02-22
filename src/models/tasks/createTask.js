const connection = require('../../database/config/connection');

module.exports = async (data) => (await connection()).collection('tasks').insertOne(data);