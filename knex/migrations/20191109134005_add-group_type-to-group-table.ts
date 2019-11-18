import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
  return knex.schema.table('group', table => {
    table.enum('group_type', ['direct', 'chat']).notNullable().defaultTo('chat');
  });
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.table('group', table => {
    table.dropColumn('group_type');
  });
}
