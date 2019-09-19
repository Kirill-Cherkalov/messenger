import User from '../../models/user';

type RegisterData = {
  email: string,
  password: string,
}

export const register = async (data: RegisterData): Promise<User> => {
  const user = await User.query().findOne({ email: data.email });

  if (user) {

  }

  return user;
};
