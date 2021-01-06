
exports.up = function(knex) {
  return knex.schema.createTable("counter", function (users) {
    users.increments();
    users.integer("count").unsigned().defaultTo(0);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("counter")
};
