import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('message_recipient', table => {
    table
      .increments('id')
      .primary()
      .notNullable();
    table
      .integer('recipient_id')
      .unsigned()
      .notNullable();
    table
      .foreign('recipient_id')
      .references('id')
      .inTable('users');
    table
      .integer('message_id')
      .unsigned()
      .notNullable();
    table
      .foreign('message_id')
      .references('id')
      .inTable('message');
    table.boolean('is_read').defaultTo(false);
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('message_recipient');
}
