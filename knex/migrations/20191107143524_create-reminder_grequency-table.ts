import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('reminder_frequency', table => {
    table
      .increments('id')
      .primary()
      .notNullable();
    table.string('title', 25);
    table
      .integer('frequency')
      .notNullable()
      .defaultTo(0);
    table
      .boolean('is_active')
      .notNullable()
      .defaultTo(true);
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('reminder_frequency');
}
