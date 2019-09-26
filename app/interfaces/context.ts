import { RouterContext } from 'koa-router';

import User from '../models/user';

interface IContext extends RouterContext {
  state: {
    user: User;
  };
  /**
   * Passport method that logs out current user
   */
  logout(): void;

  isAuthenticated(): boolean;
}

export default IContext;
