import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
	return knex.schema.createTable('users', table => {
		table.increments('id').primary();
		table.string('google_id');
    table.string('first_name', 50);
    table.string('last_name', 50);
		table.string('email').notNullable();
		table.string('password');
    table.boolean('is_active').notNullable().defaultTo(false);
		table.timestamps(true, true);
		table.timestamp('deleted_at');
	});
}

export async function down(knex: Knex): Promise<any> {
	return knex.schema.dropTable('users');
}
