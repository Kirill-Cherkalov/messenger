import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.table('message', table => {
    table.dropColumn('subject');
  })
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.table('message', table => {
    table.string('subject', 100);
  })
}
