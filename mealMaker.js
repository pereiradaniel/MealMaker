const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  get appetizers() {
    return this._courses.appetizers;
  },
  
  set appetizers(appetizerIn) {
    this._courses.appetizers = appetizerIn;
  },

  get mains() {
    return this._courses.mains;
  },
  
  set mains(mainIn) {
    this._courses.mains = mainIn;
  },
  
  get desserts() {
    return this._courses.desserts;
  },
  
  set desserts(dessertIn) {
    this._courses.desserts = dessertIn;
  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
    this[courseName].push(dish);
  },
  
  getRandomDishFromCourse(courseName) {
    const dishes = this[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}.  The price is ${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers', 'Insalata di polpo', 4.50);
menu.addDishToCourse('mains', 'Spaghetti alle vongole', 6.00);
menu.addDishToCourse('desserts', 'Torta al cioccolato', 3.25);

const meal = menu.generateRandomMeal();
console.log(meal);