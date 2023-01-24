function cakes(recipe, available) {
  let availableKeys = Object.keys(available);
  let recipeKeys = Object.keys(recipe);

  if (recipeKeys.filter((x) => !availableKeys.includes(x)).length) return 0;

  availableKeys = availableKeys.filter((key) => recipeKeys.includes(key));

  let quantitys = availableKeys.map((key) => {
    return Math.floor(available[key] / recipe[key]);
  });

  return Math.min(...quantitys);
}

let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.assert(cakes(recipe, available) == 2, 'Should be equal to 2');

recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };
console.assert(cakes(recipe, available) == 0, 'Should be equal to 0');
