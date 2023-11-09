import CalendrierEmp from "../models/CalendrierEmp";
import CalandrierEmp from "../models/CalendrierEmp";

const CalandrierEmpService = {
  getAll: () => {
    return CalandrierEmp.findAll();
  },
  getOne: (id: number) => {
    return CalandrierEmp.findByPk(id);
  },
  AjouterHeureArriv: async (id: number, heureArriv: Date) => {
      const calandEmp = await CalandrierEmp.findOne({where: {"employeId": id}});
      if (calandEmp){
        calandEmp.heureArriv=heureArriv; 
        calandEmp.save()
      }
  },

  AjouterHeureDep: async (id: number, heureDep: Date) => {
   
  },

  AjouterHeureSup: async (id: number, heureSup: number) => {
    
  },

  AjouterHeureCong: async (id: number, heureConge: number) => {
  }
  , 
    create:async()=>{ 
       // const newCalendrierEmp=await CalendrierEmp.create({heureArriv, heureDep,heureSup,heureConge})
        return CalendrierEmp; 
    }
};


export default CalandrierEmpService;
