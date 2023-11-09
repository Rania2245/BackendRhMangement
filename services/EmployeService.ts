import Employe from "../models/Employe";

const EmployeService = {
  getAll: () => {
    return Employe.findAll();
  },
  getOne: (id: number) => {
    return Employe.findOne({ where: { id } });
  },
};
export default EmployeService;
