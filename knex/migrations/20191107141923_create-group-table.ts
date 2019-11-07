import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('group', table => {
    table.increments('id').primary().notNullable();
    table.string('name', 50);
    table.boolean('is_active');
    table.timestamps(true, true);
  });
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('group');
}
