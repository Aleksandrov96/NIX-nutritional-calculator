const createDishInfoContainer = (pic, name, dishImagePreview) => {
  const dishImage = `
              <img src="${pic}" class="dish_preview-image" alt="${name}">
            `;
  const imageContainer = dishImagePreview;
  imageContainer.innerHTML = '';
  imageContainer.insertAdjacentHTML('afterbegin', dishImage);
};

export default createDishInfoContainer;
