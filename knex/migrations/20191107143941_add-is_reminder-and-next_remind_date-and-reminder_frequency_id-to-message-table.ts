import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.table('message', table => {
    table
      .boolean('is_reminder')
      .notNullable()
      .defaultTo(false);
    table.timestamp('next_remind_date');
    table
      .integer('reminder_frequency_id')
      .unsigned()
      .notNullable();
    table
      .foreign('reminder_frequency_id')
      .references('id')
      .inTable('reminder_frequency');
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.table('message', table => {
    table.dropColumns('is_reminder', 'next_remind_date');
    table.dropForeign(['reminder_frequency_id']);
  });
}
