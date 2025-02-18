import { loadHeaderFooter, getParams } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import SearchList from "./searchList.mjs";

loadHeaderFooter();

const foodSearched = getParams("searchbar");

console.log(foodSearched);
const dataSource = new ExternalServices();
const element = document.querySelector(".food-list");

const listing = new SearchList(foodSearched, dataSource,element);

listing.init();

// UsdaSpecs.getDataAsList();

// UsdaSpecs.getDataAsSingleProduct(foodSearched);

// UsdaSpecs.getDataAsSearch(foodSearched);

const Foodish = new ExternalServices();

// Foodish.foodish();