// eslint-disable-next-line import/no-cycle
import { getCurrentCategoryAddons } from './helpers';
// eslint-disable-next-line import/no-cycle
import createAddonsList from './create-addons-list';
// eslint-disable-next-line import/no-cycle
import { addAddonsListener } from './add-ons-listeners';
// eslint-disable-next-line import/no-cycle
import renderAddedAddons from './render-add-ons';

const renderAddonsSection = () => {
  const sectionDOMContainer = document.querySelector('.addons');
  const addonsContainer = document.querySelector('.addonsContainer');

  const addons = getCurrentCategoryAddons();
  const addonsElement = createAddonsList(addons);

  addonsContainer.innerHTML = '';
  addonsContainer.appendChild(addonsElement);
  sectionDOMContainer.appendChild(addonsContainer);

  addAddonsListener();
  renderAddedAddons();
};

export default renderAddonsSection;
