import { Op } from "sequelize";
import CalendrierEmp from "../models/CalendrierEmp";
import CalandrierEmp from "../models/CalendrierEmp";

const getEmployeCalendarFromDate = async (employeId: number, date?: Date) => {
  let START;
  let NOW;
  if (date) {
    START = date;
    NOW = date;
  } else {
    START = new Date();
    NOW = new Date();
  }
  START.setHours(0, 0, 0, 0);
  return CalandrierEmp.findOne({
    where: {
      employeId,
      jour: {
        [Op.between]: [START.toISOString(), NOW.toISOString()],
      },
    },
  });
};

const CalandrierEmpService = {
  getAll: () => {
    return CalandrierEmp.findAll();
  },
  getOne: (id: number) => {
    return CalandrierEmp.findByPk(id);
  },

  AjouterHeureArriv: async (id: number, heureArriv: Date) => {
    const todayCalendar = await getEmployeCalendarFromDate(id);
    if (todayCalendar) {
      todayCalendar.heureArriv = heureArriv;
      todayCalendar.save();
    }
  },

  AjouterHeureDep: async (id: number, heureDep: Date) => {
    const todayCalendar = await getEmployeCalendarFromDate(id);
    if (todayCalendar) {
      todayCalendar.heureDep = heureDep;
      todayCalendar.save();
    }
  },

  ModifierHeureSup: async (id: number, heureSup: number) => {
    const todayCalendar = await getEmployeCalendarFromDate(id);
    if (todayCalendar) {
      todayCalendar.heureSup = heureSup;
      todayCalendar.save();
    }
  },

  ModifierHeureCong: async (id: number, heureConge: number) => {
    const todayCalendar = await getEmployeCalendarFromDate(id);
    if (todayCalendar) {
      todayCalendar.heureConge = heureConge;
      todayCalendar.save();
    }
  },

  Suivreperformance: async (employeId: number, date: Date) => {
    const calendarEntry = await getEmployeCalendarFromDate(employeId, date);
    if (!calendarEntry) {
      return 0;
    }
    const performance =
      calendarEntry.heureDep.getHours() -
      calendarEntry.heureArriv.getHours() +
      calendarEntry.heureSup -
      calendarEntry.heureConge;
    return performance;
  },
};

export default CalandrierEmpService;
