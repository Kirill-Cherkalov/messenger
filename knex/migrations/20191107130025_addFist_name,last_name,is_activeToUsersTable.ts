import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.table('users', table => {
    table.string('first_name');
    table.string('last_name');
    table.boolean('is_active')
  });
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.table('users', table => {
    table.dropColumn('first_name');
    table.dropColumn('last_name');
    table.dropColumn('is_active');
  });
}
