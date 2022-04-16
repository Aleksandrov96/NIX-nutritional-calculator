// eslint-disable-next-line import/no-cycle
import state from '../../store/state';
import { createAddon } from './create-addon';

const isAddonSelected = (id) => {
  const selectedDish = state.selectedDishes.filter((item) => (
    item.activeCategoryId === state.activeCategoryId
  ));
  const isSelected = selectedDish[0].addons.find((addon) => addon.id === id);
  return isSelected;
};

const createAddonsList = (addons) => {
  const addonsList = document.createElement('ul');
  addonsList.id = 'addonsList';
  const listItemFragment = document.createDocumentFragment();

  addons.forEach((addon) => {
    const selectedDish = state.selectedDishes.find((item) => (
      item.activeCategoryId === state.activeCategoryId
    ));
    if (selectedDish) {
      const isSelected = isAddonSelected(addon.id);
      const addonElement = createAddon(addon, isSelected);
      listItemFragment.appendChild(addonElement);
    } else {
      const addonElement = createAddon(addon, false);
      listItemFragment.appendChild(addonElement);
    }
  });

  addonsList.appendChild(listItemFragment);
  return addonsList;
};

export default createAddonsList;
