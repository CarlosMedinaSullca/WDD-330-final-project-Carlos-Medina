
function foodDetailsTemplate(food) {
    return `<section>
    <h3>${food.description}</h3>
    <p4>Category: ${notEmpty(food.brandedFoodCategory)}</p4>
    <p>Food Portion :${notEmpty(food.foodPortions[0].gramWeight)}g</p>
    <h4>Macronutrients per food portion</h4>
    <p>Protein: ${notEmpty(food.foodNutrients[0].amount)} g</p>
    <p>Carbohydrates: ${notEmpty(food.foodNutrients[2].amount)} g</p>
    <p>Fibra total: ${notEmpty(food.foodNutrients[9].amount)} g</p>
    <p>Total lipids: ${notEmpty(food.foodNutrients[1].amount)} g</p>
    <p>Calories: ${notEmpty(food.foodNutrients[3].amount)} kcal</p>
    <p>Water: ${notEmpty(food.foodNutrients[5].amount)} g</p>
    <h4>Micronutrients per food portion</h4>
    <p>Calcium: ${notEmpty(food.foodNutrients[10].amount)} mg</p>
    <p>Hierro: ${notEmpty(food.foodNutrients[11].amount)} mg</p>
    <p>Magnesio: ${notEmpty(food.foodNutrients[12].amount)} mg</p>
    <p>Fosforo: ${notEmpty(food.foodNutrients[13].amount)} mg</p>
    <p>Potasio: ${notEmpty(food.foodNutrients[14].amount)} mg</p>
    <p>Sodio: ${notEmpty(food.foodNutrients[15].amount)} mg</p>
    <p>${notEmpty(food.foodNutrients[16].nutrient.name)} : ${notEmpty(food.foodNutrients[16].amount)} ${notEmpty(food.foodNutrients[16].nutrient.unitName)}</p>
    <p>${notEmpty(food.foodNutrients[20].nutrient.name)} : ${notEmpty(food.foodNutrients[20].amount)} ${notEmpty(food.foodNutrients[20].nutrient.unitName)}</p>
    <p>${notEmpty(food.foodNutrients[23].nutrient.name)} : ${notEmpty(food.foodNutrients[23].amount)} ${notEmpty(food.foodNutrients[23].nutrient.unitName)}</p>
    <p>${notEmpty(food.foodNutrients[24].nutrient.name)} : ${notEmpty(food.foodNutrients[24].amount)} ${notEmpty(food.foodNutrients[24].nutrient.unitName)}</p>
    <p>${notEmpty(food.foodNutrients[28].nutrient.name)} : ${notEmpty(food.foodNutrients[28].amount)} ${notEmpty(food.foodNutrients[28].nutrient.unitName)}</p>
    
    </section> `;

}

export default class FoodDetails {
    constructor(foodId, dataSource){
        this.foodId = foodId;
        this.dataSource = dataSource;
        this.food = [];

    }

    async init() {
        this.food= await this.dataSource.getDataAsSingleProduct(this.foodId);
        console.log(this.food);
        this.renderFoodDetails("main");
    }

    renderFoodDetails(selector) {
        const element = document.querySelector(selector);
        element.insertAdjacentHTML("afterbegin", foodDetailsTemplate(this.food));
    }
}


function notEmpty(value){
    if (value !== undefined && value !== null) {
        return value;
    } else {
        return "-";
    }
}