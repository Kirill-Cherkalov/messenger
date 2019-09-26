import Knex from 'knex';
import { Model } from 'objection';

import knexConfig from '../../knex/knexfile';

const connect = async (): Promise<any> => {
  const knex = Knex(knexConfig);
  Model.knex(knex);

  return knex
    .select()
    .from('knex_migrations')
    .catch(() => {
      throw new Error('Error establishing a database connection');
    });
};

export default connect;
