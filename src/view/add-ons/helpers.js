// eslint-disable-next-line import/no-cycle
import state from '../../store/state';

const getCurrentCategoryAddons = () => {
  const category = state.categories.find((cat) => state.activeCategoryId === cat.id);
  if (category) {
    const { addons } = category;
    return addons;
  }
  return [];
};

const getAddonById = (id) => {
  const currentCategory = state.categories[state.activeCategoryId - 1];
  const selectedAddon = currentCategory.addons.find((addon) => addon.id === id);
  return selectedAddon;
};

export { getCurrentCategoryAddons, getAddonById };
