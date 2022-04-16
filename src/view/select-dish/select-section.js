// eslint-disable-next-line import/no-cycle
import state from '../../store/state';
// eslint-disable-next-line import/no-cycle
import { renderDefaultDishInfo, renderSelectedDishInfo } from './render-dish-info';

const section = document.querySelector('.dish');

const createSelectSection = (category) => {
  const selectHeader = `
    <h1>1. SELECT ${category.name}</h1>
    `;

  const select = document.createElement('select');

  const defautlOption = `
        <option></option>
        <option value="choise">Choose ⬇️ or skip ${category.name.toLowerCase()} selection ➡️</option>
      `;

  select.insertAdjacentHTML('beforeend', defautlOption);

  category.dishes.forEach(({ name, id }) => {
    const currentCategory = state.selectedDishes.find((el) => el.currentDishId === id);
    if (currentCategory) {
      const option = `
        <option selected value="${id}">${name}</option>
        `;
      select.insertAdjacentHTML('beforeend', option);
    } else {
      const option = `
        <option value="${id}">${name}</option>
        `;
      select.insertAdjacentHTML('beforeend', option);
    }
  });

  const dishImagePreview = document.createElement('div');
  dishImagePreview.classList.add('dish_preview');

  const dishAddons = document.createElement('div');
  dishAddons.classList.add('dish_addons');

  state.selectedDishes.forEach((selectedDish) => {
    if (category.id === selectedDish.activeCategoryId) {
      category.dishes.forEach((dish) => {
        if (dish.id === selectedDish.currentDishId) {
          renderSelectedDishInfo(dish, dishImagePreview);
        }
      });
    } else {
      renderDefaultDishInfo(category, dishImagePreview);
    }
  });

  select.onchange = (e) => {
    const currentDishId = +e.target.value;

    state.setState('currentDishId', currentDishId);
    renderDefaultDishInfo(category, dishImagePreview);

    const currentDish = category.dishes.find((dish) => dish.id === state.currentDishId);

    const selectedDish = {
      activeCategoryId: state.activeCategoryId,
      currentDishId: state.currentDishId,
      currentDishCalories: currentDish.calories,
      addons: [],
    };

    let selectedDishArray = [];

    selectedDishArray = state.selectedDishes.filter((dish) => (
      dish.activeCategoryId !== selectedDish.activeCategoryId
    ));
    selectedDishArray.push(selectedDish);

    state.setState('selectedDishes', [...selectedDishArray]);
  };

  section.innerHTML = selectHeader;
  section.appendChild(select);
  section.appendChild(dishImagePreview);
  section.appendChild(dishAddons);

  return section;
};

export default createSelectSection;
