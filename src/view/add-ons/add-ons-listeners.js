// eslint-disable-next-line import/no-cycle
import state from '../../store/state';
// eslint-disable-next-line import/no-cycle
import { getAddonById } from './helpers';

const addAddonsListener = () => {
  const addonsList = document.getElementById('addonsList');
  addonsList.addEventListener('click', (e) => {
    const { target } = e;
    const id = +target.id;
    const selectedDish = state.selectedDishes.find((dish) => (
      dish.activeCategoryId === state.activeCategoryId
    ));
    const addon = getAddonById(id);
    selectedDish.addons.push(addon);
    state.setState('selectedDishes', state.selectedDishes);
  });
};

const removeAddonsListener = () => {
  const dishAddonsContainer = document.querySelector('.dish_addons');
  dishAddonsContainer.addEventListener('click', (e) => {
    const { target } = e;

    state.selectedDishes.forEach((dish, index) => {
      if (dish.activeCategoryId === state.activeCategoryId) {
        const id = +target.id;
        const filteredAddons = state.selectedDishes[index].addons.filter((addon) => (
          addon.id !== id
        ));

        state.selectedDishes[index].addons = [...filteredAddons];
        state.setState('selectedDishes', state.selectedDishes);
      }
    });
  });
};

export { addAddonsListener, removeAddonsListener };
