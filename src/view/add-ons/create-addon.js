const createAddon = (addon, isAddonSelected) => {
  const { id, pic, name } = addon;

  const addonEl = document.createElement('li');
  const buttonStyle = `display: ${isAddonSelected ? 'none' : 'block'} !important`;
  const addonsListItem = `
    <div class="addons_item">
    <img class="addons_item-img" src="${pic}" alt="${name}">
    <button id="${id}" style="${buttonStyle}" class="addons_item-add">&plus;</button>
    </div>
    <p>${name}</p>
    `;
  addonEl.innerHTML = addonsListItem;
  return addonEl;
};

const createAddedAddon = (addon) => {
  const { pic, name, id } = addon;

  const addedAddonsContainer = document.createElement('div');
  addedAddonsContainer.classList.add('dish_addons-container');
  const addonsContainer = `
                  <div class="dish_addons-container">
                  <div class="dish_addons-container--item">
                  <div id="${id}" class="dish_addons-container--item__close">&#x2715</div>
                  <img src="${pic}" class="dish_addons-container--item__img" alt="${name}">
                  </div>
                  <p>${name}</p>
                  </div>
                  `;
  addedAddonsContainer.innerHTML = addonsContainer;
  return addedAddonsContainer;
};

export { createAddon, createAddedAddon };
