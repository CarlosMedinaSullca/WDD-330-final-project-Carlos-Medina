import { loadHeaderFooter, getParams} from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import MealDetails from "./mealdetails.mjs";

loadHeaderFooter();

const category = getParams("category")

const foodish = new ExternalServices();

const mealDetails = new MealDetails(category, foodish);

mealDetails.init();


