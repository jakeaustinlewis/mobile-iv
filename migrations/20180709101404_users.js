
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('phone_number').notNullable();
        table.string('email').notNullable();
        table.string('username').unique().notNullable();
        table.specificType('hashed_password', 'char(60)').notNullable();
        table.string('userType');
        table.timestamps(true, true);
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
