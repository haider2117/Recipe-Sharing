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
    title: 'Aloo Paratha',
    description: 'Stuffed flatbread with spiced potato filling, perfect for breakfast',
    ingredients: ['2 cups wheat flour', '4 potatoes boiled and mashed', '1 onion chopped', 'Green chilies', 'Coriander leaves', 'Cumin seeds', 'Red chili powder', 'Garam masala', 'Ghee or butter', 'Salt'],
    instructions: ['Make dough with wheat flour and water', 'Mix mashed potatoes with onions, chilies, spices, and coriander', 'Roll out small circles, add potato filling in center', 'Seal and roll into flat parathas', 'Cook on griddle with ghee until golden brown on both sides', 'Serve hot with yogurt and pickle'],
    category: 'Breakfast',
    cookingTime: 35,
    difficulty: 'Easy',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800',
    author: 'Chef Sana',
    createdAt: new Date('2024-03-01')
  },
  {
    id: '7',
    title: 'Samosa Chaat',
    description: 'Crispy samosas topped with chickpeas, yogurt, and tangy chutneys',
    ingredients: ['6 samosas', '1 cup boiled chickpeas', '1 cup yogurt', 'Tamarind chutney', 'Mint chutney', 'Chaat masala', 'Red chili powder', 'Chopped onions', 'Fresh coriander', 'Sev (crispy noodles)'],
    instructions: ['Break samosas into pieces in a serving plate', 'Add boiled chickpeas on top', 'Pour whisked yogurt over samosas', 'Drizzle tamarind and mint chutneys', 'Sprinkle chaat masala and red chili powder', 'Top with onions, coriander, and sev', 'Serve immediately while samosas are still crispy'],
    category: 'Snacks',
    cookingTime: 10,
    difficulty: 'Easy',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800',
    author: 'Chef Rahul',
    createdAt: new Date('2024-03-10')
  },
  {
    id: '8',
    title: 'Chapli Kabab',
    description: 'Flat spicy ground meat patties from Peshawar',
    ingredients: ['1 kg minced beef', '2 onions finely chopped', '2 tomatoes chopped', 'Coriander seeds crushed', 'Pomegranate seeds', 'Green chilies', 'Ginger paste', 'Red chili flakes', 'Coriander leaves', 'Corn flour', 'Oil for frying'],
    instructions: ['Mix minced meat with all ingredients except oil', 'Add corn flour to bind the mixture', 'Make flat round patties', 'Heat oil in a flat pan', 'Fry patties until crispy and golden on both sides', 'Serve with naan and chutney'],
    category: 'Lunch',
    cookingTime: 25,
    difficulty: 'Easy',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800',
    author: 'Chef Khalid',
    createdAt: new Date('2024-03-15')
  },
  {
    id: '9',
    title: 'Gulab Jamun',
    description: 'Sweet milk solid dumplings soaked in rose-flavored sugar syrup',
    ingredients: ['1 cup milk powder', '1/4 cup all-purpose flour', '1/4 tsp baking soda', '2 tbsp ghee', 'Milk as needed', '2 cups sugar', '2 cups water', 'Cardamom pods', 'Rose water', 'Saffron strands', 'Oil for frying'],
    instructions: ['Mix milk powder, flour, baking soda, and ghee', 'Add milk gradually to make soft dough', 'Make small smooth balls', 'Make sugar syrup with water, sugar, cardamom, and rose water', 'Deep fry balls on low heat until golden brown', 'Soak fried balls in warm syrup for 2 hours', 'Serve warm or at room temperature'],
    category: 'Desserts',
    cookingTime: 45,
    difficulty: 'Medium',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1593560704563-f176a2eb61db?w=800',
    author: 'Chef Ayesha',
    createdAt: new Date('2024-03-20')
  },
  {
    id: '10',
    title: 'Daal Chawal',
    description: 'Comforting Pakistani lentils served with steamed rice',
    ingredients: ['1 cup yellow lentils', '1 onion sliced', '2 tomatoes chopped', 'Ginger-garlic paste', 'Turmeric powder', 'Red chili powder', 'Cumin seeds', 'Ghee', 'Green chilies', 'Coriander leaves', 'Basmati rice'],
    instructions: ['Wash and cook lentils with turmeric until soft', 'Heat ghee and fry cumin seeds', 'Add onions and fry until golden', 'Add ginger-garlic paste and tomatoes', 'Add cooked lentils and spices', 'Simmer for 10 minutes', 'Cook rice separately', 'Serve daal over rice with green chilies and coriander'],
    category: 'Lunch',
    cookingTime: 40,
    difficulty: 'Easy',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800',
    author: 'Chef Nadia',
    createdAt: new Date('2024-03-25')
  },
  {
    id: '11',
    title: 'Fruit Chaat',
    description: 'Refreshing spiced fruit salad with tangy flavors',
    ingredients: ['2 apples diced', '2 bananas sliced', '1 cup grapes', '1 orange segmented', '1 guava diced', 'Chaat masala', 'Black salt', 'Lemon juice', 'Black pepper', 'Fresh mint'],
    instructions: ['Chop all fruits into bite-sized pieces', 'Mix in a large bowl', 'Squeeze lemon juice over fruits', 'Sprinkle chaat masala, black salt, and black pepper', 'Toss well to coat', 'Garnish with fresh mint leaves', 'Serve immediately chilled'],
    category: 'Snacks',
    cookingTime: 10,
    difficulty: 'Easy',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1564093497595-593b96d80180?w=800',
    author: 'Chef Maria',
    createdAt: new Date('2024-04-01')
  },
  {
    id: '12',
    title: 'Shahi Tukray',
    description: 'Royal bread pudding with creamy milk rabri and nuts',
    ingredients: ['6 bread slices', '2 cups milk', '1/2 cup sugar', 'Cardamom powder', 'Saffron', 'Ghee for frying', 'Almonds sliced', 'Pistachios sliced', 'Khoya (milk solids)', 'Silver leaf (optional)'],
    instructions: ['Deep fry bread slices in ghee until golden', 'Boil milk with sugar, cardamom, and saffron until thick', 'Add khoya and cook until creamy', 'Dip fried bread in warm sugar syrup briefly', 'Pour thick milk rabri over bread', 'Garnish with nuts and silver leaf', 'Serve warm or chilled'],
    category: 'Desserts',
    cookingTime: 50,
    difficulty: 'Medium',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800',
    author: 'Chef Hina',
    createdAt: new Date('2024-04-05')
  },
  {
    id: '13',
    title: 'Vegan Quinoa Bowl',
    description: 'Healthy plant-based bowl with quinoa, chickpeas, and tahini dressing',
    ingredients: ['1 cup quinoa', '1 can chickpeas roasted', '2 cups spinach', '1 avocado', 'Cherry tomatoes', 'Cucumber', 'Tahini', 'Lemon juice', 'Garlic', 'Olive oil', 'Sesame seeds'],
    instructions: ['Cook quinoa according to package instructions', 'Roast chickpeas with olive oil and spices', 'Prepare tahini dressing with tahini, lemon, garlic, and water', 'Arrange quinoa, spinach, roasted chickpeas in bowl', 'Add sliced avocado, tomatoes, and cucumber', 'Drizzle tahini dressing', 'Sprinkle sesame seeds and serve'],
    category: 'Vegan',
    cookingTime: 30,
    difficulty: 'Easy',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
    author: 'Chef Sophie',
    createdAt: new Date('2024-04-10')
  },
  {
    id: '14',
    title: 'Pakoras',
    description: 'Crispy deep-fried vegetable fritters, perfect tea-time snack',
    ingredients: ['1 cup chickpea flour', '1 potato sliced thin', '1 onion sliced', 'Spinach leaves', 'Green chilies', 'Coriander leaves', 'Cumin seeds', 'Red chili powder', 'Baking soda', 'Salt', 'Oil for frying'],
    instructions: ['Mix chickpea flour with spices and baking soda', 'Add water to make thick batter', 'Heat oil in deep pan', 'Dip vegetables in batter', 'Deep fry until golden and crispy', 'Drain on paper towels', 'Serve hot with mint chutney and chai'],
    category: 'Snacks',
    cookingTime: 25,
    difficulty: 'Easy',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800',
    author: 'Chef Zara',
    createdAt: new Date('2024-04-15')
  },
  {
    id: '15',
    title: 'Vegan Lentil Soup',
    description: 'Hearty and nutritious red lentil soup with vegetables',
    ingredients: ['1 cup red lentils', '1 onion diced', '2 carrots diced', '2 celery stalks', '4 cups vegetable broth', 'Cumin powder', 'Turmeric', 'Lemon juice', 'Spinach', 'Olive oil', 'Garlic', 'Salt and pepper'],
    instructions: ['Sauté onions, carrots, and celery in olive oil', 'Add garlic and spices', 'Add lentils and vegetable broth', 'Simmer for 20 minutes until lentils are soft', 'Add spinach and cook until wilted', 'Blend half the soup for creamy texture', 'Add lemon juice and adjust seasoning', 'Serve hot with crusty bread'],
    category: 'Vegan',
    cookingTime: 35,
    difficulty: 'Easy',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800',
    author: 'Chef Emma',
    createdAt: new Date('2024-04-20')
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
