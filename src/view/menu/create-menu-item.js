// eslint-disable-next-line import/no-cycle
import state from '../../store/state';

const createMenuItem = (item) => {
  const menuItemNode = document.createElement('div');
  menuItemNode.classList.add('content_dish');
  menuItemNode.dataset.id = item.id;
  const isActive = state.activeCategoryId.toString() === String(item.id);
  if (isActive) {
    menuItemNode.classList.add('content_dish--active');
  }
  const html = `
        <div class="content_dish-item" id="${item.id}">
        <img src="${item.pic}" alt="${item.name}" class="content_dish-item--img">
        </div>
        <p>${item.name}</p>
        `;
  menuItemNode.innerHTML = html;
  return menuItemNode;
};

export default createMenuItem;
