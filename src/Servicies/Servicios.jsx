import axios from "axios";

export const getDataSectores = () => axios.get("./data/sectores.json");
export const getDataZonas = () => axios.get("./data/zonas.json");
