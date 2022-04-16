// eslint-disable-next-line import/no-cycle
import state from '../../store/state';
import createNutritionValueTable from './nutritional-value-table';

const renderNutritionValueSection = () => {
  const sectionDOMContainer = document.querySelector('.nutricion_facts-wrapper');
  sectionDOMContainer.innerHTML = '';
  sectionDOMContainer.appendChild(createNutritionValueTable(state.totalNutritionalValue));
};

export default renderNutritionValueSection;
