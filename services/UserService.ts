import User from "../models/User";

const UserService = {
  getAll: () => {
    return User.findAll();
  },
  getOne: (id: number) => {
    return User.findByPk(id);
  },
  create: async (email: string, password: string) => {
    const newUser = await User.create({ email, password });
    return newUser;
  },
};
export default UserService;
