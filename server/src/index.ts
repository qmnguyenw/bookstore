

import { app } from './app';
import { sequelize } from './sequelize';

const main = async() => {
    try {
        await sequelize.sync();
        console.log('Connected to Postgres');
    } catch (err) {
        console.error(err);
    }
}