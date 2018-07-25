const NAME_SEARCH_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
const CATEGORY_LIST_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const INGREDIENT_SEARCH_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php';
const WILDCARD_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const ID_SEARCH_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php';

//AJAX function to search API by name
function searchApiByName(searchTerm, callback) {
	console.log('searchApiByName ran');
	const query = {
		s: `${searchTerm}`,
	}
	$.getJSON(NAME_SEARCH_URL, query, callback);
}

//AJAX function to list API categories

//AJAX function to search API by ingredient

//AJAX function to get random recipe from API

//watch for click on 'search by name' button
function watchClickName() {
	$('.name-button').on('click', event => {
		console.log('watchClickName ran');
		$('.names').prop('hidden', false);
	});
}

//watch for name search submit
function watchNameSearch() {
	$('#name-search-form').submit(event => {
		console.log('watchNameSearch ran');
		event.preventDefault();
		const query = $('#name-search').val();
		console.log(query);
		$('#name-search').val("");
		searchApiByName(query, displayNameSearchResults)
	});
}

//show name search results
function displayNameSearchResults(data) {
	console.log('displayNameSearchResults ran');
	console.log(data);
	const results = data.drinks.map((item, index) => generateNameResults(item));
	$('.name-search-results').html(results);
	$('.name-search-results').prop('hidden', false);
}

//generate HTML for name search results
function generateNameResults(result) {
	console.log('generateNameResults ran');
	return `
		<div class="col-6">
			<div class="name-photo">
				<h2 id="${result.idDrink}">${result.strDrink}</h2>
				<img src="${result.strDrinkThumb}" id="${result.idDrink}" class="thumbnail">
			</div>
		</div>`;
}

//listen for click on recipe name
function watchCocktailNameClick() {
	console.log('watchCocktailNameClick ran');
	$('.name-search-results').on('click', '.name-photo', event => {
		const recipeTarget = event.target.id;
		console.log(recipeTarget);
		searchApiById(recipeTarget, displayRecipe);
	});
}

//display recipe on page
function displayRecipe(data) {
	console.log('displayRecipe ran');
	console.log(data);
	const results = data.drinks.map((item, index) => generateRecipe(item));
	data.drinks.map((item, index) => generateIngredientList(item));
	$('.recipe').html(results);
	//$('#ingredient-list').html(ingredientResults);
	$('.recipe').prop('hidden', false);
	$('.ingredient-display').prop('hidden', false);
	$('.name-search-results').prop('hidden', true);
}


//generate recipe HTML
function generateRecipe(recipe) {
	console.log('generateRecipe ran');
	return `
	<h2>${recipe.strDrink}</h2>
	<img src="${recipe.strDrinkThumb}" class="feature-image" alt="Photo of ${recipe.strDrink}">
	<h3>Ingredients</h3>`;
}

function generateIngredientList(recipe) {
	if (recipe.strIngredient1 != "") {
		$('#ingredient-list').append(`<li>${recipe.strMeasure1} ${recipe.strIngredient1}</li>`);
	};
	if (recipe.strIngredient2 != "") {
		$('#ingredient-list').append(`<li>${recipe.strMeasure2} ${recipe.strIngredient2}</li>`);
	};
	if (recipe.strIngredient3 != "") {
		$('#ingredient-list').append(`<li>${recipe.strMeasure3} ${recipe.strIngredient3}</li>`);
	};
	if (recipe.strIngredient4 != "") {
		$('#ingredient-list').append(`<li>${recipe.strMeasure4} ${recipe.strIngredient4}</li>`);
	};
	if (recipe.strIngredient5 != "") {
		$('#ingredient-list').append(`<li>${recipe.strMeasure5} ${recipe.strIngredient5}</li>`);
	};
	if (recipe.strIngredient6 != "") {
		$('#ingredient-list').append(`<li>${recipe.strMeasure6} ${recipe.strIngredient6}</li>`);
	};
	if (recipe.strIngredient7 != "") {
		$('#ingredient-list').append(`<li>${recipe.strMeasure7} ${recipe.strIngredient7}</li>`);
	};
	if (recipe.strIngredient8 != "") {
		$('#ingredient-list').append(`<li>${recipe.strMeasure8} ${recipe.strIngredient8}</li>`);
	};
	if (recipe.strIngredient9 != "") {
		$('#ingredient-list').append(`<li>${recipe.strMeasure9} ${recipe.strIngredient9}</li>`);
	};
	if (recipe.strIngredient10 != "") {
		$('#ingredient-list').append(`<li>${recipe.strMeasure10} ${recipe.strIngredient10}</li>`);
	};
	if (recipe.strIngredient11 != "") {
		$('#ingredient-list').append(`<li>${recipe.strMeasure11} ${recipe.strIngredient11}</li>`);
	};
	if (recipe.strIngredient12 != "") {
		$('#ingredient-list').append(`<li>${recipe.strMeasure12} ${recipe.strIngredient12}</li>`);
	};
	if (recipe.strIngredient13 != "") {
		$('#ingredient-list').append(`<li>${recipe.strMeasure13} ${recipe.strIngredient13}</li>`);
	};
	if (recipe.strIngredient14 != "") {
		$('#ingredient-list').append(`<li>${recipe.strMeasure14} ${recipe.strIngredient14}</li>`);
	};
	if (recipe.strIngredient15 != "") {
		$('#ingredient-list').append(`<li>${recipe.strMeasure15} ${recipe.strIngredient15}</li>`);
	};
}

//search API by cocktail ID
function searchApiById(searchTerm, callback) {
		const query = {
		i: `${searchTerm}`,
	}
	$.getJSON(ID_SEARCH_URL, query, callback);
}

watchClickName();
watchNameSearch();
watchCocktailNameClick();
