import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.table('message_recipient', table => {
    table
      .integer('recipient_group_id')
      .unsigned()
      .notNullable();
    table
      .foreign('recipient_group_id')
      .references('id')
      .inTable('user_group');
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.table('recipient_group_id', table => {
    table.dropForeign(['recipient_group_id']);
  });
}
