import React,{ useState } from 'react';

function RecipesList() {
  const [recipe, setRecipe] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
    const data = await response.json();

    if (data.meals && data.meals.length > 0) {
      const { idMeal, strMeal, strInstructions, strMealThumb } = data.meals[0];
      setRecipe({ id: idMeal, name: strMeal, description: strInstructions, image: strMealThumb });
    } else {
      setRecipe(null);
    }
  };

  return (
    <div className="search-bar">
      <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      <button onClick={handleSearch}>Buscar</button>

      {recipe && (
        <div className="Recipe">
          <h2>{recipe.name}</h2>
           <p>Ingredintes & Pasos</p>
          <h3>{recipe.description}</h3>
          <img src={recipe.image} alt={recipe.name} className="RecipeImage" />
        </div>
      )}

      {!recipe && <p>No se encontró la receta.</p>}
    </div>
  );
}

export default RecipesList;