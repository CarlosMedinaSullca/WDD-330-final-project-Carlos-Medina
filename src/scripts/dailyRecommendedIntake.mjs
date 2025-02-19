

export default class DailyRecommededIntake {
    constructor(sex, age, weight, height, activityLevel) {
        this.sex =sex;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.activityLevel = activityLevel;
    }

    calculateBMR() {
        // BMR stands for Basal Metabolic rate
        let bmr = 0;
        if(this.sex == "men") {
            bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;

        } else {
            bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
        }

        return bmr;
    }

    calculateTDEE() {
        // TDEE stands for Total Daily Energy Expenditure
        let tdee = 0;
        const bmr = this.calculateBMR();
        switch(this.activityLevel) {
            case "sedentary":
                tdee = bmr * 1.2;
                break;
            case "lightlyactive":
                tdee = bmr * 1.375;
                break;
            case "moderatelyactive":
                tdee = bmr * 1.55;
                break;
            case "veryactive":
                tdee = bmr * 1.725;
                break;
            case "extraactive":
                tdee = bmr * 1.9;
                break;
        }
        return tdee;
    }

    calculateCarbohydrate() {
        const tdee = this.calculateTDEE();
        const uperRange = (tdee * 0.65) / 4;
        const lowerRange = (tdee * 0.45) / 4;
        // The average of Carbohydrate intake in grams per day
        const average = (uperRange + lowerRange) / 2;
        return average;
    }

    calculateProtein() {
        let protein = 0;

        switch(this.activityLevel) {
            case "sedentary":
                protein = this.weight * 0.8;
                break;
            case "lightlyactive":
                protein = this.weight * 1.3;
                break;
            case "moderatelyactive":
                protein = this.weight * 1.6;
                break;
            case "veryactive":
                protein = this.weight * 1.8;
                break;
            case "extraactive":
                protein = this.weight * 2;
                break;
        }

        // This result is given in grams per day

        return protein;
    }

    calculateFiber () {
        let tdee = this.calculateTDEE();
        let fiber = (tdee / 1000) * 14;
        //this result is given in grams per day
        return fiber;
    }

    calculateFat() {
        let tdee = this.calculateTDEE();
        let lowerRange = (tdee * 0.2) / 9;
        let upperRange = (tdee * 0.35) / 9;
        let average = (lowerRange + upperRange) / 2;
        //this result is given in grams per day
        return average;
    }


}