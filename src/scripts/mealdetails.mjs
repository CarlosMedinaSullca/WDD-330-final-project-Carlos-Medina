
function mealDetailsTemplate(meal) {
    return `<section>
    <img src="${meal.image}" alt="${meal.title}">    
    </section> `;

}

export default class MealDetails {
    constructor(category, dataSource){
        this.category = category;
        this.dataSource = dataSource;
        this.meal = [];

    }

    async init() {
        this.meal= await this.dataSource.foodish(this.category);
        console.log(this.meal);
        this.renderMeal("main");
    }

    renderMeal(selector) {
        const element = document.querySelector(selector);
        element.insertAdjacentHTML("afterbegin", mealDetailsTemplate(this.meal));
    }
}


function notEmpty(value){
    if (value !== undefined && value !== null) {
        return value;
    } else {
        return "-";
    }
}