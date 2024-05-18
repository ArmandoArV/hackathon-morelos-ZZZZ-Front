import Dashboard from "./Containers/Dashboard";

export const API_URL = "http://localhost:3001";

export const navBarElements = [
  {
    id: "#aboutus",
    name: "Sobre nostros",
  },
  {
    id: "#problem",
    name: "Problemática",
  },
  {
    id: "#benefits",
    name: "Beneficios",
  },
];

export const routes = {
  register: "/asistente",
  dashboard: "/dashboard",
};

export const lateralNavbarItems = {
  Dashboard: {
    Dashboard: {
      link: routes.dashboard,
      adminRequired: false,
    },
  },

  Asistente: {
    Asistente: {
      link: routes.asistente,
      adminRequired: false,
    },
  },

};

