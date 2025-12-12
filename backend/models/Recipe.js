// In-memory recipe storage (replace with database in production)
let recipes = [
  {
    id: '1',
    title: 'Chicken Biryani',
    description: 'Aromatic Pakistani rice dish with tender chicken and fragrant spices',
    ingredients: ['2 lbs chicken', '3 cups basmati rice', '2 large onions', '1 cup yogurt', '4 tomatoes', 'Ginger-garlic paste', 'Biryani masala', 'Saffron', 'Fresh mint and coriander', 'Ghee'],
    instructions: ['Marinate chicken with yogurt, ginger-garlic paste, and spices', 'Fry sliced onions until golden brown', 'Layer marinated chicken in a pot', 'Parboil rice with whole spices', 'Layer rice over chicken', 'Add fried onions, saffron milk, mint and ghee', 'Cover and cook on low heat (dum) for 30 minutes', 'Serve hot with raita'],
    category: 'Dinner',
    cookingTime: 90,
    difficulty: 'Medium',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800',
    author: 'Chef Fatima',
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    title: 'Nihari',
    description: 'Slow-cooked beef stew with aromatic spices, a Pakistani breakfast favorite',
    ingredients: ['2 lbs beef shank', '2 tablespoons wheat flour', '3 tablespoons ghee', 'Nihari masala', '2 onions', 'Ginger-garlic paste', 'Green chilies', 'Fresh coriander', 'Lemon wedges', 'Ginger julienne'],
    instructions: ['Heat ghee and brown the beef pieces', 'Add onions and ginger-garlic paste, sauté until golden', 'Mix nihari masala with wheat flour and water', 'Add masala mixture to meat with enough water', 'Slow cook for 6-8 hours until meat is tender', 'Garnish with ginger, green chilies, and coriander', 'Serve with naan and lemon wedges'],
    category: 'Breakfast',
    cookingTime: 480,
    difficulty: 'Medium',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800',
    author: 'Chef Ahmed',
    createdAt: new Date('2024-02-10')
  },
  {
    id: '3',
    title: 'Karahi Gosht',
    description: 'Spicy mutton curry cooked in a wok with tomatoes and aromatic spices',
    ingredients: ['1 kg mutton', '4 large tomatoes', '1/2 cup oil', 'Ginger julienne', '6 green chilies', 'Coriander seeds crushed', 'Cumin seeds', 'Red chili powder', 'Garam masala', 'Fresh coriander'],
    instructions: ['Heat oil in a karahi (wok) and add mutton pieces', 'Cook on high heat until meat releases water', 'Let water evaporate and meat browns in its own fat', 'Add ginger-garlic paste and spices', 'Add chopped tomatoes and cook until oil separates', 'Add crushed coriander and cumin', 'Garnish with ginger julienne, green chilies, and fresh coriander', 'Serve hot with naan'],
    category: 'Dinner',
    cookingTime: 75,
    difficulty: 'Medium',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800',
    author: 'Chef Imran',
    createdAt: new Date('2024-03-05')
  },
  {
    id: '4',
    title: 'Haleem',
    description: 'Traditional Pakistani stew of wheat, barley, lentils, and meat',
    ingredients: ['1 lb beef/mutton', '1 cup wheat', '1/2 cup barley', '1/2 cup mixed lentils', '2 onions', 'Ginger-garlic paste', 'Haleem masala', 'Ghee', 'Fried onions', 'Mint and coriander', 'Lemon wedges', 'Ginger julienne'],
    instructions: ['Soak wheat, barley, and lentils overnight', 'Pressure cook meat with ginger-garlic paste until tender', 'In another pot, cook grains and lentils until very soft', 'Shred the cooked meat and mix with grain mixture', 'Use a wooden spoon to beat mixture until smooth', 'Add haleem masala and ghee', 'Cook on low heat for 30 minutes, stirring frequently', 'Garnish with fried onions, ginger, mint, and serve with lemon'],
    category: 'Dinner',
    cookingTime: 180,
    difficulty: 'Medium',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800',
    author: 'Chef Zainab',
    createdAt: new Date('2024-02-20')
  },
  {
    id: '5',
    title: 'Seekh Kabab',
    description: 'Spiced minced meat skewers grilled to perfection',
    ingredients: ['1 kg minced beef/mutton', '2 onions finely chopped', 'Green chilies', 'Fresh coriander', 'Fresh mint', 'Ginger-garlic paste', 'Garam masala', 'Cumin powder', 'Coriander powder', 'Egg', 'Salt'],
    instructions: ['Mix minced meat with all ingredients in a large bowl', 'Knead mixture well until it becomes sticky', 'Cover and refrigerate for 30 minutes', 'Wet hands and mold mixture onto skewers', 'Grill on medium-high heat, turning frequently', 'Cook until nicely browned and cooked through', 'Serve hot with mint chutney and naan'],
    category: 'Dinner',
    cookingTime: 30,
    difficulty: 'Easy',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800',
    author: 'Chef Bilal',
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
