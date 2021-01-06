const db = require("../database/dbConfig")

module.exports = {
  find,
  update,
};

function find() {
  return db("counter").where('count', 1)
}

function update(changes) {
  return db("counter").where('count', 1).update(changes)
}