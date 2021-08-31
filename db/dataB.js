let fs = require('fs');
const path = require('path');

module.exports = {
    getProducts : JSON.parse(fs.readFileSync(path.join(__dirname, '/dbProducts.json'), "utf-8")),
    carousel:  JSON.parse(fs.readFileSync(path.join(__dirname, '/banner.json'), "utf-8")),
    categories:  JSON.parse(fs.readFileSync(path.join(__dirname, '/categories.json'), "utf-8")),
    writeProductsJson : (dataB) => {
        fs.writeFileSync(path.join(__dirname, '../db/dbProducts.json'), JSON.stringify(dataB), "utf-8")
    },
    users: JSON.parse(fs.readFileSync(path.join(__dirname, "/users.json"), "utf-8")),
    writeUsersJSON: (dataB) => {
        fs.writeFileSync(path.join(__dirname, "../db/users.json"), JSON.stringify(dataB), "utf-8")
    }


}