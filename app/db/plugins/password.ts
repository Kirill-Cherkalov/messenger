import bcrypt from 'bcrypt';
import { Model, ModelOptions, QueryContext } from 'objection';

type Constructor<T = Model> = new (...args: any[]) => T;

const SALT_ROUNDS: number = 12;

export default <M extends Constructor>(ModelClass: M) => {
  return class extends ModelClass {
    public $beforeInsert(ctx: QueryContext) {
      const promise = super.$beforeInsert(ctx);

      return Promise.resolve(promise).then(() => {
        return this.generateHash();
      });
    }

    public $beforeUpdate(queryOptions: ModelOptions, ctx: QueryContext) {
      const promise = super.$beforeUpdate(queryOptions, ctx);
      const self = this as any;

      return Promise.resolve(promise).then(() => {
        if (queryOptions.patch && self.password === undefined) {
          return;
        }

        return this.generateHash();
      });
    }

    public verifyPassword(password: string): Promise<Boolean> {
      const self = this as any;
      return bcrypt.compare(password, self.password);
    }

    private generateHash(): Promise<void> {
      const self = this as any;
      const password = self.password;

      return bcrypt.hash(password, SALT_ROUNDS).then(hash => {
        self.password = hash;
      });
    }
  };
};
