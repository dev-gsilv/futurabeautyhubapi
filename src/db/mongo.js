const env = require('dotenv/config');
const mongoose = require('mongoose');

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dominioCluster = process.env.DOMINIO_CLUSTER;

async function conn() {
    await mongoose
        .connect(
            `mongodb+srv://${dbUser}:${dbPass}@${dominioCluster}/?retryWrites=true&w=majority`,
        )
        .catch(e => console.error(e));
}

module.exports = conn;
