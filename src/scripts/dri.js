import { loadHeaderFooter } from "./utils.mjs";
import DailyRecommededIntake from "./dailyRecommendedIntake.mjs";


loadHeaderFooter();





const submit = document.getElementById("submit");



submit.addEventListener("click", () => {
    const sex = document.getElementById("sex").value;
    console.log(sex);
    const age = document.getElementById("age").value;  
    console.log(age); 
    const weight = document.getElementById("weight").value;
    console.log(weight); 
    const height = document.getElementById("height").value;
    console.log(height); 
    const activityLevel = document.getElementById("activity").value.toLowerCase().replace(" ", "");
    console.log(activityLevel); 

    const dri = new DailyRecommededIntake(sex, age, weight, height, activityLevel);

    dri.init();    
    
} );





