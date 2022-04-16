/* eslint-disable import/no-cycle */
import './style.scss';
import state from './store/state';
import getData from './services/fetch-service';
import renderMenu from './view/menu/render-menu';
import renderSelectSection from './view/select-dish/render-select-section';
import renderAddonsSection from './view/add-ons/render-addons-section';
import renderNutritionValueSection from './view/nutritional-value/render-nutrition-value-section';

const renderApp = () => {
  renderMenu();
  renderSelectSection();
  renderAddonsSection();
  renderNutritionValueSection();
};

window.state = state;
(function init() {
  getData();
  window.onload = () => renderApp();
}());

export default renderApp;
