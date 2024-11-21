document.addEventListener('DOMContentLoaded', () => {
    // Recipes array with six unique entries
    const recipes = [
        { 
            name: 'Spaghetti Bolognese', 
            image: 'images/r1.jpg', 
            description: 'A classic Italian pasta dish with rich, meaty sauce.', 
            details: `
                <h5>Ingredients:</h5>
                <ul>
                    <li>400g spaghetti</li>
                    <li>2 tbsp olive oil</li>
                    <li>1 onion, chopped</li>
                    <li>2 garlic cloves, minced</li>
                    <li>500g minced beef</li>
                    <li>400g can of chopped tomatoes</li>
                </ul>
                <h5>Instructions:</h5>
                <p>Cook the spaghetti according to package instructions. In a pan, heat olive oil and sauté the onion and garlic until soft. Add the minced beef and cook until browned. Add chopped tomatoes and simmer for 20 minutes. Serve over spaghetti.</p>
            `
        },
        {
            name: 'Chicken Curry',
            image: 'images/r2.jfif',
            description: 'A flavorful and spicy chicken curry with rich sauce.',
            details: `
                <h5>Ingredients:</h5>
                <ul>
                    <li>500g chicken breast, diced</li>
                    <li>2 onions, chopped</li>
                    <li>3 garlic cloves, minced</li>
                    <li>2 tbsp curry powder</li>
                    <li>400ml coconut milk</li>
                </ul>
                <h5>Instructions:</h5>
                <p>Heat oil in a pan, add onions and garlic, and sauté until soft. Add chicken and curry powder, and cook until the chicken is done. Pour in coconut milk and simmer for 15-20 minutes. Serve with rice.</p>
            `
        },
        {
            name: 'Vegetable Stir Fry',
            image: 'images/r3.jpg',
            description: 'A quick and healthy vegetable stir fry with soy sauce.',
            details: `
                <h5>Ingredients:</h5>
                <ul>
                    <li>1 bell pepper, sliced</li>
                    <li>2 carrots, julienned</li>
                    <li>1 broccoli head, cut into florets</li>
                    <li>3 tbsp soy sauce</li>
                    <li>2 tbsp sesame oil</li>
                </ul>
                <h5>Instructions:</h5>
                <p>Heat sesame oil in a wok, add vegetables, and stir fry for 5-7 minutes. Add soy sauce and toss well. Serve immediately.</p>
            `
        },
        {
            name: 'Tacos al Pastor',
            image: 'images/r4.jfif',
            description: 'Mexican-style tacos with marinated pork and pineapple.',
            details: `
                <h5>Ingredients:</h5>
                <ul>
                    <li>500g pork shoulder, thinly sliced</li>
                    <li>1 pineapple, diced</li>
                    <li>1 tbsp chili powder</li>
                    <li>2 limes, juiced</li>
                    <li>8 corn tortillas</li>
                </ul>
                <h5>Instructions:</h5>
                <p>Marinate pork with chili powder and lime juice for 2 hours. Grill pork and pineapple until charred. Serve on tortillas with toppings of your choice.</p>
            `
        },
        {
            name: 'Pancakes',
            image: 'images/r5.jfif',
            description: 'Fluffy pancakes served with syrup and berries.',
            details: `
                <h5>Ingredients:</h5>
                <ul>
                    <li>2 cups flour</li>
                    <li>2 tbsp sugar</li>
                    <li>2 tsp baking powder</li>
                    <li>1 1/2 cups milk</li>
                    <li>2 eggs</li>
                    <li>2 tbsp melted butter</li>
                </ul>
                <h5>Instructions:</h5>
                <p>Mix flour, sugar, and baking powder. Add milk, eggs, and melted butter, and whisk until smooth. Cook on a griddle until golden brown. Serve with syrup and berries.</p>
            `
        },
        {
            name: 'Caesar Salad',
            image: 'images/r6.jfif',
            description: 'Crisp romaine lettuce with Caesar dressing and croutons.',
            details: `
                <h5>Ingredients:</h5>
                <ul>
                    <li>1 head romaine lettuce, chopped</li>
                    <li>1/2 cup Caesar dressing</li>
                    <li>1/4 cup grated Parmesan cheese</li>
                    <li>1 cup croutons</li>
                </ul>
                <h5>Instructions:</h5>
                <p>Toss lettuce with Caesar dressing. Sprinkle with Parmesan cheese and croutons. Serve chilled.</p>
            `
        }
    ];

    // Function to load recipes
    const recipeList = document.getElementById('recipe-list');
    recipes.forEach(recipe => {
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 mb-4';

        const card = `
            <div class="card h-100">
                <img src="${recipe.image}" class="card-img-top" alt="${recipe.name}">
                <div class="card-body">
                    <h5 class="card-title">${recipe.name}</h5>
                    <p class="card-text">${recipe.description}</p>
                    <button class="btn btn-primary" data-toggle="modal" data-target="#recipeModal" onclick="showRecipeDetails('${recipe.name}')">View Recipe</button>
                </div>
            </div>
        `;

        col.innerHTML = card;
        recipeList.appendChild(col);
    });

    // Function to show recipe details in the modal
    window.showRecipeDetails = function(recipeName) {
        const recipe = recipes.find(r => r.name === recipeName);
        if (recipe) {
            document.getElementById('recipeModalLabel').innerText = recipe.name;
            document.getElementById('recipeModalBody').innerHTML = recipe.details;
        }
    };
});
