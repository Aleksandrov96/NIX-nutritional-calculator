// eslint-disable-next-line import/no-cycle
import state from '../../store/state';
import { createAddedAddon } from './create-addon';
// eslint-disable-next-line import/no-cycle
import { removeAddonsListener } from './add-ons-listeners';

const renderAddon = (addon) => {
  const currentCategory = state.categories[state.activeCategoryId - 1];
  const selectedAddon = currentCategory.addons.find((item) => item.id === addon.id);
  const dishAddonsContainer = document.querySelector('.dish_addons');
  dishAddonsContainer.appendChild(createAddedAddon(selectedAddon));
  removeAddonsListener();
};

const renderAddedAddons = () => {
  state.selectedDishes.forEach((dish, index) => {
    if (dish.activeCategoryId === state.activeCategoryId) {
      state.selectedDishes[index].addons.forEach((addon) => {
        renderAddon(addon);
      });
    }
  });
};

export default renderAddedAddons;
