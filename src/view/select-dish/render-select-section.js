/* eslint-disable import/no-cycle */
import state from '../../store/state';
import createSelectSection from './select-section';

const renderSelectSection = () => {
  const sectionFragment = document.createDocumentFragment();
  const category = state.categories.find((cat) => state.activeCategoryId === cat.id);
  sectionFragment.appendChild(createSelectSection(category));
  const main = document.getElementById('main');
  main.prepend(sectionFragment);
};

export default renderSelectSection;
