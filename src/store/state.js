// eslint-disable-next-line import/no-cycle
import renderApp from '../App';

const calculateAddonsCaloriesTotal = (addons) => {
  if (addons.length === 0) {
    return 0;
  }
  return addons.reduce((prev, cur) => prev + cur.calories, 0);
};

const state = {
  activeCategoryId: 0,
  currentDishId: 0,
  categories: {},
  selectedDishes: [],

  setState(key, value) {
    this[key] = value;
    renderApp();
  },

  get totalNutritionalValue() {
    return this.selectedDishes.reduce((prev, cur) => {
      const addonsCalories = calculateAddonsCaloriesTotal(cur.addons);
      return prev + cur.currentDishCalories + addonsCalories;
    }, 0);
  },
};

export default state;
