const db = require("../database/dbConfig")

module.exports = {
  find,
  update,
  reset
};

function find() {
  return db("counter").select('count').first()
}

async function update() {
  try {
    let obj = await db("counter").select('count').first();
    obj.count ++
    return db("counter").where('id', 1).update(obj).then(() => {
      return find()
    })
  } catch (err) {
    throw err
  }
}

function reset() {
  return db("counter").where("id", 1).update({ "count": 0 }).then(() => {
    return find()
  })
}