import Employe from "../models/Employe";
import bcrypt from "bcryptjs";

const EmployeService = {
  getAll: () => {
    return Employe.findAll();
  },
  getOne: (id: number) => {
    return Employe.findOne({ where: { id } });
  },
  login: async (email: string, password: string) => {
    const user = await Employe.findOne({
      where: { email: email },
    });
    if (user === null) {
      return null;
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    return isPasswordValid ? user : null;
  },
  register: async (email: string, password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const employe = await Employe.create({ email, password: hashedPassword });
    return employe;
  },
};

export default EmployeService;
