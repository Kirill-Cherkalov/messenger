import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('user_group', table => {
    table.increments('id').notNullable().primary();
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('id').inTable('users');
    table.integer('group_id').unsigned().notNullable();
    table.foreign('group_id').references('id').inTable('group');
    table.boolean('is_active').notNullable().defaultTo(false);
		table.timestamps(true, true);
		table.timestamp('deleted_at');
  });
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('user_group');
}
