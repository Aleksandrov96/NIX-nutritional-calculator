// eslint-disable-next-line import/no-cycle
import state from '../../store/state';
import createDishInfoContainer from './dish-info-container';

const renderDefaultDishInfo = (item, dishImagePreview) => {
  item.dishes.forEach(({ pic, id, name }) => {
    if (state.currentDishId === id) {
      createDishInfoContainer(pic, name, dishImagePreview);
    }
  });
};

const renderSelectedDishInfo = (dish, dishImagePreview) => {
  const { pic, name } = dish;
  createDishInfoContainer(pic, name, dishImagePreview);
};

export { renderDefaultDishInfo, renderSelectedDishInfo };
