import { loadHeaderFooter, getParams } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import FoodDetails from "./foodDetails.mjs";

loadHeaderFooter();

const foodId = getParams("food");
const dataSource = new ExternalServices();

const foodDetails = new FoodDetails(foodId, dataSource);

foodDetails.init();