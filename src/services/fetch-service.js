/* eslint-disable import/no-cycle */
import state from '../store/state';

const getData = async () => {
  const response = await fetch('http://localhost:3000/categories');
  const data = await response.json();
  state.categories = data;
  return data;
};

export default getData;
