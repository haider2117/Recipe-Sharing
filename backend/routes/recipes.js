const express = require('express');
const { body, validationResult } = require('express-validator');
const Recipe = require('../models/Recipe');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/recipes
// @desc    Get all recipes with optional filters
// @access  Public
router.get('/', (req, res) => {
  try {
    const { search, category, maxTime } = req.query;
    
    let recipes = Recipe.getAll();

    // Apply search filter
    if (search) {
      recipes = Recipe.search(search);
    }

    // Apply category filter
    if (category && category !== 'All') {
      recipes = recipes.filter(recipe => recipe.category === category);
    }

    // Apply time filter
    if (maxTime) {
      recipes = recipes.filter(recipe => recipe.cookingTime <= parseInt(maxTime));
    }

    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   GET /api/recipes/:id
// @desc    Get recipe by ID
// @access  Public
router.get('/:id', (req, res) => {
  try {
    const recipe = Recipe.findById(req.params.id);
    
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.json(recipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   POST /api/recipes
// @desc    Create a new recipe
// @access  Private
router.post(
  '/',
  [
    authMiddleware,
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('description').trim().notEmpty().withMessage('Description is required'),
    body('ingredients').isArray({ min: 1 }).withMessage('At least one ingredient is required'),
    body('instructions').isArray({ min: 1 }).withMessage('At least one instruction is required'),
    body('category').trim().notEmpty().withMessage('Category is required'),
    body('cookingTime').isNumeric().withMessage('Cooking time must be a number')
  ],
  (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const recipeData = {
        ...req.body,
        author: req.user.name,
        userId: req.user.id
      };

      const recipe = Recipe.create(recipeData);
      res.status(201).json(recipe);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// @route   DELETE /api/recipes/:id
// @desc    Delete a recipe
// @access  Private
router.delete('/:id', authMiddleware, (req, res) => {
  try {
    const recipe = Recipe.findById(req.params.id);
    
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    // Check if user owns the recipe
    if (recipe.userId && recipe.userId !== req.user.id) {
      return res.status(403).json({ error: 'Not authorized to delete this recipe' });
    }

    Recipe.delete(req.params.id);
    res.json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
