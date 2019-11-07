import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('message', table => {
    table.increments('id').primary().notNullable();
    table.string('subject', 100);
    table.integer('creator_id').unsigned().notNullable();
    table.foreign('creator_id').references('id').inTable('users');
    table.string('message_body');
    table.integer('parent_message_id').unsigned().notNullable();
    table.foreign('parent_message_id').references('id').inTable('message');
		// created_at, updated_at
		table.timestamps(true, true);
		table.timestamp('deleted_at');
		table.timestamp('expiry_at');
  });
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('message');
}
