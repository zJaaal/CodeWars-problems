//https://www.codewars.com/kata/525c65e51bf619685c000059

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
