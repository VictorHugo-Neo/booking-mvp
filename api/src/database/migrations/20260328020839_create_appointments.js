/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('appointments', (table) => {
    table.increments('id').primary();
    table.string('client_name').notNullable();
    table.string('client_phone').notNullable();
    table.date('appointment_date').notNullable();
    table.time('appointment_time').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('appointments');
};