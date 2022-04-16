/* eslint-disable import/no-cycle */
import state from '../../store/state';
import createMenuItem from './create-menu-item';

const setActiveItem = (item) => {
  item.addEventListener('click', () => {
    state.setState('activeCategoryId', +item.getAttribute('data-id'));
  });
};

const renderMenu = async () => {
  const categoryFragment = document.createDocumentFragment();
  state.categories.forEach((category) => {
    categoryFragment.appendChild(createMenuItem(category));
  });
  const menuContent = document.querySelector('.content');
  menuContent.innerHTML = '';
  menuContent.appendChild(categoryFragment);
  const menuItems = document.querySelectorAll('.content_dish');
  menuItems.forEach((item) => setActiveItem(item));
};

export default renderMenu;
