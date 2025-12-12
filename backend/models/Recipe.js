// In-memory recipe storage (replace with database in production)
let recipes = [
  {
    id: '1',
    title: 'Classic Pancakes',
    description: 'Fluffy and delicious pancakes perfect for breakfast',
    ingredients: ['2 cups all-purpose flour', '2 tablespoons sugar', '2 teaspoons baking powder', '1 teaspoon salt', '2 eggs', '1.5 cups milk', '1/4 cup melted butter'],
    instructions: ['Mix dry ingredients in a large bowl', 'In another bowl, beat eggs and add milk and melted butter', 'Pour wet ingredients into dry ingredients and mix until just combined', 'Heat a griddle over medium heat', 'Pour 1/4 cup of batter for each pancake', 'Cook until bubbles form, then flip and cook until golden brown'],
    category: 'Breakfast',
    cookingTime: 20,
    difficulty: 'Easy',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800',
    author: 'Chef John',
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    title: 'Vegan Buddha Bowl',
    description: 'Nutritious and colorful plant-based meal',
    ingredients: ['1 cup quinoa', '1 can chickpeas', '2 cups kale', '1 avocado', '1 cup cherry tomatoes', 'Tahini dressing', '1 tablespoon olive oil', 'Salt and pepper to taste'],
    instructions: ['Cook quinoa according to package instructions', 'Roast chickpeas with olive oil and spices at 400°F for 25 minutes', 'Massage kale with olive oil and salt', 'Slice avocado and halve cherry tomatoes', 'Arrange all ingredients in a bowl', 'Drizzle with tahini dressing'],
    category: 'Vegan',
    cookingTime: 35,
    difficulty: 'Easy',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
    author: 'Sarah Green',
    createdAt: new Date('2024-02-10')
  },
  {
    id: '3',
    title: 'Chocolate Lava Cake',
    description: 'Decadent dessert with a molten chocolate center',
    ingredients: ['1/2 cup butter', '4 oz dark chocolate', '1 cup powdered sugar', '2 eggs', '2 egg yolks', '6 tablespoons flour', 'Vanilla ice cream for serving'],
    instructions: ['Preheat oven to 425°F', 'Melt butter and chocolate together', 'Whisk in powdered sugar until combined', 'Add eggs and egg yolks, mix well', 'Fold in flour', 'Pour into greased ramekins', 'Bake for 12-14 minutes', 'Invert onto plates and serve with ice cream'],
    category: 'Desserts',
    cookingTime: 25,
    difficulty: 'Medium',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800',
    author: 'Chef Marie',
    createdAt: new Date('2024-03-05')
  },
  {
    id: '4',
    title: 'Mediterranean Pasta Salad',
    description: 'Fresh and light pasta salad with Mediterranean flavors',
    ingredients: ['1 lb pasta', '2 cups cherry tomatoes', '1 cup kalamata olives', '1 cup feta cheese', '1 cucumber', '1/4 cup olive oil', '2 tablespoons lemon juice', 'Fresh basil'],
    instructions: ['Cook pasta according to package instructions', 'Chop all vegetables', 'In a large bowl, combine pasta and vegetables', 'Whisk together olive oil and lemon juice', 'Pour dressing over salad and toss', 'Top with feta cheese and fresh basil', 'Chill before serving'],
    category: 'Lunch',
    cookingTime: 20,
    difficulty: 'Easy',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800',
    author: 'Antonio',
    createdAt: new Date('2024-02-20')
  },
  {
    id: '5',
    title: 'Grilled Salmon with Herbs',
    description: 'Perfectly grilled salmon with fresh herbs and lemon',
    ingredients: ['4 salmon fillets', '2 tablespoons olive oil', 'Fresh dill', 'Fresh parsley', '2 lemons', 'Salt and pepper', '2 cloves garlic'],
    instructions: ['Preheat grill to medium-high heat', 'Mix olive oil with chopped herbs and minced garlic', 'Season salmon with salt and pepper', 'Brush herb mixture on salmon', 'Grill for 4-5 minutes per side', 'Squeeze fresh lemon juice before serving'],
    category: 'Dinner',
    cookingTime: 15,
    difficulty: 'Easy',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800',
    author: 'Chef Robert',
    createdAt: new Date('2024-01-25')
  },
  {
    id: '6',
    title: 'Homemade Pizza Margherita',
    description: 'Classic Italian pizza with fresh basil and mozzarella',
    ingredients: ['Pizza dough', '1 cup tomato sauce', '8 oz fresh mozzarella', 'Fresh basil leaves', '2 tablespoons olive oil', 'Salt to taste'],
    instructions: ['Preheat oven to 475°F with pizza stone', 'Roll out pizza dough', 'Spread tomato sauce evenly', 'Add torn mozzarella pieces', 'Drizzle with olive oil', 'Bake for 12-15 minutes until crust is golden', 'Top with fresh basil leaves'],
    category: 'Dinner',
    cookingTime: 30,
    difficulty: 'Medium',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800',
    author: 'Luigi',
    createdAt: new Date('2024-03-01')
  }
];

class Recipe {
  constructor(data) {
    this.id = data.id || Date.now().toString();
    this.title = data.title;
    this.description = data.description;
    this.ingredients = data.ingredients;
    this.instructions = data.instructions;
    this.category = data.category;
    this.cookingTime = data.cookingTime;
    this.difficulty = data.difficulty || 'Medium';
    this.rating = data.rating || 0;
    this.image = data.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800';
    this.author = data.author;
    this.userId = data.userId;
    this.createdAt = new Date();
  }

  static getAll() {
    return recipes;
  }

  static findById(id) {
    return recipes.find(recipe => recipe.id === id);
  }

  static create(recipeData) {
    const recipe = new Recipe(recipeData);
    recipes.push(recipe);
    return recipe;
  }

  static delete(id) {
    const index = recipes.findIndex(recipe => recipe.id === id);
    if (index !== -1) {
      recipes.splice(index, 1);
      return true;
    }
    return false;
  }

  static search(query) {
    const lowerQuery = query.toLowerCase();
    return recipes.filter(recipe => 
      recipe.title.toLowerCase().includes(lowerQuery) ||
      recipe.description.toLowerCase().includes(lowerQuery) ||
      recipe.ingredients.some(ing => ing.toLowerCase().includes(lowerQuery))
    );
  }

  static filterByCategory(category) {
    if (!category) return recipes;
    return recipes.filter(recipe => recipe.category === category);
  }

  static filterByTime(maxTime) {
    if (!maxTime) return recipes;
    return recipes.filter(recipe => recipe.cookingTime <= maxTime);
  }
}

module.exports = Recipe;
