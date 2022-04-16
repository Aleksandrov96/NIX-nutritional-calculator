const createNutritionValueTable = (totalValue) => {
  const table = document.createElement('table');
  table.id = 'total';
  const tableInner = `
      <tr>
          <td id="calories">Calories</td>
          <td>${totalValue}</td>
      </tr>
      <tr>
          <td>Total Fat</td>
          <td>-</td>
      </tr>
      <tr>
          <td>Carbs</td>
          <td>-</td>
      </tr>
      <tr>
          <td>Fiber</td>
          <td>-</td>
      </tr>
      <tr>
          <td>Sugars</td>
          <td>-</td>
      </tr>
      <tr>
          <td>Protein</td>
          <td>-</td>
      </tr>
  `;
  table.innerHTML = tableInner;
  return table;
};

export default createNutritionValueTable;
