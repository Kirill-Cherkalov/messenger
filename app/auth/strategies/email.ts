import { Strategy as LocalStrategy } from 'passport-local';

import User from '../../models/user';

const options = {
  usernameField: 'email',
  passwordField: 'password',
};

const handler = async (email: string, password: string, done: Function) => {
  try {
    const user = await User.query().findOne({ email });

    if (!user) {
      return done(null, false);
    }

    if (!(await user.verifyPassword(password))) {
      return done(null, false);
    }

    return done(null, user);
  } catch (error) {
    return done(error);
  }
};

export default new LocalStrategy(options, handler);
