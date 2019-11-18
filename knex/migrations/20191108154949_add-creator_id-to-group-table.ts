import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.table('group', table => {
    table
      .integer('creator_id')
      .unsigned()
      .notNullable();
    table
      .foreign('creator_id')
      .references('id')
      .inTable('users');
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.table('group', table => {
    table.dropForeign(['creator_id']);
  });
}
