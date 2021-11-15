const Sequelize = require('sequelize');

// Bağlanılacak veritabanı bilgileri.
// (Sequelize)
// 1. Parametre: db ismi
// 2. Parametre: username
// 3. Parametre: şifre
// 4. Parametre: dialect(veritabanı tipi),
//               host(ip adresi)
const db = new Sequelize('mysql', 'root', '', {
    dialect: "mysql",
    host: "localhost"
});

module.exports = db;