import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
	return knex.schema.createTable('users', table => {
		table.increments('id').primary();
		table.string('email');
		table.string('password');
		table.string('google_id');
		// created_at, updated_at
		table.timestamps(true, true);
		table.timestamp('deleted_at');
	});
}

export async function down(knex: Knex): Promise<any> {
	return knex.schema.dropTable('users');
}
