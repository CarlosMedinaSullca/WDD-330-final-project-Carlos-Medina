import { renderListWithTemplate } from "./utils.mjs";

function foodCardTemplate(food) {
    return `<li class="food-card">
    <a href="/food/index.html?food=${food.fdcId}">
    <h2>${food.description}</h2>
    </a>
    </li>`;
}

export default class SearchList {
    constructor(food, dataSource, listElement) {
        this.food = food;
        this.dataSource = dataSource;
        this.listElement = listElement;
        this.products = [];
    }

    async init() {
        console.log(this.food)
        this.products = await this.dataSource.getDataAsSearch(this.food);
        console.log(this.products);
        this.renderList(this.products.foods);
    }

    renderList(list) {
        this.listElement.innerHTHML = "";
        renderListWithTemplate(foodCardTemplate, this.listElement, list);
    }
}