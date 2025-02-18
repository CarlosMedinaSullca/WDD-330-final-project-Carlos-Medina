const fdcUrl = "https://api.nal.usda.gov/fdc"
const key = "65eNt8OB2WzHdLFylt8w50G6GJKa5m5i7Xd26GXs"

const foodishApi = "https://foodish-api.com/api/"


export default class ExternalServices {
    // Fetching the USDA Food data central API as a list and returning the data as json
    async getDataAsList() {
        try {
            const response = await fetch(fdcUrl + `/v1/foods/list?api_key=${key}`);
            if(!response.ok) {
                throw new Error(`Reponse status:${response.status}`);
            }
            const data = await response.json()
            console.log(data);
            return data
        } catch(error) {
            console.error(error.message);
        }
            
    }
    // Fetching the USDA Food data central API as a single product and returning the data as json
    async getDataAsSingleProduct(id) {
        try {
            const response = await fetch(fdcUrl + `/v1/food/${id}?api_key=${key}`);
            if(!response.ok) {
                throw new Error(`Reponse status:${response.status}`);
            }
            const data = await response.json();            
            console.log(data);
            return data
        } catch(error) {
            console.error(error.message);
        }
            
    }

    async getDataAsSearch(food) {
        try {
            const response = await fetch(fdcUrl + `/v1/foods/search?query=${food}&pageSize=50&sortOrder=asc&api_key=${key}`);
            if(!response.ok) {
                throw new Error(`Reponse status:${response.status}`);
            }
            const data = await response.json();            
            console.log(data);
            return data
        } catch(error) {
            console.error(error.message);
        }
            
    }
    
    // Fetching the Foodish API random food image from a category and returning the data as json
    async foodish(category) {
        try {
            const response = await fetch(foodishApi + `images/${category}`);
            if(!response.ok) {
                throw new Error(`Reponse status:${response.status}`);
            }
            const data = await response.json();           
            console.log(data);
            return data
        } catch(error) {
            console.error(error.message);
        }

    }



}